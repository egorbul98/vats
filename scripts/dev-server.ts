import express, { Application } from 'express';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import debounce from 'lodash/debounce';
import webpack from 'webpack';

async function useWebpackMiddlewares(app: Application) {
    const dirs = ['dist/server'];
    const webpackClientConfig = (await import('../config/webpack.client.js')).default;
    const webpackServerConfig = (await import('../config/webpack.server.js')).default;

    let mainApp: any | null = null;
    const reloadMainAppWithDebounce = debounce(async () => {
        mainApp = await requireMainApp(dirs);
    }, 100);

    const clientConfig = webpackClientConfig({}, { mode: 'development' });
    const serverConfig = webpackServerConfig({}, { mode: 'development' });
    const multiCompiler = webpack([clientConfig, serverConfig] as webpack.Configuration[]);

    multiCompiler.hooks.done.tap('LocalServer', () => {
        reloadMainAppWithDebounce();
    });

    const devMiddleware = webpackDevMiddleware(multiCompiler, {
        serverSideRender: true,
        writeToDisk: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
    });
    const hotMiddleware = webpackHotMiddleware(
        multiCompiler.compilers.find((c) => {
            if (c.options.target) {
                return c.options.target.includes('web');
            }
        }) as webpack.Compiler,
    );

    app.use(devMiddleware);
    app.use(hotMiddleware);

    app.use((req, res, next) => {
        if (!mainApp) {
            res.send('<h1>mainApp is missing, help</h1>');
        } else {
            mainApp(req, res, next);
        }
    });
}

async function main() {
    const app = express();
    app.use(express.static('dist'));

    await useWebpackMiddlewares(app);

    app.listen('3000', () => {
        console.log(`Server running on http://localhost:3000`);
    });
}

async function requireMainApp(dirs: string[]) {
    Object.keys(require.cache).forEach((key) => {
        if (dirs.some((dir) => key.includes(dir))) {
            delete require.cache[key];
        }
    });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createApp } = require('../dist/server');
    const app: Application = await createApp();
    return app;
}

main();

module.exports = {
    parser: require('postcss-scss'),
    plugins: [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-reporter'),
        require('postcss-custom-media'),
        // require('postcss-url')({
        //     filter: /assets/,
        //     url: asset => {
        //         const { url } = asset;
        //         return `${process.env.CDN_URL || 'https://cnd.m2.ru'}/${url.substr(url.indexOf('assets/'))}`;
        //     },
        // }),
        // require('postcss-preset-env')({
        //     stage: 0,
        //     preserve: false,
        //     importFrom: [require.resolve('@vtblife/uikit-theme/dist/postcss-imports.json')],
        // }),
    ],
};

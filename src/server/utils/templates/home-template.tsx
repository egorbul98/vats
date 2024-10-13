import React from 'react';
import favicon from '../../../assets/favicon.ico';
import { renderToString } from 'react-dom/server';
import { MASTER_EMAIL, MASTER_PHONE } from '../../../components/feedback-form/constants';

export const HomeTemplate = ({
    cssPaths,
    jsPaths,
    content,
}: {
    cssPaths: string[];
    jsPaths: { src: string; type: 'defer' | 'async' }[];
    content: React.ReactNode;
}) => {
    const mainHtml = renderToString(
        <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href={favicon} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Ремонт холодильников в Москве! Гарантия 2 года на любые работы. Выезд в день обращения</title>
                <meta
                    name="description"
                    content="Ремонт холодильников. Срочный выезд в день обращения; бесплатная диагностика; оригинальные запчасти в наличии"
                />
                <link rel="apple-touch-icon" href={favicon} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                {cssPaths.map((item) => (
                    <link key={item} href={item} rel="stylesheet" />
                ))}

                <div
                    dangerouslySetInnerHTML={{
                        __html: `<!-- Yandex.Metrika counter -->
                                <script type="text/javascript" >
                                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                                ym(90509081, "init", {
                                        clickmap:true,
                                        trackLinks:true,
                                        accurateTrackBounce:true,
                                        webvisor:true
                                });
                                </script>
                                <noscript><div><img src="https://mc.yandex.ru/watch/90509081" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
                                <!-- /Yandex.Metrika counter -->`,
                    }}
                />
            </head>
            <body>
                <div itemScope itemType="http://schema.org/Organization">
                    <meta itemProp="name" content="ПрофХолод" />
                    <meta itemProp="telephone" content={MASTER_PHONE} />
                    <meta itemProp="email" content={MASTER_EMAIL} />

                    <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                        <meta itemProp="addressLocality" content="Москва,  Россия" />
                    </div>
                </div>
                <div id="root">{content}</div>
                {jsPaths.map(({ src, type }) => (
                    <script key={src} src={src} {...(type === 'defer' ? { defer: true } : { async: true })} />
                ))}
            </body>
        </html>,
    );

    return `<!DOCTYPE html>${mainHtml}`;
};

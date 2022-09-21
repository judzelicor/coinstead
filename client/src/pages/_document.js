import {
    Html,
    Head,
    Main,NextScript
} from "next/document";

export default function Document() {
    return (
        <Html data-theme="dark">
            <Head>
                <link rel="stylesheet" type="text/css" href="/css/normalize.css" />
                <link rel="stylesheet" type="text/css" href="/css/global.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
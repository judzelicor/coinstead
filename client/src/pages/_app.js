import {
    Footer,
    TopIsland
} from "../components";

export default function App({ Component, pageProps }) {
    return (
        <>
            <TopIsland />
            <Component {...pageProps} />
            <div>
                <Footer />
            </div>
        </>
    )
}
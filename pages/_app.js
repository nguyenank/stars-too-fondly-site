import "@/styles/globals.scss";
import { Public_Sans } from "@next/font/google";
const publicsans = Public_Sans({ weight: "400", subsets: ["latin"] });
export default function App({ Component, pageProps }) {
    return (
        <main className={publicsans.className}>
            <Component {...pageProps} />
        </main>
    );
}

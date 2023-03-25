import { Competition, Contact, Footer, Main, Navbar, Price, PriceCoin, TraderInfo, Usefull } from "@/components";
import Head from "next/head"

function Home() {
    return (
        <>
            <Head>
                <title>ARASHOV</title>
                <meta name="description" content="ARASHOV" />
                <meta name="keywords" content="arashov" />
                <link rel="shortcut icon" href="../assets/images/Logo.png" type="image/x-icon" />
            </Head>
            <main>
                <Navbar />
                <Main />
                <Usefull />
                <TraderInfo />
                <Competition />
                <Price />
                <Contact />
                <PriceCoin />
                <Footer />
            </main>
        </>
    );
}

export default Home;
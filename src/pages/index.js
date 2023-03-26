import { Competition, Contact, Footer, Main, Navbar, Price, TraderInfo, Usefull } from "@/components";
import Head from "next/head"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

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
                <Footer />
            </main>
        </>
    );
}

export default Home;
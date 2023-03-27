import { Competition, Contact, Footer, Main, Navbar, Price, TraderInfo, Usefull } from "@/components";
import Head from "next/head"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"
import Layout from "@/layout/layout"

function Home() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <Layout>
            <Head>
                <title>ARASHOV</title>
                <meta name="description" content="ARASHOV" />
                <meta name="keywords" content="arashov" />
                <link rel="shortcut icon" href="../assets/images/Logo.png" type="image/x-icon" />
            </Head>
            <main>
                <div className="site-top">
                    <Navbar />
                    <Main />
                </div>
                <Usefull />
                <TraderInfo />
                <Competition />
                <Price />
                <Contact />
                <Footer />
            </main>
        </Layout>
    );
}

export default Home;
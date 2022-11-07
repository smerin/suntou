import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Suntou Susso</title>
        <meta name="description" content="Kora player from The Gambia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

import Head from 'next/head'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Karlinski</title>
        <meta name="description" content="Meu portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/iconPortifolio.png" />
      </Head>
      <Header />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

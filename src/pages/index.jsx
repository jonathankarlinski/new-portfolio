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
      </Head>
      <Header />
      <Projects />
      <About />
      <Footer />
    </>
  )
}

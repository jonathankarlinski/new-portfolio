import Head from 'next/head'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Karlinski</title>
      </Head>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

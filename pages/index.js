import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Navbar from '@components/Navbar' // import the Navbar component

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar /> {/* include the Navbar component */}

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Welcome to my website! I'm excited to share my portfolio with you.
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

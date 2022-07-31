import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'

export default function Home() {

  const renderHeader = () => {
    return (
      <Head>
          <title>Shop Demo - J86 UK</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' /> 
          <meta name='description' content='J86 UK' />
          <meta name='keywords' content='J86 UK' />
          <meta name='author' content='J86 UK' />
          <meta name='robots' content='index, follow' />
          <meta name='language' content='en' />
        </Head>
    );
  }

  const renderBody = () => {
    return (
      <>
        <h1>Shop Demo</h1>
        <p>Shop Demo is a Magento Open source based site.</p>
        <p>Initially the project was running 2 instances of Vue Storefont 1 and an instnace of Scandipwa</p>
        <p>Magento has since been updated and Vue Storefront 2 is now and so Vue Storefront 1 has now been stopped</p>
        <p>Shopdemo, as the name suggests is just a demo Magento site.</p>
        <h3>Links</h3>
        <ul>
          <li><a href="https://www.shopdemo.co.uk" target="_blank" rel="noreferrer">Shop Demp Magento Instance</a></li>
          <li><a href="https://www.shopdemo.uk"  target="_blank" rel="noreferrer">Shop Demp Scandipwa Instance</a></li>
          </ul>
      </>
    )
  };

  return (
    <>
      { renderHeader() } 
      { renderBody() }
    </>
  )
}

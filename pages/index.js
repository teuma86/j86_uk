import Head from 'next/head'
// import Image from 'next/image'

export default function Home() {

  const renderHeader = () => {
    return (
      <Head>
          <title>J86 UK</title>
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
        <h1>J86 UK</h1>
        <p>Another crazy idea</p>
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

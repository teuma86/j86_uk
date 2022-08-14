import Link from 'next/link'

import Header from 'Components/GeneralLayout/Header'

export default function GitBook() {

  return (
    <main className='content'>
      <Header titlePrefix={'GitBook'} />
      <h1>GitBook</h1>
      <p>I have created a gitbook with information for setting uo some PWA sites I have used.</p>
      <Link href="https://docs.shopdemo.co.uk">
        <a target='_blank' className='externalLink'>
          Docs on gitbook
        </a>
      </Link>
    </main>
  )
}

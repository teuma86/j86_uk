import Link from 'next/link'
// import Image from 'next/image'
import Header from 'Components/GeneralLayout/Header'
export default function Home() {
  return (
    <main className='content'>
      <Header titlePrefix={'Shop Demo'} />
        <h1>Shop Demo</h1>
        <p>Shop Demo is a Magento Open source based site.</p>
        <p>Initially the project was running 2 instances of Vue Storefont 1 and an instnace of Scandipwa</p>
        <p>Magento has since been updated and Vue Storefront 2 is now and so Vue Storefront 1 has now been stopped</p>
        <p>Shopdemo, as the name suggests is just a demo Magento site.</p>
        <p><strong>The Vue Storefront 1 demo has now been stopped and deprcated</strong></p>
        <h3>Links</h3>
        <ul>
          <li>
            <Link href="https://www.shopdemo.co.uk">
              <a href="" target="_blank" className='externalLink'>
                Shop Demp Magento Instance
              </a>
            </Link>
            </li>
          <li>
            <Link href="https://www.shopdemo.uk">
              <a target="_blank" className='externalLink'>
                Shop Demp Scandipwa Instance
              </a>
            </Link>
            </li>
          </ul>
    </main>
  )
}

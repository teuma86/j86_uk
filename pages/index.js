import Header from 'Components/GeneralLayout/Header'
// import Image from 'next/image'

export default function Home() {

  return (
    <main className='content'>
      <Header titlePrefix={'Another Crazy idea'} />
      <h1>J86 UK</h1>
        <p>This site may be the start of a personal profile site.</p>
        <p>However, the true purpose of this site was so i could play things which are not visible to a website</p>
        <p>This includes things such as using github, github actions, nginx </p>
        <p>This is true for most projects listed here.  No fancy code or modules sorry.</p>
    </main>
  )
}

import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image'
export default function Layout({ children }) {

  return (
    <>
    <div className="container">
        <nav>
          <div className='logo'>
            <Link href="/">
              <a>
                <Image
                  src='/j86_logo.png'
                  alt='J86 UK'
                  width={150}
                  height={150}
                />
              </a>
            </Link>
          </div>
          <ul>
            <li><Link href="/"><a>J86 UK</a></Link></li>
            <li><Link href="/shopdemo"><a>Shop Demo</a></Link></li>
            <li><Link href="/gitbook"><a>Gitbook</a></Link></li>
          </ul>
        </nav>
        { children }
      
    </div>
    <footer>
    <p>&copy; J86 UK</p>
  </footer>
  </>
  );
}

Layout.props = {
  children: PropTypes.node.isRequired,
}
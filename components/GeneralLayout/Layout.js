import PropTypes from 'prop-types';
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {


  return (
    <>
    <div className="container">
        <nav>
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
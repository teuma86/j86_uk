import PropTypes from 'prop-types';
import Head from 'next/head';
//import Link from 'next/link';

export default function Header({ titlePrefix }) {
  return (
    <Head>
        <title>{titlePrefix} - J86 UK</title>
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

Header.props = {
  titlePrefix: PropTypes.string.isRequired
}

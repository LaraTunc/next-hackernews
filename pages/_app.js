import Head from 'next/head';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="application-name" content="hacker-next" />
				<meta name="apple-mobile-web-app-title" content="hacker-next" />
				<meta name="theme-color" content="#f60" />
				<meta name="msapplication-navbutton-color" content="#f60" />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content="black-translucent"
				/>
				<meta name="msapplication-starturl" content="/" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>

				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/icons/icon-512x512.png"
				/>
				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="512x512"
					href="/icons/icon-512x512.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/icons/icon-192x192.png"
				/>
				<link
					rel="apple-touch-icon"
					type="image/png"
					sizes="192x192"
					href="/icons/icon-192x192.png"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

// we can use anything from React without having to import it
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';
import Link from 'next/link';
import React, { useEffect } from 'react';

function Index({ stories, page }) {
	if (stories.length === 0) {
		return <Error statusCode={503} />;
	}

	return (
		<Layout
			title="Hacker Next"
			description="A Hacker News clone made with Next.js"
		>
			<StoryList stories={stories} />

			<footer>
				<Link href={`/?page=${page + 1}`}>
					<a>Next page ({Number(page) + 1})</a>
				</Link>
			</footer>

			<style jsx>{`
				footer {
					padding: 1em;
				}
				footer a {
					font-weight: bold;
					color: black;
					text-decoration: none;
				}
			`}</style>
		</Layout>
	);
}

Index.getInitialProps = async ({ query }) => {
	let page = query.page || 1;
	let stories;

	try {
		const api = `http://api.hackerwebapp.com/news?page=${page}`;
		const res = await fetch(api, {
			headers: {
				Accept: 'application/json, text/plain, */*',
				'User-Agent': '*',
				'Access-Control-Allow-Origin': '*',
			},
		});
		stories = await res.json();
	} catch (error) {
		console.log(error);
		stories = [];
	}

	return {
		stories,
		page,
	};
};

export default Index;

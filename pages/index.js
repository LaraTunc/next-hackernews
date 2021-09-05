// we can use anything from React without having to import it
import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import StoryList from '../components/StoryList';
import Link from 'next/link';

function Index({ stories }) {
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
				<Link href={`/?page=1`}>
					<a>Click here</a>
				</Link>
			</footer>
		</Layout>
	);
}

export async function getStaticProps() {
	let stories;

	try {
		const res = await fetch(`http://api.hackerwebapp.com/news?page=1`, {
			headers: {
				Accept: 'application/json, text/plain, */*',
				'User-Agent': '*',
			},
		});
		stories = await res.json();
	} catch (error) {
		console.log(error);
		stories = [];
	}

	return {
		props: {
			stories,
		},
	};
}

export default Index;

import { error } from '@sveltejs/kit';
export const load = async ({ locals, params }) => {
	const posts = await locals.pb.collection('posts').getFullList();

	const post = posts.find((el) => el.path === params.path);

	if (post) {
		return { post: structuredClone(post) };
	}

	throw error(404, 'Not found');
};

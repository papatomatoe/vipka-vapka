export const load = async ({ locals, params }) => {
	const data = await locals.pb.collection('posts').getFullList();

	const posts = structuredClone(data);

	return { posts };
};

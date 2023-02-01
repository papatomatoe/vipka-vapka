<script lang="ts">
	export let data;

	const { post } = data;
</script>

<h1>{post.title}</h1>
<time datetime={post.created}>{new Date(post.created).toLocaleDateString('ru-RU')}</time>
<img src="http://127.0.0.1:8090/api/files/posts/{post.id}/{post.image}" alt={post.title} />
<p>{post.description}</p>
<div>{@html post.content}</div>

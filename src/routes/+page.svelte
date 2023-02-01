<script>
	import Slider from '$lib/components/Slider.svelte';

	const SLIDES = [
		{ id: 1, path: 'slide1.webp', title: 'slide1' },
		{ id: 2, path: 'slide2.webp', title: 'slide2' },
		{ id: 3, path: 'slide3.webp', title: 'slide3' }
	];

	const POSTS = [
		{
			id: 1,
			path: '/post1',
			title: 'lorem ipsum',
			image: 'post1.webp',
			description:
				'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение форм развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности влечет за собой процесс внедрения'
		},
		{
			id: 2,
			path: '/post2',
			title: 'lorem ipsum',
			image: 'post2.webp',
			description:
				'Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение форм развития. Идейные соображения высшего порядка, а также новая модель организационной деятельности влечет за собой процесс внедрения'
		}
	];

	const PRODUCTS = [
		{ id: 1, title: 'lorem ipsum', price: '199', image: 'product1.webp' },
		{ id: 2, title: 'lorem ipsum', price: '99', image: 'product2.webp' },
		{ id: 3, title: 'lorem ipsum', price: '299', image: 'product3.webp' }
	];

	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>main</title>
</svelte:head>

<h1 class="v-h">Главная страница</h1>

<section class="slider">
	<h2 class="v-h">Слайдер</h2>
	<div class="wrapper"><Slider slides={SLIDES} /></div>
</section>
{#if posts}
	<section class="section posts">
		<h2 class="section__title posts__title">Кое что интересное...</h2>
		<div class="wrapper">
			<ul class="posts__list">
				{#each posts as post (post.id)}
					<li class="posts__item post">
						<img
							class="post__img"
							src="http://127.0.0.1:8090/api/files/posts/{post.id}/{post.image}"
							alt={post.title}
						/>
						<div class="post__wrapper">
							<h3 class="post__title">{post.title}</h3>
							<p class="post__description">{post.description}</p>
							<a class="button post__link" href="/posts/{post.path}">читать</a>
						</div>
					</li>
				{/each}
			</ul>
			<a class="button section__button" href="/blog">перейти в блог</a>
		</div>
	</section>
{/if}

{#if PRODUCTS}
	<section class="section products">
		<h2 class="section__title goods__title">последние новинки</h2>
		<div class="wrapper">
			<ul class="products__list">
				{#each PRODUCTS as product (product.id)}
					<li class="product">
						<img class="product__img" src={product.image} alt={product.title} />
						<div class="product__wrapper">
							<a class="product__link" href="/shop/{product.id}"
								><h3 class="product__title">{product.title}</h3></a
							>
							<p class="product__price">$ {product.price}</p>
							<button class="button product__button">хочу</button>
						</div>
					</li>
				{/each}
			</ul>
			<a class="button section__button" href="/blog">все поделки</a>
		</div>
	</section>
{/if}

<style>
	.slider {
		/* --height-element: 30px; */
		position: relative;
		margin-top: -80px;
		padding: 120px 0 20px;
		background-color: #e3f0fa;
	}

	.section {
		--height-element: 30px;
		position: relative;
		padding: 50px 0 50px;
	}

	.section::before {
		position: absolute;
		width: 100%;
		height: var(--height-element);
		clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
		content: '';
		top: 0;
	}

	.section__title {
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: 32px;
		text-align: center;
	}

	.posts {
		background-color: #f3f9ff;
	}
	.posts::before {
		background-color: #e3f0fa;
	}

	.posts__list {
		margin-top: 40px;
		display: grid;
		gap: 40px;
	}

	.post {
		background-color: var(--color-bg-post);
		border-radius: 10px;
	}

	.post__img {
		width: 100%;
		height: 218px;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
	}

	.post__wrapper {
		padding: 20px 30px;
	}

	.post__title {
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: 32px;
		margin-bottom: 30px;

		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.post__description {
		font-weight: 400;
		font-size: 14px;
		line-height: 1.5;

		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.post__link {
		margin-top: 40px;
		margin-left: auto;
	}

	.section__button {
		font-size: 28px;
		margin: 60px auto 0;
		background-color: var(--color-bg-post);
	}

	.products::before {
		background-color: #f3f9ff;
	}

	.products__list {
		margin-top: 40px;
		display: grid;
		gap: 40px;
	}

	.product {
		background: var(--color-bg-product);
		border-radius: 10px;
	}

	.product__img {
		width: 100%;
		object-fit: cover;
		border-radius: 10px 10px 0 0;
	}

	.product__wrapper {
		padding: 14px 24px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 45px 45px;
	}

	.product__link {
		grid-column: 1 / -1;
		width: fit-content;
		color: var(--color-text);
	}

	.product__link:hover .product__title,
	.product__link:focus .product__title {
		text-decoration: underline;
	}

	.product__link:active .product__title {
		opacity: 0.8;
	}

	.product__title {
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: 36px;
		line-height: 1.5;

		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}

	.product__price {
		font-weight: 200;
		align-self: center;
	}

	.product__button {
		align-self: center;
		justify-self: end;
	}

	@media (min-width: 768px) {
		.slider {
			margin-top: -80px;
			padding: 140px 0 100px;
		}

		.section {
			--height-element: 60px;
			padding: 120px 0 40px;
		}

		.section__title {
			position: absolute;
			top: -10px;
			left: 50%;
			transform: translateX(-50%);
		}

		.posts {
			padding-bottom: 100px;
		}

		.products__list {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 860px) {
		.posts__list {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1110px) {
		.section {
			--height-element: 80px;
		}

		.section__title {
			font-size: 42px;
		}

		.products__list {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>

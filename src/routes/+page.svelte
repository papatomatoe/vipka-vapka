<script>
	import Slider from '$lib/components/Slider.svelte';

	const SLIDES = [
		{ id: 1, path: 'slide1.webp', title: 'slide1' },
		{ id: 2, path: 'slide2.webp', title: 'slide2' },
		{ id: 3, path: 'slide3.webp', title: 'slide3' }
	];
</script>

<svelte:head>
	<title>main</title>
</svelte:head>

<h1 class="v-h">Главная страница</h1>

<section class="slider">
	<h2 class="v-h">Слайдер</h2>
	<div class="wrapper"><Slider slides={SLIDES} /></div>
</section>
<section class="section posts">
	<h2 class="section__title posts__title">Кое что интересное...</h2>
</section>

<section class="section goods">
	<h2 class="section__title goods__title">последние новинки</h2>
	<p>Скоро здесь будет много интересного!</p>
</section>

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

	.goods {
	}
	.goods::before {
		background-color: #f3f9ff;
	}
	p {
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: 32px;
		margin: 100px auto;
		text-align: center;
	}

	@media (min-width: 768px) {
		.slider {
			margin-top: -80px;
			padding: 140px 0 60px;
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
	}

	@media (min-width: 1110px) {
		.section {
			--height-element: 80px;
		}

		.section__title {
			font-size: 42px;
		}
	}
</style>

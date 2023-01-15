<script lang="ts">
	import { slide } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';
	import logo from '$lib/assets/logo.svg';

	import { windowWidth } from '$lib/stores/environment';

	let opened = false;

	const handleToggleMenu = () => {
		const body = document.querySelector('body');

		body?.classList.contains('block') && opened
			? body.classList.remove('block')
			: body?.classList.add('block');

		opened = !opened;
	};

	$: isMobile = $windowWidth > 768;
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<header class="header" class:header--show-menu={opened}>
	<nav class="header__nav wrapper" class:header__nav--opened={opened}>
		<a href="/" class="header__logo"><img src={logo} alt="Вапка Выпка" width="150" /></a>
		{#if opened || isMobile}
			<ul transition:slide={{ duration: 300, easing: sineOut }} class="header__menu" class:opened>
				<li class="header__item header__item--left">
					<a on:click={handleToggleMenu} href="/">на главную</a>
				</li>
				<li class="header__item header__item--left">
					<a on:click={handleToggleMenu} href="/blog">почитать</a>
				</li>
				<li class="header__item header__item--left">
					<a on:click={handleToggleMenu} href="/store">купить</a>
				</li>
				<li class="header__item header__item--right">
					<a on:click={handleToggleMenu} href="/about-me">обо мне</a>
				</li>
				<li class="header__item header__item--right">
					<a on:click={handleToggleMenu} href="/contacts">контакты</a>
				</li>
				<li class="header__item header__item--right">
					<a on:click={handleToggleMenu} href="/secret">секрет</a>
				</li>
			</ul>
		{/if}
	</nav>
	<button
		class="header__open-menu"
		class:header__open-menu--opened={opened}
		on:click={handleToggleMenu}
		><svg xmlns="http://www.w3.org/2000/svg" width="34" height="17" fill="none"
			><path
				stroke="#000"
				stroke-width="3"
				d="m1 12 16 2.5L33 12M1 6.68l16 2.5 16-2.5m-32-5 16 2.5 16-2.5"
			/></svg
		></button
	>
</header>

<style>
	.header {
		--height-element: 30px;

		display: grid;
		grid-template-rows: 1fr 60px;
		gap: 15px;
		position: relative;
		background-color: var(--color-bg-header);
		padding: 20px 0 30px;
		margin-bottom: var(--height-element);
		height: 120px;

		transition: all 0.3s ease-out;
	}

	.header__nav--opened {
		overflow-y: auto;
	}

	.header::after {
		position: absolute;
		width: 100%;
		height: var(--height-element);
		clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
		content: '';
		background-color: var(--color-bg-header);
		top: 100%;
	}

	.header--show-menu {
		height: 100vh;
	}

	.header__logo img {
		display: block;
		width: 150px;
		margin: 0 auto;
	}

	.header__open-menu {
		left: 50%;
		background-color: transparent;
		border: none;
		margin: 0 auto;
		padding: 0;
		width: 40px;
		height: 40px;
		display: grid;
		place-items: center;
		z-index: 1;
		transition: transform 0.3s ease-out;
	}

	.header__open-menu--opened {
		transform: rotateX(180deg);
	}

	.header__menu {
		display: none;
	}

	.opened {
		display: grid;
		place-items: center;
		padding: 45px 0;
		margin: auto;
	}

	.header__item a {
		font-family: var(--font-accent);
		color: var(--color-text);
		font-size: 36px;
		font-weight: 700;
	}

	@media (min-width: 768px) {
		.header {
			--height-element: 70px;
			height: 240px;
			padding: 35px 0 0;
		}

		.header__nav {
			z-index: 1;
		}

		.header__logo img {
			width: 175px;
		}

		.header__menu {
			margin-top: 50px;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.header__open-menu {
			display: none;
		}
	}
	@media (min-width: 1110px) {
		.header {
			--height-element: 80px;
			height: auto;
			padding: 80px 0 0;
		}

		.header__logo {
			position: absolute;
			top: 25px;
			left: calc(50% + 10px);
			transform: translateX(-50%);
			z-index: 1;
		}
		.header__logo img {
			width: 255px;
		}

		.header__menu {
			display: flex;
			margin: 0;
		}

		.header__item--left {
			margin-right: 60px;
		}

		.header__item--right {
			margin-left: 60px;
		}

		.header__item:nth-of-type(3) {
			margin-right: auto;
		}

		.header__item:nth-of-type(4) {
			margin-left: auto;
		}
	}
</style>

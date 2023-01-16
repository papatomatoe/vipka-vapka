<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { MENU } from '$lib/constants/menu';
	import { windowWidth } from '$lib/stores/environment';

	import Menu from '$lib/Menu.svelte';

	let opened = false;

	const handleToggleMenu = () => {
		const body = document.querySelector('body');

		body?.classList.contains('block') && opened
			? body.classList.remove('block')
			: body?.classList.add('block');

		opened = !opened;
	};

	$: isMobile = $windowWidth && $windowWidth < 768;
</script>

<svelte:window bind:innerWidth={$windowWidth} />

<header class="header" class:header--show-menu={opened}>
	<nav class="header__nav wrapper" class:header__nav--opened={opened}>
		<a href="/" class="header__logo"><img src={logo} alt="Вапка Выпка" width="150" /></a>
		{#if isMobile}
			<Menu menu={MENU} {opened} />
		{:else}
			<Menu menu={MENU} />
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
		grid-template-rows: 1fr 100px;
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

	.header__logo {
		display: block;
		width: fit-content;
		margin: 0 auto;
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

		.header__open-menu {
			display: none;
		}
	}
	@media (min-width: 1110px) {
		.header {
			display: block;
			--height-element: 80px;
			height: 170px;
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
	}
</style>

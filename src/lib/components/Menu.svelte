<script lang="ts">
	import { slide } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	export let menu: Array<{ id: number; title: string; path: string }>;
	export let opened = true;
</script>

<ul transition:slide={{ duration: 300, easing: sineOut }} class="header__menu" class:opened>
	{#each menu as item, idx (item.id)}
		<li
			class="header__item"
			class:header__item--left={idx < 3}
			class:header__item--right={idx >= 3}
		>
			<a href={item.path}>{item.title}</a>
		</li>
	{/each}
</ul>

<style>
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
		.header__menu {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}

	@media (min-width: 1110px) {
		.header__menu {
			display: flex;
			margin: 0;
			padding: 0;
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

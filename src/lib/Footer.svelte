<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import { MENU } from '$lib/constants/menu';
</script>

<footer class="footer">
	<div class="footer__wrapper wrapper">
		<a class="footer__logo" href="/"><img src={logo} alt="Выпка Вапка" /></a>
		<ul class="footer__menu">
			{#each MENU as item (item.id)}
				<li class="footer__item">
					<a href={item.path}>{item.title}</a>
				</li>
			{/each}
		</ul>
		<p class="footer__copy">&copy; {new Date().getFullYear()} Выпка Вапка</p>
	</div>
</footer>

<style>
	.footer {
		--height-element: 30px;
		height: 100px;
		position: relative;
		background-color: var(--color-bg-footer);
		padding: var(--height-element) 0 30px;
	}

	.footer::before {
		position: absolute;
		width: 100%;
		height: var(--height-element);
		clip-path: polygon(0% 0%, 50% 100%, 100% 0%);
		content: '';
		background-color: var(--color-bg);
		top: 0;
	}

	.footer__wrapper {
		width: 100%;
	}

	.footer__logo {
		display: none;
	}

	.footer__menu {
		display: none;
	}
	.footer__copy {
		position: relative;
		text-align: center;
		top: 20px;
		min-width: 151px;
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: 16px;
		line-height: 1;
		color: var(--color-text);
	}

	@media (min-width: 768px) {
		.footer {
			--height-element: 70px;
			height: 200px;
		}
		.footer__wrapper {
			width: 100%;
			display: grid;
			grid-template-columns: min-content 1fr min-content;
			grid-template-columns: 1fr 1fr;
			align-items: end;
		}
		.footer__logo {
			display: block;
			position: relative;
			width: 92px;
			top: 10px;
		}
		.footer__item a {
			font-family: var(--font-accent);
			font-weight: 700;
			font-size: 16px;
			line-height: 1;
			color: var(--color-text);
		}
		.footer__copy {
			text-align: right;
			top: 0;
		}
	}

	@media (min-width: 1110px) {
		.footer {
			--height-element: 80px;
			height: 200px;
		}
		.footer__wrapper {
			margin-top: 20px;
			grid-template-columns: min-content 1fr min-content;
		}
		.footer__menu {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 31px;
			margin-left: 40px;
		}

		.footer__copy {
			position: relative;
			top: -4px;
			min-width: 151px;
			font-family: var(--font-accent);
			font-weight: 700;
			font-size: 16px;
			line-height: 1;
			color: var(--color-text);
		}
	}
</style>

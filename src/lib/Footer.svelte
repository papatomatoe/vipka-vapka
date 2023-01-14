<script lang="ts">
	import logo from '$lib/assets/logo.svg';
</script>

<footer class="footer">
	<div class="footer__wrapper wrapper">
		<a class="footer__logo" href="/"><img src={logo} alt="Выпка Вапка" /></a>
		<ul class="header__menu">
			<li class="header__item">
				<a href="/">на главную</a>
			</li>
			<li class="header__item">
				<a href="/blog">почитать</a>
			</li>
			<li class="header__item header__item--left">
				<a href="/store">купить</a>
			</li>
			<li class="header__item header__item--right">
				<a href="/about-me">обо мне</a>
			</li>
			<li class="header__item">
				<a href="/contacts">контакты</a>
			</li>
			<li class="header__item">
				<a href="/secret">секрет</a>
			</li>
		</ul>
		<p class="footer__copy">&copy; {new Date().getFullYear()} Выпка Вапка</p>
	</div>
</footer>

<style>
	.footer {
		--height-element: 80px;

		position: relative;
		background-color: var(--color-bg-footer);
		padding: var(--height-element) 0 51px;
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
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		align-items: end;
	}

	.footer__logo {
		position: relative;
		width: 92px;
		top: 10px;
	}

	.header__menu {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 31px;
	}

	.header__item a {
		font-family: var(--font-accent);
		font-weight: 700;
		font-size: 16px;
		line-height: 1;
		color: var(--color-text);
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
</style>

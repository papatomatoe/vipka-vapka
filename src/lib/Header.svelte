<script lang="ts">
	import logo from '$lib/assets/logo.svg';
</script>

<header class="header">
	<nav class="header__nav wrapper">
		<a href="/" class="header__logo"><img src={logo} alt="Вапка Выпка" /></a>
		<ul class="header__menu">
			<li class="header__item header__item--left">
				<a href="/">на главную</a>
			</li>
			<li class="header__item header__item--left">
				<a href="/blog">почитать</a>
			</li>
			<li class="header__item header__item--left">
				<a href="/store">купить</a>
			</li>
			<li class="header__item header__item--right">
				<a href="/about-me">обо мне</a>
			</li>
			<li class="header__item header__item--right">
				<a href="/contacts">контакты</a>
			</li>
			<li class="header__item header__item--right">
				<a href="/secret">секрет</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.header {
		--height-element: 80px;
		position: relative;
		background-color: var(--color-bg-header);
		padding: 80px 0 0;
		margin-bottom: var(--height-element);
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

	.header__logo {
		position: absolute;
		top: 25px;
		left: calc(50% + 10px);
		transform: translateX(-50%);
	}

	.header__menu {
		display: flex;
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

	.header__item a {
		font-family: var(--font-accent);
		color: var(--color-text);
		font-size: 36px;
		font-weight: 700;
	}
</style>

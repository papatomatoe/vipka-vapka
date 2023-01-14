<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../styles.css';
</script>

<div class="container">
	<Header />
	<main class="wrapper"><slot /></main>
	<Footer />
</div>

<style>
	.container {
		height: 100%;
		display: grid;
		grid-template-rows: min-content 1fr min-content;
	}
</style>

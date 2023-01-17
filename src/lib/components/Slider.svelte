<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	export let slides: Array<{ id: number; title: string; path: string }> = [];

	let clientWidth = 0;
	let idx = 0;
	const position = tweened(clientWidth, { duration: 1000, easing: cubicInOut });

	const handlePrevSlide = () => {
		const index = idx > 0 ? idx - 1 : slides.length - 1;
		position.set(index * clientWidth);
		idx = index;
	};

	const handleNextSlide = () => {
		const index = idx < slides.length - 1 ? idx + 1 : 0;
		position.set(index * clientWidth);
		idx = index;
	};
</script>

<div bind:clientWidth class="slider__container">
	<button
		class="slider__arrow slider__arrow--prev"
		aria-label="предыдущее изображение"
		on:click={handlePrevSlide}
		><svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none"
			><path
				fill="#566B7B"
				d="M.94 10.94a1.5 1.5 0 0 0 0 2.12l9.545 9.547a1.5 1.5 0 1 0 2.122-2.122L5.62 13.5H25a1.5 1.5 0 0 0 0-3H5.621l6.986-6.985a1.5 1.5 0 1 0-2.122-2.122L.94 10.94Z"
			/></svg
		></button
	>
	<div class="slider__wrapper" style="transform: translateX(-{$position}px)">
		{#each slides as slide (slide.id)}
			<img class="slider__img" src={slide.path} alt={slide.title} />
		{/each}
	</div>
	<button
		class="slider__arrow slider__arrow--next"
		aria-label="следующее изображение"
		on:click={handleNextSlide}
		><svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" fill="none"
			><path
				fill="#566B7B"
				d="m16.515 1.393 9.546 9.546a1.5 1.5 0 0 1 0 2.122l-9.546 9.546a1.5 1.5 0 1 1-2.122-2.122L21.38 13.5H2a1.5 1.5 0 0 1 0-3h19.379l-6.986-6.985a1.5 1.5 0 1 1 2.122-2.122Z"
			/></svg
		></button
	>
</div>
<div class="slider__controls">
	{#each slides as _, index}
		<button
			class="slider__dot"
			class:slider__dot--active={index === idx}
			on:click={() => {
				position.set(index * clientWidth, { duration: 0 });
				idx = index;
			}}
		/>
	{/each}
</div>

<style>
	.slider__container {
		position: relative;
		width: 100%;
		height: 220px;
		overflow: hidden;
		border-radius: 10px;
	}

	.slider__wrapper {
		display: flex;
	}

	.slider__arrow {
		display: grid;
		place-items: center;
		position: absolute;
		top: 0;
		left: 5px;
		width: 60px;
		height: 60px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 1;
		border-radius: 10px;
		border: none;
		background-color: rgb(217, 227, 235, 0.7);
	}

	.slider__arrow--next {
		right: 5px;
		left: auto;
	}

	.slider__controls {
		margin: 20px auto;
		display: flex;
		justify-content: center;
		gap: 20px;
	}
	.slider__dot {
		width: 20px;
		height: 20px;
		padding: 0;
		border: 2px solid var(--color-bg-header);
		background-color: transparent;
		border-radius: 50%;
	}
	.slider__dot--active {
		background: var(--color-bg-header);
	}

	@media (min-width: 768px) {
		.slider__container {
			height: 400px;
		}
	}
</style>

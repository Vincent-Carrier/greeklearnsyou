<script lang="ts">
	import FancyBox from './FancyBox.svelte';

	type Word = { root: string; meaning: string; derivates: string[] };
	export let word: Word;
</script>

<FancyBox>
	<header class="text-3xl text-stone-600 font-bold">
		<div class="">{word.root}</div>
		<div class="font-normal mt-1 text-stone-500 text-xl">{word.meaning}</div>
	</header>

	<p class="mt-3 text-sm text-stone-500">
		<span class="font-bold">Derivatives: </span>{word.derivates.join(', ')}
	</p>
</FancyBox>

<style>
</style>

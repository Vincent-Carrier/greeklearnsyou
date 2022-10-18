<script lang="ts">
	import FancyBox from './FancyBox.svelte';

	type Word = { root: string; meaning: string; derivates: string[] };
	export let word: Word;
</script>

<FancyBox>
	<header class="text-3xl text-slate-100">
		<div class="">{word.root}</div>
		<div class="italic text-lg"
			><span class="text-slate-200">“</span><span class="px-px">{word.meaning}</span><span class="text-slate-200">”</span
			></div
		>
	</header>

	<p class="mt-2 text-sm text-cyan-50">
		<span class="font-bold">Derivatives: </span>{word.derivates.join(', ')}
	</p>
</FancyBox>

<style>
</style>
<script lang="ts">
	import Word from '$lib/Word.svelte';
	import type { PageData } from './$types';
	
	export let data: PageData
</script>

<Word word={data.word}/>

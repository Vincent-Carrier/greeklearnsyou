<script lang="ts">
	// export let : string
</script>

<article
	class="relative shadow-md rounded-md border-2 border-yellow-300 outline outline-2 outline-offset-[-8px] outline-yellow-300 p-8 bg-cyan-900"
>
	{#each ['top-1 left-1', 'top-1 right-1', 'bottom-1 left-1', 'bottom-1 right-1'] as pos}
		<svg class={`absolute h-4 w-4 ${pos}`} viewBox="0 0 100 100">
			<rect width="96" height="96" stroke-width="12" class="stroke-yellow-300 fill-transparent" />
			<circle cx="45" cy="45" r="10" class="fill-yellow-300" />
		</svg>
	{/each}
	<slot />
</article>

<style>
	
</style>
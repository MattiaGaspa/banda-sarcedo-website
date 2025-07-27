<script lang="ts">
	let {text} = $props();
</script>

<style>
	@reference "tailwindcss";
</style>

<main>
	<p class="text-left text-pretty text-xl px-15 py-2 text-gray-900 dark:text-white">
		{text}
	</p>
</main>
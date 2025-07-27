<script lang="ts">
	let {section} = $props();
</script>

<style>
	@reference "tailwindcss";
</style>

<main>
	<h2 class="px-15 py-3 text-left mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
		{section}
	</h2>
</main>
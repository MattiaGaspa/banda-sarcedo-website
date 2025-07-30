<script lang="ts">
	let {date} = $props();
</script>

<style>
	@reference "tailwindcss";
</style>

<main>
	<p class="px-19 text-left mb-4 text-xl leading-none text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
		{date}
    </p>
</main>
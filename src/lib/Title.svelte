<script lang="ts">
	let {title} = $props();
</script>

<style>
	@reference "tailwindcss";
</style>

<main>
	<h1 class="text-center break-normal md:break-all mb-4 text-4xl font-extrabold leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
		{title}
	</h1>
</main>
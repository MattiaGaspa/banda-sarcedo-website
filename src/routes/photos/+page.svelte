<script lang="ts">
	import type { PageProps } from './$types';
	import Album from "$lib/Album.svelte";
	import Title from "$lib/Title.svelte";

	let { data }: PageProps = $props();
</script>

<main>
	<div class="bg-white border-gray-200 dark:bg-zinc-700 min-h-screen">
		<Title title="FOTO" />

		{#each data.albums.keys() as album} <!-- For each object in albums create an <Album \>-->
			<Album album={album} photos={data.albums.get(album)}/>
		{/each}
	</div>
</main>
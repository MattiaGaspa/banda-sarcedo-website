<script lang="ts">
	import Album from "$lib/Album.svelte";
	import Paragraph from "$lib/Paragraph.svelte";
	import Title from "$lib/Title.svelte";
	import { onMount } from "svelte";

	type AlbumData = { [key: string]: string[] };

	async function fetchAlbums(): Promise<AlbumData> {
		try {
			const response = await fetch(`/api/getAlbums`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return await response.json();
		} catch (error) {
			console.error('Errore nel fetch:', error);
			return {};
		}
	}

	let albums = $state<AlbumData>({});

	onMount(async () => {
		albums = await fetchAlbums();
	});
</script>

<main>
	<div class="bg-white border-gray-200 dark:bg-zinc-700 min-h-screen">
		<Title title="FOTO" />

		{#if Object.keys(albums).length === 0}
			<Paragraph text="Loading..." />
		{:else}
			{#each Object.keys(albums) as album}
				<Album album={album} photos={albums[album]}/>
			{/each}
		{/if}
	</div>
</main>
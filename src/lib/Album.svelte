<script lang="ts">
	import { Gallery } from "flowbite-svelte";
	import Section from "./Section.svelte";

	let {album, photos} = $props(); // Retrive album name and photos location

	let images: {alt: string; src: string;}[] = [];
	for (const photo of photos) {
		images.push(
			{ alt: photo, src: "/albums/" + album + "/" + photo }
		);
	}
	album = album.split("-")[1]; // Remove the index from the name
</script>

<main>
	<Section section={album} /> <!-- Show concert name -->
	<Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3 px-15" /> <!-- Display photos -->
</main>
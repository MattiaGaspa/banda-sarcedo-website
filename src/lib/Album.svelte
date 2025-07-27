<script lang="ts">
	import { Gallery } from "flowbite-svelte";
	import * as path from 'path';
	import Section from "./Section.svelte";

	let {album, photos} = $props();

	let images: {alt: string; src: string;}[] = [];
	for (const photo of photos) {
		images.push(
			{ alt: photo, src: "/albums/" + album + "/" + photo }
		);
	}
</script>

<main>
	<Section section={album} />
	<Gallery items={images} class="grid-cols-2 gap-4 md:grid-cols-3 px-15" />
</main>
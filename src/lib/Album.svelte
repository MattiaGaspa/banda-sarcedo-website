<script lang="ts">
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
	<!-- Show concert name -->
	<Section section={album} />
	<!-- Display carousel -->
	<div id="default-carousel" class="relative w-full" data-carousel="slide">
		<!-- Carousel wrapper -->
		<div class="relative h-56 overflow-hidden rounded-lg md:h-96">
			<!-- Items -->
			{#each images as image} <!-- For each object in albums create an <Album \>-->
				<div class="hidden duration-700 ease-in-out" data-carousel-item>
					<img src={image.src} class="absolute block w-full object-contain -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={image.alt}>
				</div>
			{/each}
		</div>
		<!-- Slider controls -->
		<button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
			<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
				<svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
				</svg>
				<span class="sr-only">Previous</span>
			</span>
		</button>
		<button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
			<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
				<svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
				</svg>
				<span class="sr-only">Next</span>
			</span>
		</button>
	</div>
</main>
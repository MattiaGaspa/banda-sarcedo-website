<script lang="ts">
	import type { PageProps } from './$types';
	import Event from "$lib/Event.svelte";
	import Title from "$lib/Title.svelte";

	let { data }: PageProps = $props();
	const eventKeys = Array.from(data.events.keys());
</script>

<main>
	<div class="bg-white border-gray-200 dark:bg-zinc-700 min-h-screen">
		<Title title="EVENTI" />
		{#each data.events.keys() as event, index} <!-- For each object in events create an <Event \>-->
			<Event event={event} context={data.events.get(event)} last={index === eventKeys.length - 1}/>
		{/each}
	</div>
</main>
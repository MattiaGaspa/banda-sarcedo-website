<script>
    import Date from "./Date.svelte";
	import Paragraph from "./Paragraph.svelte";
	import Section from "./Section.svelte";

    let { event, context, last = false } = $props();
    let text = context[2]?.toString().split(/\r?\n/) || [];
</script>
<main>
    <Section section={event} /> <!-- Show concert name -->
    <Date date={context[0]} /> <!-- Show date -->
    {#if context[1] != null}
        <img src={context[1]} alt="Poster" class="mx-auto block object-cover object-center w-full max-w-md"/> <!-- Show poster -->
    {/if}
    {#each text as line} <!-- For each line in text create a <Paragraph \>-->
        <Paragraph text={line} />
    {/each}
    {#if last != true }
        <hr class="w-200 h-1 mx-auto my-4 bg-gray-700 border-0 rounded-sm md:my-10 dark:bg-gray-100"> <!-- Break line -->
    {/if}
</main>
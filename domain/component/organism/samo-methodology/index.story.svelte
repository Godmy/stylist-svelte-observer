<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoMethodology from './index.svelte';
</script>

<Story
	component={SamoMethodology}
	title="SamoMethodology"
	description="All SAMO methodology chapters of the landing page with in-page navigation."
>
	{#snippet children()}
		<SamoMethodology />
	{/snippet}
</Story>

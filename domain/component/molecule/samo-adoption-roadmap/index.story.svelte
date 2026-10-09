<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoAdoptionRoadmap from './index.svelte';
</script>

<Story
	component={SamoAdoptionRoadmap}
	title="SamoAdoptionRoadmap"
	description="Four adoption stages with deliverables and the value for each audience."
>
	{#snippet children()}
		<SamoAdoptionRoadmap />
	{/snippet}
</Story>

<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoAssemblyPipeline from './index.svelte';
</script>

<Story
	component={SamoAssemblyPipeline}
	title="SamoAssemblyPipeline"
	description="The seven clusters and the one-way assembly direction with allowed joints."
>
	{#snippet children()}
		<SamoAssemblyPipeline />
	{/snippet}
</Story>

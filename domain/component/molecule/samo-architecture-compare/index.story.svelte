<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoArchitectureCompare from './index.svelte';
</script>

<Story
	component={SamoArchitectureCompare}
	title="SamoArchitectureCompare"
	description="Token avalanche, before/after comparison and AGENTS.md governance rules."
>
	{#snippet children()}
		<SamoArchitectureCompare />
	{/snippet}
</Story>

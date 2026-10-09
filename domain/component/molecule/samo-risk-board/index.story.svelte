<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoRiskBoard from './index.svelte';
</script>

<Story
	component={SamoRiskBoard}
	title="SamoRiskBoard"
	description="Common objections to SAMO with the mechanism that answers each one."
>
	{#snippet children()}
		<SamoRiskBoard />
	{/snippet}
</Story>

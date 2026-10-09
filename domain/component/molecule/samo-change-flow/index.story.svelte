<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoChangeFlow from './index.svelte';
</script>

<Story
	component={SamoChangeFlow}
	title="SamoChangeFlow"
	description="The route of a change from task to release, with owners, commands and an autoplay mode."
>
	{#snippet children()}
		<SamoChangeFlow />
	{/snippet}
</Story>

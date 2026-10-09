<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoOverview from './index.svelte';
</script>

<Story
	component={SamoOverview}
	title="SamoOverview"
	description="SAMO pillars and an interactive decoder of the four-part entity address."
>
	{#snippet children()}
		<SamoOverview />
	{/snippet}
</Story>

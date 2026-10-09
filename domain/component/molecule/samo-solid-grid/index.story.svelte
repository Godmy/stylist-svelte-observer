<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoSolidGrid from './index.svelte';
</script>

<Story
	component={SamoSolidGrid}
	title="SamoSolidGrid"
	description="The five SOLID principles as SAMO encodes them into the file system."
>
	{#snippet children()}
		<SamoSolidGrid />
	{/snippet}
</Story>

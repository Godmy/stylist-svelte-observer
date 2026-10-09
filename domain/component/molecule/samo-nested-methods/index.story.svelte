<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoNestedMethods from './index.svelte';
</script>

<Story
	component={SamoNestedMethods}
	title="SamoNestedMethods"
	description="Map of the methodologies nested inside SAMO: DDD, functional taxonomy, Atomic Design, DSIAP and trait refinement."
>
	{#snippet children()}
		<SamoNestedMethods />
	{/snippet}
</Story>

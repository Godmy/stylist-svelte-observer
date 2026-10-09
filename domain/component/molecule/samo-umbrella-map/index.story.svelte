<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoUmbrellaMap from './index.svelte';
</script>

<Story
	component={SamoUmbrellaMap}
	title="SamoUmbrellaMap"
	description="The umbrella repository: module registry, alias resolution and the nested commit order."
>
	{#snippet children()}
		<SamoUmbrellaMap />
	{/snippet}
</Story>

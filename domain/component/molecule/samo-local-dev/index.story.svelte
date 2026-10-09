<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoLocalDev from './index.svelte';
</script>

<Story
	component={SamoLocalDev}
	title="SamoLocalDev"
	description="Local development scenarios: the library, a consuming site, a private package and module selection."
>
	{#snippet children()}
		<SamoLocalDev />
	{/snippet}
</Story>

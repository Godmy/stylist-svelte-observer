<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoExtensionWalkthrough from './index.svelte';
</script>

<Story
	component={SamoExtensionWalkthrough}
	title="SamoExtensionWalkthrough"
	description="Open/Closed walkthrough: adding a notification counter to a real button recipe."
>
	{#snippet children()}
		<SamoExtensionWalkthrough />
	{/snippet}
</Story>

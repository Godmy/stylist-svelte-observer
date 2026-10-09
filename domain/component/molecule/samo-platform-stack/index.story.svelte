<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoPlatformStack from './index.svelte';
</script>

<Story
	component={SamoPlatformStack}
	title="SamoPlatformStack"
	description="Platform layers, public modules and the npm package boundary."
>
	{#snippet children()}
		<SamoPlatformStack />
	{/snippet}
</Story>

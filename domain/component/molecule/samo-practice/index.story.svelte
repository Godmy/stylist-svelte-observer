<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoPractice from './index.svelte';
</script>

<Story
	component={SamoPractice}
	title="SamoPractice"
	description="The four-step algorithm for a new entity and typical SAMO mistakes."
>
	{#snippet children()}
		<SamoPractice />
	{/snippet}
</Story>

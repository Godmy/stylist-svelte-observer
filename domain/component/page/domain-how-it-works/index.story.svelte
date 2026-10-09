<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DomainHowItWorks from './index.svelte';
</script>

<Story
	component={DomainHowItWorks}
	title="DomainHowItWorks"
	description="The How it works page of the domain workspace, opened from the question-mark menu button."
>
	{#snippet children()}
		<DomainHowItWorks />
	{/snippet}
</Story>

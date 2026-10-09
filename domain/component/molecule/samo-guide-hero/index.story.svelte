<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoGuideHero from './index.svelte';
</script>

<Story
	component={SamoGuideHero}
	title="SamoGuideHero"
	description="Dark hero of the How it works page with an animated change terminal and chapter cards."
>
	{#snippet children()}
		<SamoGuideHero />
	{/snippet}
</Story>

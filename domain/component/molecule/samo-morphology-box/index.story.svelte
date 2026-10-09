<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import SamoMorphologyBox from './index.svelte';
</script>

<Story
	component={SamoMorphologyBox}
	title="SamoMorphologyBox"
	description="Zwicky morphological box applied to a Material Design 3 button."
>
	{#snippet children()}
		<SamoMorphologyBox />
	{/snippet}
</Story>

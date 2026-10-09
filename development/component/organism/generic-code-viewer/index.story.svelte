<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipeGenericCodeViewer from './index.svelte';

	const controls: SlotStory[] = [
		{
			name: 'language',
			type: 'select',
			defaultValue: 'svelte',
			options: ['svelte', 'html', 'css']
		}
	];

	const sampleCode =
		`<scr` +
		`ipt lang="ts">
  let value = $state('');
</scr` +
		`ipt>

<input bind:value placeholder="Type here..." />`;
</script>

<Story
	component={RecipeGenericCodeViewer}
	title="Generic Code Viewer"
	description="Development-domain syntax-highlighted code viewer for arbitrary source snippets."
	{controls}
>
	{#snippet children(values: any)}
		<RecipeGenericCodeViewer
			code={values.language === 'css'
				? 'button {\n  color: #fff;\n  background: #2563eb;\n  padding: 0.5rem 1rem;\n}'
				: values.language === 'html'
					? '<button class="primary" type="button">Click me</button>'
					: sampleCode}
			language={values.language}
		/>
	{/snippet}
</Story>

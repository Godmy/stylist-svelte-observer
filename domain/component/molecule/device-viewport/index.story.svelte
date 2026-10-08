<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import DeviceViewport from './index.svelte';
	import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';

	let value = $state<DeviceFrameViewport>('desktop');
	let fullscreen = $state(false);
</script>

<Story
	component={DeviceViewport}
	title="DeviceViewport"
	description="Exact mobile (375px), tablet (768px), desktop (1440px) presets with an independent fullscreen toggle."
>
	{#snippet children()}
		<div class="_c1">
			<DeviceViewport
				{value}
				{fullscreen}
				onChange={(next) => (value = next)}
				onFullscreenChange={(next) => (fullscreen = next)}
			/>
			<p class="_c2">Selected: {value} · Fullscreen: {fullscreen}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		gap: 0.75rem;
		justify-items: start;
		border-radius: 1rem;
		border-width: 1px;
		border-style: solid;
		border-color: #e2e8f0;
		background-color: #f8fafc;
		padding: 1.5rem;
	}
	._c2 {
		font-size: 0.875rem;
		color: #64748b;
	}
</style>

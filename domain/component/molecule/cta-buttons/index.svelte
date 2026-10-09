<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeCtaButtons } from '$stylist/domain/interface/recipe/cta-buttons';

	const Package = 'box';
	const Layers = 'layers';
	const ArrowRight = 'arrow-right';

	let {
		// Kept so it is not spread onto the wrapper as an attribute.
		totalComponents: _totalComponents = 0,
		componentsHref = '/components',
		playgroundHref = '/playground',
		componentsTitle = 'Explore Components',
		componentsDescription = 'Discover reusable UI components, organized examples, documentation, and source code.',
		componentsActionLabel = 'Browse Library',
		playgroundTitle = 'Interactive Playground',
		playgroundDescription = 'Experiment with components, explore their behavior, and learn from working examples.',
		playgroundActionLabel = 'Start Exploring',
		onComponentsOpen,
		onPlaygroundOpen,
		class: className = '',
		...restProps
	}: RecipeCtaButtons = $props();

	function handleComponentsClick(event: MouseEvent) {
		if (!onComponentsOpen) return;
		event.preventDefault();
		onComponentsOpen();
	}

	function handlePlaygroundClick(event: MouseEvent) {
		if (!onPlaygroundOpen) return;
		event.preventDefault();
		onPlaygroundOpen();
	}
</script>

<div class={`c-marketing-cta-buttons ${className}`} {...restProps}>
	<a href={componentsHref} class="cta-card cta-card--warm" onclick={handleComponentsClick}>
		<span class="cta-card-icon" aria-hidden="true">
			<BaseIcon name={Package} size={28} />
		</span>
		<h3 class="cta-card-title">{componentsTitle}</h3>
		<p class="cta-card-desc">{componentsDescription}</p>
		<span class="cta-card-action">
			{componentsActionLabel}
			<BaseIcon name={ArrowRight} size={18} class="cta-arrow" />
		</span>
	</a>

	<a href={playgroundHref} class="cta-card cta-card--cool" onclick={handlePlaygroundClick}>
		<span class="cta-card-icon" aria-hidden="true">
			<BaseIcon name={Layers} size={28} />
		</span>
		<h3 class="cta-card-title">{playgroundTitle}</h3>
		<p class="cta-card-desc">{playgroundDescription}</p>
		<span class="cta-card-action">
			{playgroundActionLabel}
			<BaseIcon name={ArrowRight} size={18} class="cta-arrow" />
		</span>
	</a>
</div>

<style>
	.c-marketing-cta-buttons {
		margin-left: auto;
		margin-right: auto;
		display: grid;
		max-width: 64rem;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.c-marketing-cta-buttons {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Calm surfaces; each card carries one accent colour (--cta-accent). */
	.cta-card {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		overflow: hidden;
		border-radius: 28px;
		border: 1px solid color-mix(in srgb, var(--cta-accent) 22%, var(--color-border-primary));
		padding: 2rem;
		color: var(--color-text-primary);
		text-align: left;
		text-decoration: none;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
		transition:
			transform var(--duration-300, 300ms),
			box-shadow var(--duration-300, 300ms),
			border-color var(--duration-300, 300ms);
	}

	.cta-card:hover {
		transform: translateY(-4px);
		border-color: color-mix(in srgb, var(--cta-accent) 45%, var(--color-border-primary));
		box-shadow: 0 18px 36px -18px color-mix(in srgb, var(--cta-accent) 45%, transparent);
	}

	/* Same warm wash as the hero (AnimatedBackground). */
	.cta-card--warm {
		--cta-accent: var(--color-warning-500, #f59e0b);
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--color-warning-500, #f59e0b) 18%, transparent),
				transparent 55%
			),
			radial-gradient(
				circle at bottom right,
				color-mix(in srgb, var(--color-error-500, #ef4444) 12%, transparent),
				transparent 55%
			),
			color-mix(in srgb, var(--color-background-primary) 92%, white 8%);
	}

	.cta-card--cool {
		--cta-accent: var(--color-info-500, #0ea5e9);
		background:
			radial-gradient(
				circle at top left,
				color-mix(in srgb, var(--color-info-500, #0ea5e9) 16%, transparent),
				transparent 55%
			),
			radial-gradient(
				circle at bottom right,
				color-mix(in srgb, var(--color-primary-500, #3b82f6) 10%, transparent),
				transparent 55%
			),
			color-mix(in srgb, var(--color-background-primary) 92%, white 8%);
	}

	.cta-card-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 3.25rem;
		height: 3.25rem;
		margin-bottom: 1.25rem;
		border-radius: 1rem;
		color: var(--cta-accent);
		background-color: color-mix(in srgb, var(--cta-accent) 14%, transparent);
	}

	.cta-card-title {
		margin: 0 0 0.75rem;
		font-size: 1.75rem;
		font-weight: 900;
		letter-spacing: -0.02em;
	}

	.cta-card-desc {
		margin: 0 0 1.5rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.cta-card-action {
		margin-top: auto;
		display: inline-flex;
		align-items: center;
		gap: 0.375rem;
		font-weight: 700;
		color: var(--cta-accent);
	}

	:global(.cta-arrow) {
		transition: transform 0.2s;
	}

	.cta-card:hover :global(.cta-arrow) {
		transform: translateX(6px);
	}

	@media (prefers-reduced-motion: reduce) {
		.cta-card,
		.cta-card:hover,
		.cta-card:hover :global(.cta-arrow) {
			transform: none;
		}
	}
</style>

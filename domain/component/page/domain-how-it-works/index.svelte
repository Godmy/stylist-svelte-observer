<script lang="ts">
	import SamoAdoptionRoadmap from '$stylist/domain/component/molecule/samo-adoption-roadmap/index.svelte';
	import SamoChangeFlow from '$stylist/domain/component/molecule/samo-change-flow/index.svelte';
	import SamoExtensionWalkthrough from '$stylist/domain/component/molecule/samo-extension-walkthrough/index.svelte';
	import SamoLocalDev from '$stylist/domain/component/molecule/samo-local-dev/index.svelte';
	import SamoUmbrellaMap from '$stylist/domain/component/molecule/samo-umbrella-map/index.svelte';
	import SamoGuideHero from '$stylist/domain/component/molecule/samo-guide-hero/index.svelte';
	import SamoPlatformStack from '$stylist/domain/component/molecule/samo-platform-stack/index.svelte';
	import SamoRiskBoard from '$stylist/domain/component/molecule/samo-risk-board/index.svelte';
	import StylistMission from '$stylist/domain/component/molecule/stylist-mission/index.svelte';
	import type { RecipeDomainHowItWorks } from '$stylist/domain/interface/recipe/domain-how-it-works';

	let {
		onOpenLanding,
		onBrowseComponents,
		class: className = ''
	}: RecipeDomainHowItWorks = $props();
</script>

<section class={`c-domain-how-it-works ${className}`} aria-label="How Stylist works">
	<div class="dhw-flow">
		<div class="dhw-shell">
			<SamoGuideHero />
		</div>

		<div id="how-flow" class="dhw-shell dhw-chapter">
			<SamoChangeFlow />
		</div>

		<div id="how-extension" class="dhw-shell dhw-chapter">
			<SamoExtensionWalkthrough />
		</div>

		<div id="how-umbrella" class="dhw-shell dhw-chapter">
			<SamoUmbrellaMap />
		</div>

		<div id="how-local-dev" class="dhw-shell dhw-chapter">
			<SamoLocalDev />
		</div>

		<div id="how-platform" class="dhw-shell dhw-chapter">
			<!-- Modules are covered in depth by the umbrella chapter above. -->
			<SamoPlatformStack modules={[]} />
		</div>

		<div id="how-risks" class="dhw-shell dhw-chapter">
			<SamoRiskBoard />
		</div>

		<div id="how-adoption" class="dhw-shell dhw-chapter">
			<SamoAdoptionRoadmap />
		</div>

		<div class="dhw-shell">
			<StylistMission
				badgeText="Next step"
				title="You have seen how it works. Now see it in action."
				description="Every component in the workspace was built along this route. Open one, read its story next to the source, and follow its address back through the pipeline."
				primaryLabel="Browse Components"
				secondaryLabel="Back to the landing"
				onPrimaryOpen={onBrowseComponents}
				onSecondaryOpen={onOpenLanding}
			/>
		</div>
	</div>
</section>

<style>
	.c-domain-how-it-works {
		min-height: 100vh;
		padding: clamp(1rem, 2vw, 1.75rem) clamp(1rem, 2vw, 2rem) clamp(3rem, 6vw, 5rem);
		background:
			radial-gradient(
				circle at 12% 0%,
				color-mix(in srgb, var(--color-warning-500) 10%, transparent),
				transparent 24%
			),
			radial-gradient(
				circle at 90% 30%,
				color-mix(in srgb, var(--color-primary-500) 9%, transparent),
				transparent 22%
			),
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--color-background-primary) 96%, white 4%),
				color-mix(
					in srgb,
					var(--color-background-primary) 88%,
					var(--color-background-secondary) 12%
				)
			);
	}

	.dhw-flow {
		display: grid;
		gap: clamp(4rem, 8vw, 6.5rem);
	}

	.dhw-shell {
		width: min(88rem, 100%);
		margin: 0 auto;
	}

	.dhw-chapter {
		scroll-margin-top: 1.5rem;
	}
</style>

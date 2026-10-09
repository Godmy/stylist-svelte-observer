import type { AiModelInfo } from '$stylist/domain/type/object/ai-model-info';
export interface RecipeStylistHeroIntro {
	title?: string;
	subtitle?: string;
	subtitleAccent?: string;
	description?: string;
	badgeLabel?: string;
	badgeHref?: string;
	poweredByLabel?: string;
	creditNote?: string;
	rootDomainCount?: number;
	storyModuleCount?: number;
	aiModels?: AiModelInfo[];
	class?: string;
}

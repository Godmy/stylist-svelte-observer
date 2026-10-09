import type { SamoChapter } from '$stylist/domain/type/object/samo-chapter';

export interface RecipeSamoGuideHero {
	eyebrow?: string;
	title?: string;
	titleAccent?: string;
	description?: string;
	terminalLines?: string[];
	chapters?: SamoChapter[];
	class?: string;
}

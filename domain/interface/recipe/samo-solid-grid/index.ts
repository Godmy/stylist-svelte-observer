import type { SamoPrinciple } from '$stylist/domain/type/object/samo-principle';

export interface RecipeSamoSolidGrid {
	eyebrow?: string;
	title?: string;
	description?: string;
	principles?: SamoPrinciple[];
	note?: string;
	class?: string;
}

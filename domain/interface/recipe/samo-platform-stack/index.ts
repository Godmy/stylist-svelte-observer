import type { SamoMethodLevel } from '$stylist/domain/type/object/samo-method-level';

export interface RecipeSamoPlatformStack {
	eyebrow?: string;
	title?: string;
	description?: string;
	layers?: SamoMethodLevel[];
	modules?: SamoMethodLevel[];
	shipped?: string[];
	excluded?: string[];
	class?: string;
}

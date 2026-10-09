import type { SamoMethod } from '$stylist/domain/type/object/samo-method';

export interface RecipeSamoNestedMethods {
	eyebrow?: string;
	title?: string;
	description?: string;
	layers?: string[];
	methods?: SamoMethod[];
	class?: string;
}

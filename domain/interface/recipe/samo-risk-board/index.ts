import type { SamoRisk } from '$stylist/domain/type/object/samo-risk';

export interface RecipeSamoRiskBoard {
	eyebrow?: string;
	title?: string;
	description?: string;
	risks?: SamoRisk[];
	class?: string;
}

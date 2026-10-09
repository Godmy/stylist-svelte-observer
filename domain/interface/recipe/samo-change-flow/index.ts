import type { SamoFlowStep } from '$stylist/domain/type/object/samo-flow-step';

export interface RecipeSamoChangeFlow {
	eyebrow?: string;
	title?: string;
	description?: string;
	steps?: SamoFlowStep[];
	note?: string;
	class?: string;
}

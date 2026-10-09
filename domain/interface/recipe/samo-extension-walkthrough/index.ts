import type { SamoExtensionStep } from '$stylist/domain/type/object/samo-extension-step';

export interface RecipeSamoExtensionWalkthrough {
	eyebrow?: string;
	title?: string;
	description?: string;
	task?: string;
	steps?: SamoExtensionStep[];
	class?: string;
}

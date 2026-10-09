import type { SamoDevScenario } from '$stylist/domain/type/object/samo-dev-scenario';
import type { SamoRule } from '$stylist/domain/type/object/samo-rule';

export interface RecipeSamoLocalDev {
	eyebrow?: string;
	title?: string;
	description?: string;
	scenarios?: SamoDevScenario[];
	checklist?: SamoRule[];
	class?: string;
}

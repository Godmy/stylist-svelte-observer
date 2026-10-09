import type { SamoRule } from '$stylist/domain/type/object/samo-rule';
import type { SamoTokenLoad } from '$stylist/domain/type/object/samo-token-load';

export interface RecipeSamoArchitectureCompare {
	eyebrow?: string;
	title?: string;
	description?: string;
	tokenLoads?: SamoTokenLoad[];
	before?: string[];
	after?: string[];
	rules?: SamoRule[];
	class?: string;
}

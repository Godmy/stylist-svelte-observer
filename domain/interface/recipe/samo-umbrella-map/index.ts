import type { SamoModuleEntry } from '$stylist/domain/type/object/samo-module-entry';
import type { SamoRule } from '$stylist/domain/type/object/samo-rule';
import type { SamoSnippet } from '$stylist/domain/type/object/samo-snippet';
import type { SamoStep } from '$stylist/domain/type/object/samo-step';

export interface RecipeSamoUmbrellaMap {
	eyebrow?: string;
	title?: string;
	description?: string;
	modules?: SamoModuleEntry[];
	resolution?: SamoSnippet[];
	commitSteps?: SamoStep[];
	commitScript?: string;
	rules?: SamoRule[];
	class?: string;
}

import type { SamoMorphologyRow } from '$stylist/domain/type/object/samo-morphology-row';
import type { SamoStep } from '$stylist/domain/type/object/samo-step';

export interface RecipeSamoMorphologyBox {
	eyebrow?: string;
	title?: string;
	description?: string;
	product?: string;
	domains?: string[];
	rows?: SamoMorphologyRow[];
	steps?: SamoStep[];
	class?: string;
}

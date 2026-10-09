import type { SamoMorphologyCell } from '$stylist/domain/type/object/samo-morphology-cell';

export type SamoMorphologyRow = {
	cluster: string;
	accent: string;
	cells: SamoMorphologyCell[];
};

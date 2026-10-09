import type { SamoAddress } from '$stylist/domain/type/object/samo-address';
import type { SamoCoordinate } from '$stylist/domain/type/object/samo-coordinate';
import type { SamoPrinciple } from '$stylist/domain/type/object/samo-principle';

export interface RecipeSamoOverview {
	eyebrow?: string;
	title?: string;
	description?: string;
	pillars?: SamoPrinciple[];
	coordinates?: SamoCoordinate[];
	addresses?: SamoAddress[];
	class?: string;
}

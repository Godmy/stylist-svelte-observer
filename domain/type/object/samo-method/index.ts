import type { SamoMethodLevel } from '$stylist/domain/type/object/samo-method-level';

export type SamoMethod = {
	id: string;
	title: string;
	depth: number;
	host: string;
	tagline: string;
	summary: string;
	levels: SamoMethodLevel[];
	code?: string;
	note: string;
};

import type { SamoRoadmapStage } from '$stylist/domain/type/object/samo-roadmap-stage';
import type { SamoStep } from '$stylist/domain/type/object/samo-step';

export interface RecipeSamoAdoptionRoadmap {
	eyebrow?: string;
	title?: string;
	description?: string;
	stages?: SamoRoadmapStage[];
	audiences?: SamoStep[];
	class?: string;
}

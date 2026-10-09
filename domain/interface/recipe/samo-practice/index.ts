import type { SamoPracticeCase } from '$stylist/domain/type/object/samo-practice-case';
import type { SamoStep } from '$stylist/domain/type/object/samo-step';

export interface RecipeSamoPractice {
	eyebrow?: string;
	title?: string;
	description?: string;
	cases?: SamoPracticeCase[];
	steps?: SamoStep[];
	closing?: string;
	class?: string;
}

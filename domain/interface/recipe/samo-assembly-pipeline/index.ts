import type { SamoCluster } from '$stylist/domain/type/object/samo-cluster';

export interface RecipeSamoAssemblyPipeline {
	eyebrow?: string;
	title?: string;
	description?: string;
	clusters?: SamoCluster[];
	note?: string;
	class?: string;
}

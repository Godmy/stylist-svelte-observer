import type { SamoSnippet } from '$stylist/domain/type/object/samo-snippet';

export type SamoDevScenario = {
	id: string;
	title: string;
	summary: string;
	snippets: SamoSnippet[];
	notes: string[];
};

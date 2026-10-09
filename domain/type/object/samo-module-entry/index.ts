export type SamoModuleEntry = {
	name: string;
	path: string;
	visibility: 'public' | 'private';
	domains: string[];
	nested: string[];
	note: string;
};

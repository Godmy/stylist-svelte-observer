export type SamoExtensionStep = {
	title: string;
	description: string;
	path: string;
	status: 'added' | 'changed' | 'untouched';
	code: string;
};

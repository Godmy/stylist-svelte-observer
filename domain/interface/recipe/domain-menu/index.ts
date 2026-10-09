export interface RecipeDomainMenu {
	landingVisible?: boolean;
	domainVisible?: boolean;
	diagnosticsOpen?: boolean;
	howItWorksOpen?: boolean;
	settingsOpen?: boolean;
	onLandingToggle?: () => void;
	onDomainToggle?: () => void;
	onDiagnosticsToggle?: () => void;
	onHowItWorksToggle?: () => void;
	onSettingsToggle?: () => void;
	onManifestReload?: () => void;
	class?: string;
}

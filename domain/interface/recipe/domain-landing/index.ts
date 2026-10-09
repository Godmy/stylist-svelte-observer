export interface RecipeDomainLanding {
	rootDomainCount?: number;
	storyModuleCount?: number;
	onBrowseComponents?: () => void;
	onOpenPlayground?: () => void;
	onOpenWorkspace?: () => void;
	onOpenGuide?: () => void;
	class?: string;
}

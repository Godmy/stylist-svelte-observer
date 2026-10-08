import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export interface RecipeDeviceViewport {
	value?: DeviceFrameViewport;
	fullscreen?: boolean;
	onFullscreenChange?: (value: boolean) => void;
	onChange?: (value: DeviceFrameViewport) => void;
	class?: string;
}

import type { DeviceFrameViewport } from '$stylist/domain/type/alias/device-frame-viewport';
export interface RecipeDeviceViewport {
	value?: DeviceFrameViewport;
	width?: number | null;
	widths?: Partial<Record<DeviceFrameViewport, number | null>>;
	onWidthChange?: (width: number) => void;
	fullscreen?: boolean;
	onFullscreenChange?: (value: boolean) => void;
	onChange?: (value: DeviceFrameViewport) => void;
	class?: string;
}

import { useThemeStore } from "@/stores/theme";

function hexToHue(hex: string) {
  // Convert hex to RGB
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;

  // Find min and max values
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const delta = max - min;

  // Calculate Hue
  let h;
  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = (g - b) / delta;
  } else if (max === g) {
    h = 2 + (b - r) / delta;
  } else {
    h = 4 + (r - g) / delta;
  }
  h *= 60;
  if (h < 0) {
    h += 360;
  }

  return h;
}

export const useCustomHueValue = () => {
  // Get customHue from the store
  const customHue = useThemeStore((state) => state.customHue) || "#000000";
  const hue = hexToHue(customHue);

  return hue;
};

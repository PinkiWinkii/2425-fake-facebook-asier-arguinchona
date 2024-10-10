import { useSharedValue, useAnimatedStyle, interpolate } from "react-native-reanimated";

// Shared value
export const scroll_x = useSharedValue(0);

// Animated styles using the interpolate function
export const animatedStyle = useAnimatedStyle(() => {
    const cardTop           = interpolate(scroll_x.value, [0, 100], [15, 80], 'clamp');
    const cardLeft          = interpolate(scroll_x.value, [0, 100], [10, -50], 'clamp');
    const cardHeight        = interpolate(scroll_x.value, [0, 100], [200, 50], 'clamp');
    const cardMargin        = interpolate(scroll_x.value, [0, 100], [0, 4], 'clamp');
    const cardRadius        = interpolate(scroll_x.value, [0, 100], [10, 40], 'clamp');
    const cardLeftRadius    = interpolate(scroll_x.value, [0, 100], [10, 0], 'clamp');
    const textOpacity       = interpolate(scroll_x.value, [0, 10], [1, 0], 'clamp');
    const textScale         = interpolate(scroll_x.value, [0, 10], [1, 0], 'clamp');
    const iconScale         = interpolate(scroll_x.value, [0, 100], [1, 0.5], 'clamp');
    const iconTop           = interpolate(scroll_x.value, [0, 100], [115, 15], 'clamp');
    const iconLeft          = interpolate(scroll_x.value, [0, 100], [40, 80], 'clamp');
    const imageTop          = interpolate(scroll_x.value, [0, 100], [0, 0], 'clamp');
    const imageLeft         = interpolate(scroll_x.value, [0, 100], [0, 60], 'clamp');
    const imageWidth        = interpolate(scroll_x.value, [0, 100], [110, 40], 'clamp');
    const imageHeight       = interpolate(scroll_x.value, [0, 100], [130, 40], 'clamp');
    const imageMargin       = interpolate(scroll_x.value, [0, 100], [0, 6], 'clamp');
    const imageRadius       = interpolate(scroll_x.value, [0, 100], [10, 40], 'clamp');
    const imageBottomRadius = interpolate(scroll_x.value, [0, 100], [0, 40], 'clamp');
    const scrollLeft        = interpolate(scroll_x.value, [0, 100], [120, 0], 'clamp');

  return {
    top: cardTop,
    left: cardLeft,
    height: cardHeight,
    margin: cardMargin,
    borderRadius: cardRadius,
    borderTopLeftRadius: cardLeftRadius,
    textOpacity: textOpacity,
    textScale: textScale,
    iconScale: iconScale,
    iconTop: iconTop,
    iconLeft: iconLeft,
    imageTop: imageTop,
    imageLeft: imageLeft,
    imageWidth: imageWidth,
    imageHeight: imageHeight,
    imageMargin: imageMargin,
    imageRadius: imageRadius,
    imageBottomRadius: imageBottomRadius,
    scrollLeft: scrollLeft,
  };
});

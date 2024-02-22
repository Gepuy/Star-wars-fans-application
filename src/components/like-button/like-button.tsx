import React, { useEffect } from "react";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import Animated, { Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring, } from "react-native-reanimated";
import styled from "styled-components/native";

import { filledHeartIcon, outlinedHeartIcon } from "../../utils";

type LikeButtonProps = {
    readonly onPressFromParent?: () => void;
    readonly isItemLiked: boolean;
}

export const LikeButton = ({ onPressFromParent, isItemLiked }: LikeButtonProps) => {
    const liked = useSharedValue(isItemLiked ? 1 : 0);

    const outlineStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP), },
            ],
        };
    });

    const fillStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: liked.value }],
            opacity: liked.value,
        };
    });

    const onLikePress = () => {
        if (onPressFromParent) {
            onPressFromParent();
        }
        // eslint-disable-next-line functional/immutable-data
        liked.value = withSpring(liked.value ? 0 : 1);
    };

    useEffect(() => {
        // eslint-disable-next-line functional/immutable-data
        if (!isItemLiked) liked.value = withSpring(0);

    }, [isItemLiked, liked]);

    return (
        <Pressable onPress={onLikePress}>
            <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
                <LikeIcon
                    source={outlinedHeartIcon}
                    resizeMode="contain"
                />
            </Animated.View>

            <Animated.View style={fillStyle}>
                <LikeIcon
                    source={filledHeartIcon}
                    resizeMode="contain"
                />
            </Animated.View>
        </Pressable>
    );
};

const LikeIcon = styled(FastImage)`
    height: 22px;
    width: 22px;
    pointer-events: none;
`;

import { StackNavigationOptions } from "@react-navigation/stack";

export const horizontalAnimation: StackNavigationOptions = {
    gestureDirection: "horizontal",
    transitionSpec: {
        open: {
            animation: "timing",
            config: { duration: 400, },
        },
        close: {
            animation: "timing",
            config: { duration: 400, },
        },
    },
    cardStyleInterpolator: ({
        current, next, layouts
    }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width , 0],
                        }),
                    },
                    {
                        translateX: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -layouts.screen.width],
                            })
                            : 0,
                    },
                ],
            },
        };
    },
};

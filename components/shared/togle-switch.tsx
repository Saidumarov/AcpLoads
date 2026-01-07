import { TouchableOpacity } from 'react-native'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    useDerivedValue,
    interpolateColor,
} from 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from '~/lib/useColorScheme'
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar'
import { useEffect } from 'react'
import { handleHapticFeedback } from '~/constants/HapticTab'
export default function ToggleSwitch() {
    const { isDarkColorScheme, setColorScheme } = useColorScheme()

    const translateX = useSharedValue(isDarkColorScheme ? 4 : 38)
    const progress = useSharedValue(isDarkColorScheme ? 0 : 1)

    function toggleColorScheme() {
        setColorScheme(isDarkColorScheme ? 'light' : 'dark')
        setAndroidNavigationBar(isDarkColorScheme ? 'light' : 'dark')
        handleHapticFeedback()
    }

    useEffect(() => {
        translateX.value = withTiming(isDarkColorScheme ? 4 : 38, {
            duration: 300,
        })
        progress.value = withTiming(isDarkColorScheme ? 0 : 1, {
            duration: 300,
        })
    }, [isDarkColorScheme])

    const animatedBackground = useDerivedValue(() =>
        interpolateColor(progress.value, [1, 0], ['#D1DAE6', '#3F96D0'])
    )

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: translateX.value }],
    }))

    const backgroundStyle = useAnimatedStyle(() => ({
        backgroundColor: animatedBackground.value,
    }))

    return (
        <TouchableOpacity onPress={toggleColorScheme} activeOpacity={1}>
            <Animated.View
                style={[
                    {
                        width: 70,
                        height: 36,
                        borderRadius: 18,
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 4,
                        position: 'relative',
                    },
                    backgroundStyle,
                ]}
            >
                <Animated.View
                    style={[
                        {
                            width: 28,
                            height: 28,
                            borderRadius: 14,
                            backgroundColor: '#FFF',
                            position: 'absolute',
                            top: 4,
                        },
                        animatedStyle,
                    ]}
                />

                <Ionicons
                    name="moon"
                    size={20}
                    color="#3F96D0"
                    style={{ position: 'absolute', left: 8, top: 8 }}
                />

                <Ionicons
                    name="sunny"
                    size={20}
                    color={isDarkColorScheme ? '#fff' : '#3F96D0'}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                />
            </Animated.View>
        </TouchableOpacity>
    )
}

import { useState, useEffect, useRef } from 'react'
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { handleHapticFeedback } from '~/constants/HapticTab'
import { toastConfig } from '~/constants/toastConfig'

export const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    const translateX = useRef(new Animated.Value(0)).current
    const [tabWidth, setTabWidth] = useState(0)
    const insets = useSafeAreaInsets()
    const [isDelayedFocused, setIsDelayedFocused] = useState(state.index)

    useEffect(() => {
        Animated.spring(translateX, {
            toValue: state.index * tabWidth,
            useNativeDriver: true,
        }).start()

        const timeout = setTimeout(() => {
            setIsDelayedFocused(state.index)
        }, 150)

        return () => clearTimeout(timeout)
    }, [state.index, tabWidth])

    return (
        <>
            <Toast config={toastConfig} />
            <View
                style={[
                    styles.tabBar,
                    {
                        paddingBottom: insets.bottom,
                        height: 70 + insets.bottom,
                    },
                ]}
                className="bg-tabs"
                onLayout={(event) => {
                    const { width } = event.nativeEvent.layout
                    setTabWidth(width / state.routes.length)
                }}
            >
                <Animated.View
                    style={[
                        styles.activeBackground,
                        {
                            transform: [{ translateX }],
                            left: tabWidth / 2 - 23,
                        },
                    ]}
                />
                {state.routes.map((_: any, i: number) => (
                    <View
                        className="bg-tabBtn"
                        key={i}
                        style={[
                            styles.iconContainer1,
                            {
                                left: i * tabWidth + (tabWidth / 2 - 23),
                            },
                        ]}
                    ></View>
                ))}
                {state.routes.map((route: any, index: number) => {
                    const { options } = descriptors[route.key]
                    const isFocused =
                        state.index === index && isDelayedFocused === index
                    const scaleAnim = useRef(new Animated.Value(1)).current
                    const rotateAnim = useRef(new Animated.Value(0)).current

                    const onPress = () => {
                        handleHapticFeedback()
                        setTimeout(() => {
                            Animated.parallel([
                                Animated.sequence([
                                    Animated.spring(scaleAnim, {
                                        toValue: 1.05,
                                        friction: 5,
                                        tension: 100,
                                        useNativeDriver: true,
                                    }),
                                    Animated.spring(scaleAnim, {
                                        toValue: 1,
                                        friction: 5,
                                        tension: 100,
                                        useNativeDriver: true,
                                    }),
                                ]),
                                Animated.sequence([
                                    Animated.timing(rotateAnim, {
                                        toValue: 1,
                                        duration: 150,
                                        useNativeDriver: true,
                                    }),
                                    Animated.timing(rotateAnim, {
                                        toValue: -1,
                                        duration: 150,
                                        useNativeDriver: true,
                                    }),
                                    Animated.timing(rotateAnim, {
                                        toValue: 0,
                                        duration: 150,
                                        useNativeDriver: true,
                                    }),
                                ]),
                            ]).start()
                        }, 100)
                        navigation.navigate(route.name)
                    }

                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={onPress}
                            style={styles.tabButton}
                            activeOpacity={1}
                        >
                            <Animated.View
                                style={[
                                    styles.iconContainer,
                                    {
                                        transform: [
                                            { scale: scaleAnim },
                                            {
                                                rotate: rotateAnim.interpolate({
                                                    inputRange: [-1, 1],
                                                    outputRange: [
                                                        '-10deg',
                                                        '10deg',
                                                    ],
                                                }),
                                            },
                                        ],
                                    },
                                ]}
                            >
                                {options.tabBarIcon({
                                    color: isFocused ? '#fff' : '#3F96D0',
                                    width: 24,
                                    height: 24,
                                })}
                            </Animated.View>
                            <Text className="text-label text-[12px] ">
                                {route.name}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 2,
    },
    iconContainer: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
    },
    tabLabel: {
        fontSize: 12,
    },
    activeBackground: {
        position: 'absolute',
        width: 45,
        height: 45,
        backgroundColor: '#3F96D0',
        borderRadius: 50,
        top: 4,
        zIndex: 1,
    },
    iconContainer1: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: 45,
        height: 45,
        position: 'absolute',
        top: 4,
    },
})

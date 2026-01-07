import React, { useEffect, useRef } from 'react'
import { View, Animated, StyleSheet } from 'react-native'

const Loading = () => {
    const dots = [...Array(4)].map(() => useRef(new Animated.Value(0)).current)

    useEffect(() => {
        const animations = dots.map((dot, index) =>
            Animated.loop(
                Animated.sequence([
                    Animated.timing(dot, {
                        toValue: 1,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                    Animated.timing(dot, {
                        toValue: 0,
                        duration: 300,
                        useNativeDriver: true,
                    }),
                ])
            )
        )

        Animated.stagger(150, animations).start()
    }, [])

    return (
        <View style={styles.container}>
            {dots.map((dot, index) => (
                <Animated.View
                    key={index}
                    style={[
                        styles.dot,
                        {
                            transform: [
                                {
                                    scale: dot.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0.5, 1.2],
                                    }),
                                },
                            ],
                        },
                    ]}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: 'rgba(255,255,255,1)',
        marginHorizontal: 6,
    },
})

export default Loading

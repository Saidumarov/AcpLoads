import { View, Text, StyleSheet } from 'react-native'
import { Error, Success, Warning } from './icons'
import { useColorScheme } from '~/lib/useColorScheme'
export const toastConfig = {
    success: ({ text1 }: any) => {
        const { isDarkColorScheme: color } = useColorScheme()
        return (
            <View
                style={[
                    styles.toastContainer,
                    {
                        backgroundColor: color ? 'rgba(28, 57, 74, 1)' : '#fff',
                        borderColor: color
                            ? 'rgb(54 83 100)'
                            : 'rgb(209 218 230)',
                        borderWidth: 1,
                    },
                ]}
            >
                <Success
                    fill={
                        color
                            ? 'rgba(63, 150, 208, 0.1)'
                            : 'rgba(63, 150, 208, 0.1)'
                    }
                />
                <Text
                    style={[
                        styles.text,
                        {
                            color: color ? '#fff' : 'rgba(0, 0, 0, 1)',
                        },
                    ]}
                >
                    {text1}
                </Text>
            </View>
        )
    },

    error: ({ text1 }: any) => {
        const { isDarkColorScheme: color } = useColorScheme()
        return (
            <View
                style={[
                    styles.toastContainer,
                    {
                        backgroundColor: color ? 'rgba(28, 57, 74, 1)' : '#fff',
                        borderColor: color
                            ? 'rgb(54 83 100)'
                            : 'rgb(209 218 230)',
                        borderWidth: 1,
                    },
                ]}
            >
                <Error
                    fill={
                        color
                            ? 'rgba(241, 15, 15, 0.1)'
                            : 'rgba(251, 231, 231, 1)'
                    }
                />
                <Text
                    style={[
                        styles.text,
                        {
                            color: color ? '#fff' : 'rgba(0, 0, 0, 1)',
                        },
                    ]}
                >
                    {text1}
                </Text>
            </View>
        )
    },

    info: ({ text1 }: any) => {
        const { isDarkColorScheme: color } = useColorScheme()
        return (
            <View
                style={[
                    styles.toastContainer,
                    {
                        backgroundColor: color ? 'rgba(28, 57, 74, 1)' : '#fff',
                        borderColor: color
                            ? 'rgb(54 83 100)'
                            : 'rgb(209 218 230)',
                        borderWidth: 1,
                    },
                ]}
            >
                <Warning
                    fill={
                        color ? 'rgba(76, 74, 67, 1)' : 'rgba(250, 243, 218, 1)'
                    }
                />
                <Text
                    style={[
                        styles.text,
                        {
                            color: color ? '#fff' : 'rgba(0, 0, 0, 1)',
                        },
                    ]}
                >
                    {text1}
                </Text>
            </View>
        )
    },
}

const styles = StyleSheet.create({
    toastContainer: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 20,
        minWidth: 300,
        position: 'absolute',
        zIndex: 99999,
        top: 50,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 20,
    },
})

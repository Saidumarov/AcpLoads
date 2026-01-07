import '~/global.css'
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
    Theme,
    ThemeProvider,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Platform } from 'react-native'
import { NAV_THEME } from '~/lib/constants'
import { useColorScheme } from '~/lib/useColorScheme'
import { PortalHost } from '@rn-primitives/portal'
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar'
import BottomTabs from './tabs/BottomTabs'
import PostLoadsItems from '~/components/screen-items/PostLoadsItems'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Header } from '~/components/layout/header'
import Find_Loads_Detailes from '~/components/detailes/Find-Loads-Detailes'
import { useAuth } from '~/context/auth-context'
import LoginScreen from './screen/LoginScreen'

const Stack = createNativeStackNavigator()

const LIGHT_THEME: Theme = {
    ...DefaultTheme,
    colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
    ...DarkTheme,
    colors: NAV_THEME.dark,
}

export default function RootLayout() {
    const hasMounted = React.useRef(false)
    const { colorScheme, isDarkColorScheme } = useColorScheme()
    const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)
    const { isLogin } = useAuth()

    useIsomorphicLayoutEffect(() => {
        if (hasMounted.current) {
            return
        }

        if (Platform.OS === 'web') {
            document.documentElement.classList.add('bg-background')
        }
        setAndroidNavigationBar(colorScheme)
        setIsColorSchemeLoaded(true)
        hasMounted.current = true
    }, [])

    if (!isColorSchemeLoaded) {
        return null
    }

    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <ThemeProvider
                    value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}
                >
                    <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
                    <Stack.Navigator>
                        {isLogin ? (
                            <>
                                <Stack.Screen
                                    name="Main"
                                    component={BottomTabs}
                                    options={{ headerShown: false }}
                                />
                                <Stack.Screen
                                    name="FindLoadsDetailes"
                                    component={Find_Loads_Detailes}
                                    options={{
                                        presentation: 'card',
                                        header: () => <Header />,
                                    }}
                                />
                            </>
                        ) : (
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                                options={{ headerShown: false }}
                            />
                        )}
                    </Stack.Navigator>
                    <PortalHost />
                </ThemeProvider>
            </SafeAreaProvider>
        </NavigationContainer>
    )
}

const useIsomorphicLayoutEffect =
    Platform.OS === 'web' && typeof window === 'undefined'
        ? React.useEffect
        : React.useLayoutEffect

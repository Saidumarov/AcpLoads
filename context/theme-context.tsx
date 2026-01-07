import { createContext, ReactNode, useEffect } from 'react'
import { setAndroidNavigationBar } from '~/lib/android-navigation-bar'
import { useColorScheme } from '~/lib/useColorScheme'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Theme = createContext<any>(null)

// 🔹 Ma'lumotni saqlash
export const saveData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        return null
    }
}

// 🔹 Ma'lumotni olish
export const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value ? JSON.parse(value) : null
    } catch (error) {
        return null
    }
}

// 🔹 Ma'lumotni o'chirish
export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        return null
    }
}

const Theme_Context = ({ children }: { children: ReactNode }) => {
    const { colorScheme, setColorScheme } = useColorScheme()

    useEffect(() => {
        const loadData = async () => {
            const savedTheme = await getData('theme')
            if (savedTheme) {
                return
            } else {
                saveData('theme', 'light')
                setColorScheme('light')
                setAndroidNavigationBar('light')
            }
        }
        loadData()
    }, [colorScheme])

    return <Theme.Provider value={{ colorScheme }}>{children}</Theme.Provider>
}

export default Theme_Context

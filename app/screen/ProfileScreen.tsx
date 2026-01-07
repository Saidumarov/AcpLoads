import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useAuth } from '~/context/auth-context'

const ProfileScreen = () => {
    const menuItems = [
        { id: 1, icon: 'user', title: 'Profile' },
        { id: 2, icon: 'info', title: 'Company Information' },
        { id: 3, icon: 'star', title: 'Comment and Review' },
        { id: 4, icon: 'list', title: 'Posted Loads' },
        { id: 5, icon: 'help-circle', title: 'Help' },
    ]
    const { setIsLogin } = useAuth()

    return (
        <View className="flex-1 p-4">
            {menuItems.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    className="flex-row w-full items-center p-4 bg-profilebtn rounded-xl mb-3"
                    activeOpacity={0.7}
                >
                    <Feather
                        name={item.icon as keyof typeof Feather.glyphMap}
                        size={20}
                        className="mr-3 t!ext-gray-800 dark:!text-white"
                    />
                    <Text className="text-lg text-gray-800 dark:text-white">
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}

            <TouchableOpacity
                onPress={() => setIsLogin(false)}
                className="absolute bottom-5 left-4 w-full right-4 bg-profilebtn p-4 rounded-xl flex-row items-center justify-center"
                activeOpacity={0.7}
            >
                <Feather
                    name="log-out"
                    size={20}
                    className="mr-3 !text-gray-800 dark:!text-white"
                />
                <Text className="text-lg text-gray-800 dark:text-white">
                    Log out
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen

import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { Notfication, Time } from '~/constants/icons'
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useColorScheme } from '~/lib/useColorScheme'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useRef } from 'react'

interface Item {
    from: string
    to: string
    age: number
    size: string
    weight: string
    id: string
}
interface FindCardProps {
    item: Item
    index: number
    data: any[]
    activeId: string | null
    setActiveId: (id: string | null) => void
    handleDelete: (id: string) => void
    handleScrol: (index: number) => void
}
const Find_card = ({
    item,
    index,
    data,
    activeId,
    setActiveId,
    handleDelete,
    handleScrol,
}: FindCardProps) => {
    const { isDarkColorScheme: color } = useColorScheme()
    const isActive = activeId === item.id
    const { navigate } = useNavigation()
    const fadeAnim = useRef(
        new Animated.Value(activeId === item.id ? 1 : 0)
    ).current
    const rotateAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: activeId === item.id ? 1 : 0,
            duration: 150,
            useNativeDriver: false,
        }).start()
    }, [activeId])

    const handlePress = () => {
        navigate('FindLoadsDetailes' as never)
        handleScrol(index)
        if (!isActive) {
            setActiveId(item.id)
        }
    }

    const handleAnimation = () => {
        Animated.sequence([
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
                toValue: -1,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start()
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={handlePress}
            className={`p-[6px]  h-36 border-b-[1px] w-full flex-row items-center justify-between rounded-[10px]  overflow-hidden`}
            style={{
                borderTopLeftRadius: index === 0 ? 10 : 0,
                borderTopRightRadius: index === 0 ? 10 : 0,
                borderBottomLeftRadius: index === data?.length - 1 ? 10 : 0,
                borderBottomRightRadius: index === data?.length - 1 ? 10 : 0,
                borderColor: color ? 'rgb(54 83 100)' : 'rgb(209 218 230)',
            }}
        >
            <Animated.View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: color
                        ? 'rgb(39, 64, 79)'
                        : 'rgba(227, 235, 248, 1)',
                    transform: [{ scaleY: fadeAnim }],
                }}
            />

            <View className="w-[90%] max-sm:w-[87%]">
                <View className="w-full relative h-16 bg-itembg border-[1px] flex-row items-center justify-between px-2 rounded-xl border-border1">
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={handleAnimation}
                        className="w-12 h-12 border-[0.5px] border-border1 dark:border-none relative flex-row items-center justify-center bg-n rounded-full"
                    >
                        <Animated.View
                            style={[
                                {
                                    transform: [
                                        {
                                            rotate: rotateAnim.interpolate({
                                                inputRange: [-1, 0, 1],
                                                outputRange: [
                                                    '-20deg',
                                                    '0deg',
                                                    '20deg',
                                                ],
                                            }),
                                        },
                                    ],
                                },
                            ]}
                        >
                            <Notfication
                                width={25}
                                height={25}
                                fill={color ? '#FFFFFF' : '#546172'}
                            />
                            {/* <MaterialIcons
                name="notifications-on"
                size={28}
                className="!text-green-500"
              /> */}
                        </Animated.View>
                        <View className="w-6 h-6 top-0 -right-2 rounded-full bg-search flex-row items-center justify-center absolute">
                            <Text className="text-sm text-white font-medium">
                                4
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View className="w-[90%] max-sm:w-[85%] max-[500px]:w-[82%] max-[400px]:w-[80.5%]  flex-row items-center justify-between h-full">
                        <View className="w-[38%]">
                            <Text className="text-[#031E30] font-medium text-[13px] text-left  line-clamp-1 dark:text-white/90">
                                {item.from}
                            </Text>
                            <Text className="font text-[#546172] text-sm text-left line-clamp-1 dark:text-[#899FAC] pt-1">
                                DH-O: 100
                            </Text>
                        </View>
                        <View className="w-[24%]  relative flex-row items-center justify-between">
                            <View className="w-2 h-2 left-0 z-[1] absolute bg-search rounded-full"></View>
                            <View className="w-full h-[2px] bg-border1 dark:bg-[rgba(74,103,120,1)]"></View>
                            <View className="w-2 h-2 absolute right-0 bg-search rounded-full"></View>
                        </View>
                        <View className="w-[38%]">
                            <Text className="text-[#031E30] font-medium text-[13px] text-right line-clamp-1 dark:text-white/90">
                                {item.to}
                            </Text>
                            <Text className="text-[#546172] text-sm text-right line-clamp-1 dark:text-[#899FAC] pt-1">
                                DH-O: 100
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="w-full pt-2 ">
                    <View className="w-full flex-row justify-between items-center">
                        <View className="w-[30%] flex-row items-center justify-center flex-wrap gap-y-1">
                            <Text className="text-[#031E30] text-center font-medium text-[13px] line-clamp-1 dark:text-white/90">
                                Age: {item.age}
                            </Text>
                            <View className="py-1 w-full  px-3 rounded-full border-border1 border-[1px]">
                                <Text className="text-[#546172] text-center text-sm  line-clamp-1 dark:text-slate-50 ">
                                    PO/VAN
                                </Text>
                            </View>
                        </View>
                        <View className="w-[30%] flex-row items-center justify-center flex-wrap gap-y-1">
                            <Text className="text-[#031E30] text-center font-medium text-[13px] line-clamp-1 dark:text-white/90">
                                {item.size}
                            </Text>
                            <View className="py-1 w-full px-3 rounded-full border-border1 border-[1px]">
                                <Text className="text-[#546172] text-sm text-center line-clamp-1 dark:text-slate-50 ">
                                    FTL/LTL
                                </Text>
                            </View>
                        </View>
                        <View className="w-[30%] flex-row items-center justify-center flex-wrap gap-y-1">
                            <Text className="text-[#031E30] text-center font-medium text-[13px] line-clamp-1 dark:text-white/90">
                                {item.weight}
                            </Text>
                            <View className="py-1 w-full px-3 flex-row items-center justify-center rounded-full gap-x-1 border-border1 border-[1px]">
                                <Time fill={color ? '#FFFFFF' : '#546172'} />
                                <Text className="text-[#546172] text-sm text-center line-clamp-1 dark:text-slate-50 ">
                                    09/25
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View className="w-[10%] flex-col pt-1  h-full justify-between items-center">
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="w-9 h-9 rounded-lg bg-btn flex-row items-center justify-center"
                >
                    <Ionicons
                        name="reload"
                        size={20}
                        className="!text-reload"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="w-9 h-9 rounded-lg bg-btn flex-row items-center justify-center"
                >
                    <MaterialIcons
                        name="edit"
                        size={20}
                        className="!text-edit"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handleDelete(item.id)}
                    className="w-9 h-9 rounded-lg bg-btn flex-row items-center justify-center"
                >
                    <FontAwesome
                        name="trash"
                        size={20}
                        className="!text-trash"
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default Find_card

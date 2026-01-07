import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { More, Time } from '~/constants/icons'
import { useColorScheme } from '~/lib/useColorScheme'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useRef, useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { useWindowDimensions } from 'react-native'

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
const Find_detail_card = ({
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
    const [checked, setChecked] = useState(false)
    const { width } = useWindowDimensions()

    const fadeAnim = useRef(
        new Animated.Value(activeId === item.id ? 1 : 0)
    ).current

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: activeId === item.id ? 1 : 0,
            duration: 150,
            useNativeDriver: false,
        }).start()
    }, [activeId])

    const handlePress = () => {
        handleScrol(index)
        if (!isActive) {
            setActiveId(item.id)
        } else {
            setActiveId(null)
        }
    }

    const loadInfo = {
        ref: '1359847',
        name: 'Nick Charles',
        commodity: 'FAK',
        mcNumber: '1324657',
        dlvDate: '24 sep',
        creditScore: 97,
        rpm: '$3.24',
        loadDescription:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    }

    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={handlePress}
            className={` ${
                activeId === item.id
                    ? 'h-[405px] android:h-[430px]'
                    : 'h-[140px]'
            }  pb-2  w-full flex-row items-center justify-between rounded-[10px] overflow-hidden`}
            style={{
                borderTopLeftRadius: index === 0 ? 10 : 0,
                borderTopRightRadius: index === 0 ? 10 : 0,
                borderBottomLeftRadius: index === data?.length - 1 ? 10 : 0,
                borderBottomRightRadius: index === data?.length - 1 ? 10 : 0,
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
                    height: width > 640 ? 150 : 130,
                }}
            />

            <View className="w-full">
                <View
                    className={`w-full !pt-0 p-[6px] ${
                        activeId === item.id ? '-mt-[14px]' : ''
                    }`}
                >
                    <View className="w-full flex-row items-center justify-between">
                        <View className="w-[75%] relative h-16 bg-itembg border-[1px] flex-row items-center justify-between px-2 rounded-xl border-border1">
                            <View className="w-full  flex-row items-center justify-between h-full">
                                <View className="w-[30%]">
                                    <Text className="text-[#031E30] dark:text-white/90 font-medium text-[13px] text-left  line-clamp-1 ">
                                        {item.from}
                                    </Text>
                                    <Text className="text-[#546172] text-sm text-left line-clamp-1 dark:text-[#899FAC] pt-1">
                                        DH-O: 100
                                    </Text>
                                </View>
                                <View className="w-[30%]  relative flex-row items-center justify-between">
                                    <View className="w-2 h-2 left-0 z-[1] absolute bg-search rounded-full"></View>
                                    <View className="w-full h-[2px] flex items-center justify-center bg-border1 dark:bg-[rgba(74,103,120,1)]">
                                        <Text className="text-[14px] text-[#031E30]  dark:text-white/90 absolute  z-10 bg-itembg px-1 ">
                                            72 mi
                                        </Text>
                                    </View>
                                    <View className="w-2 h-2 absolute right-0 bg-search rounded-full"></View>
                                </View>
                                <View className="w-[30%]">
                                    <Text className="text-[#031E30] dark:text-white/90 font-medium text-[13px] text-right line-clamp-1 ">
                                        {item.to}
                                    </Text>
                                    <Text className="text-[#546172] dark:text-[#899FAC] text-sm text-right line-clamp-1  pt-1">
                                        DH-O: 100
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View className="w-[25%]">
                            <Text className="text-[18px] text-detailt text-center font-medium">
                                $3000
                            </Text>
                            <View className="w-full flex-row flex-nowrap pt-2 items-center justify-center gap-x-1">
                                <Text className="text-[13px] text-[#031E30] dark:text-white/90">
                                    Status:
                                </Text>
                                <Checkbox
                                    checked={checked}
                                    className="border-detailt   checked:bg-transparent"
                                    onCheckedChange={setChecked}
                                />
                            </View>
                        </View>
                    </View>
                    <View className="w-full pt-2 ">
                        <View className="w-full flex-row justify-between items-center">
                            <View className="w-[20%] flex-row items-center justify-center flex-wrap gap-y-1">
                                <Text className="text-[#031E30] text-center font-medium text-[13px] line-clamp-1 dark:text-white/90">
                                    Age: {item.age}
                                </Text>
                                <View className="py-1 w-full  px-3 rounded-full border-border1 border-[1px]">
                                    <Text className="text-[#546172] text-center text-sm  line-clamp-1 dark:text-slate-50 ">
                                        PO/VAN
                                    </Text>
                                </View>
                            </View>
                            <View className="w-[20%] max-[380px]:w-[22%] flex-row items-center justify-center flex-wrap gap-y-1">
                                <Text className="text-[#031E30] text-center font-medium text-[13px] line-clamp-1 dark:text-white/90">
                                    {item.size}
                                </Text>
                                <View className="py-1 w-full px-3 rounded-full border-border1 border-[1px]">
                                    <Text className="text-[#546172] text-sm text-center line-clamp-1 dark:text-slate-50 ">
                                        FTL/LTL
                                    </Text>
                                </View>
                            </View>
                            <View className="w-[20%] flex-row items-center justify-center flex-wrap gap-y-1">
                                <Text className="text-[#031E30] text-center font-medium text-[13px] line-clamp-1 dark:text-white/90">
                                    {item.weight}
                                </Text>
                                <View className="py-1 w-full px-3 flex-row items-center justify-center rounded-full gap-x-1 border-border1 border-[1px]">
                                    <Time
                                        fill={color ? '#FFFFFF' : '#546172'}
                                    />
                                    <Text className="text-[#546172] text-sm text-center line-clamp-1 dark:text-slate-50 ">
                                        09/25
                                    </Text>
                                </View>
                            </View>
                            <View className="w-[32%] max-[380px]:w-[30%] flex-row items-center justify-center flex-wrap gap-y-1">
                                <Text className="text-detailt text-center font-medium text-[13px] line-clamp-1 ">
                                    Boss Trans LLC
                                </Text>
                                <View className="py-1 w-full px-3 bg-detail flex-row items-center justify-center rounded-full gap-x-1 ">
                                    <Text className="text-white text-sm text-center line-clamp-1 dark:text-slate-50 ">
                                        77 777 77 77
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    className={`w-full  ${
                        activeId === item.id ? 'h-auto' : 'h-0'
                    } `}
                >
                    <LoadDetails loadInfo={loadInfo} />
                </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handlePress}
                style={{
                    borderBottomColor: color
                        ? 'rgb(54 83 100)'
                        : 'rgb(209 218 230)',
                }}
                className="w-full  flex-row items-center  justify-center bottom-2 border-b-[5px]  absolute h-[15px]"
            >
                <View
                    className={`absolute   ${
                        activeId === item.id
                            ? 'rotate-180 top-[5px]'
                            : 'rotate-0 top-3'
                    } `}
                >
                    <More />
                </View>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default Find_detail_card

const LoadDetails = ({ loadInfo }: any) => {
    return (
        <View className="p-3 pt-5 pb-0 ">
            <View className="w-full flex-row justify-between items-start ">
                <View className="flex-row w-[45%] flex-wrap justify-between mb-2">
                    <View className="flex-row w-full justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            Ref#:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.ref}
                        </Text>
                    </View>
                    <View className="flex-row  w-full justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            Commodity:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.commodity}
                        </Text>
                    </View>
                    <View className="flex-row w-full  justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            DLV Date:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.dlvDate}
                        </Text>
                    </View>
                    <View className="flex-row w-full justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            RPM:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.rpm}
                        </Text>
                    </View>
                </View>

                <View className="flex-row flex-wrap w-[45%] justify-between mb-2">
                    <View className="flex-row  w-full justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            Name:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.name}
                        </Text>
                    </View>
                    <View className="flex-row  w-full justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            MC#:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.mcNumber}
                        </Text>
                    </View>
                    <View className="flex-row  w-full justify-between mb-2">
                        <Text className=" text-[13px] text-[#546172] dark:text-[#899FAC]">
                            Credit Score:
                        </Text>
                        <Text className=" text-[13px] font-semibold text-[#031E30] dark:text-white/90">
                            {loadInfo.creditScore}
                        </Text>
                    </View>
                </View>
            </View>
            <Text className="text-[#546172] dark:text-[#899FAC] text-[13px] ">
                Load Description:
            </Text>
            <Text className="text-[#031E30] pt-1 dark:text-white/90 font-medium text-[13px]">
                {loadInfo.loadDescription}
            </Text>

            <TouchableOpacity
                activeOpacity={0.8}
                className=" border-detailt border-[1px] rounded-xl mt-4 p-3"
            >
                <Text className="text-detailt text-center font-semibold">
                    COMPANY REVIEW
                </Text>
            </TouchableOpacity>
        </View>
    )
}

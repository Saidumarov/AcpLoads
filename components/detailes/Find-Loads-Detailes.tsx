import { useEffect, useRef, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    RefreshControl,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from '~/lib/useColorScheme'
import { dataList, LoadingData } from '~/db'
import { FindDetail_Loading } from '../animation'
import { useNavigation } from '@react-navigation/native'
import Find_detail_card from '../cards/find-detail-card'
import { Skeleton } from '../ui/skeleton'

const Find_Loads_Detailes = () => {
    const [data, setData] = useState(dataList)
    const [refreshing, setRefreshing] = useState(false)
    const { isDarkColorScheme: color } = useColorScheme()
    const [activeId, setActiveId] = useState<string | null>(null)
    const navigation = useNavigation()
    const listRef = useRef<any>(null)
    const [loading, setLoading] = useState(true)
    const handleDelete = (id: string) => {
        setData(data.filter((item) => item.id !== id))
    }

    const handleRefresh = () => {
        setRefreshing(true)
        setLoading(true)
        setTimeout(() => {
            setData([...dataList])
            setRefreshing(false)
        }, 1000)

        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleScroll = (index: number) => {
        listRef.current?.scrollToIndex({
            index,
            animated: true,
            viewOffset: 0,
        })
    }

    return (
        <View className="flex-1 w-full h-full pt-2 p-[10px]">
            <View className="flex-row max-[550px]:w-full  w-[500px] mx-auto justify-between mb-2 px-[2px]">
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack()}
                    className="flex-row  bg-menu justify-around w-[40px] h-[40px] rounded-xl items-center"
                >
                    <Ionicons
                        name="arrow-back"
                        size={20}
                        className="!text-gray-900 dark:!text-white"
                    />
                </TouchableOpacity>
                <View
                    className={`flex-row h-[40px] ${
                        loading ? 'px-0' : 'px-2'
                    }  bg-menu justify-around  w-[85%] rounded-xl items-center`}
                >
                    {loading ? (
                        <Skeleton className="h-full w-full rounded-xl" />
                    ) : (
                        <View className="w-full px-1 flex-row items-center justify-between h-full">
                            <View className="w-[34%]">
                                <Text className="text-[#031E30] font-bold text-[15px] text-left  line-clamp-1 dark:text-white">
                                    Chicago, IL
                                </Text>
                            </View>
                            <View className="w-[26%] relative flex-row items-center justify-between">
                                <View className="w-2 h-2 left-0 z-[1] absolute bg-search rounded-full"></View>
                                <View className="w-full h-[2px] bg-border1 dark:bg-[rgba(74,103,120,1)]"></View>
                                <View className="w-2 h-2 absolute right-0 bg-search rounded-full"></View>
                            </View>
                            <View className="w-[34%]">
                                <Text className="text-[#031E30] font-bold text-[15px] text-right line-clamp-1 dark:text-white">
                                    Atlanta, GA
                                </Text>
                            </View>
                        </View>
                    )}
                </View>
            </View>

            <FlatList
                ref={listRef}
                data={loading ? LoadingData : data}
                keyExtractor={(item) => item.id}
                getItemLayout={(_, index) => ({
                    length: 140,
                    offset: 140 * index,
                    index,
                })}
                renderItem={({ item, index }) =>
                    loading ? (
                        <FindDetail_Loading />
                    ) : (
                        <Find_detail_card
                            item={item}
                            index={index}
                            data={data}
                            key={index}
                            activeId={activeId}
                            setActiveId={setActiveId}
                            handleDelete={handleDelete}
                            handleScrol={handleScroll}
                        />
                    )
                }
                className="border-[1px] rounded-xl"
                style={[
                    {
                        backgroundColor: color
                            ? 'rgb(26 49 62)'
                            : 'rgb(255 255 255)',
                        borderColor: color
                            ? 'rgb(54 83 100)'
                            : 'rgb(209 218 230)',
                    },
                ]}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={handleRefresh}
                    />
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Find_Loads_Detailes

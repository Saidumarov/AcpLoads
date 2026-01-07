import { useEffect, useRef, useState } from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    RefreshControl,
} from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons'
import { useColorScheme } from '~/lib/useColorScheme'
import { dataList, LoadingData } from '~/db'
import Toast from 'react-native-toast-message'
import Find_card from '../cards/find-card'
import FindCar_Loading from '../animation'

const FindLoadsItems = () => {
    const [data, setData] = useState(dataList)
    const [refreshing, setRefreshing] = useState(false)
    const { isDarkColorScheme: color } = useColorScheme()
    const [activeId, setActiveId] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const listRef = useRef<any>(null)
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

    const showToast = () => {
        const types = ['success', 'info', 'error']
        const randomType = types[Math.floor(Math.random() * types.length)]
        Toast.show({
            type: randomType,
            text1: 'Hello',
        })
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const handleScrol = (index: number) => {
        listRef.current?.scrollToIndex({ index, animated: true })
    }
    return (
        <View className="flex-1 w-full h-full pt-2 p-[10px]">
            <View className="flex-row max-[640px]:w-full w-[500px] mx-auto justify-between mb-2 px-[2px]">
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={showToast}
                    className="flex-row px-2  bg-search justify-around w-[48%] h-[40px] rounded-xl items-center"
                >
                    <FontAwesome name="search" size={20} color="#fff" />
                    <Text className="text-lg font-medium text-white">
                        NEW SEARCH
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    className="flex-row  h-[40px] px-2 bg-menu justify-around w-[48%] rounded-xl items-center"
                >
                    <Feather
                        name="list"
                        size={20}
                        className="!text-gray-900 dark:!text-white"
                    />
                    <Text className="text-lg font-medium !text-gray-900 dark:!text-white">
                        TOTAL RESULTS
                    </Text>
                </TouchableOpacity>
            </View>

            <FlatList
                ref={listRef}
                data={loading ? LoadingData : data}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) =>
                    loading ? (
                        <FindCar_Loading />
                    ) : (
                        <Find_card
                            item={item}
                            index={index}
                            data={data}
                            key={index}
                            activeId={activeId}
                            setActiveId={setActiveId}
                            handleDelete={handleDelete}
                            handleScrol={handleScrol}
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

export default FindLoadsItems

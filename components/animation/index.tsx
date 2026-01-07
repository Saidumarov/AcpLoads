import { View } from 'react-native'
import { useColorScheme } from '~/lib/useColorScheme'
import { Skeleton } from '../ui/skeleton'

const FindCar_Loading = () => {
    const { isDarkColorScheme: color } = useColorScheme()

    return (
        <>
            {Array.from({ length: 5 }).map((_, i) => (
                <View
                    key={i}
                    className="p-[6px]  h-36 border-b-[1px] w-full flex-row items-center justify-between rounded-[10px] overflow-hidden"
                    style={{
                        borderColor: color
                            ? 'rgb(54 83 100)'
                            : 'rgb(209 218 230)',
                    }}
                >
                    <View className="w-[90%] max-sm:w-[87%]">
                        <View className="w-full pb-2">
                            <Skeleton className="h-[50px] w-full rounded-lg" />
                        </View>
                        <View className="w-full  px-1 flex-row justify-between items-center">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-[16px] w-[30%] rounded-xl"
                                />
                            ))}
                        </View>
                        <View className="w-full pt-2 flex-row px-[1px] justify-between items-center">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-[25px] w-[30%] rounded-2xl"
                                />
                            ))}
                        </View>
                    </View>
                    <View className="w-[10%] flex-col h-full py-1 justify-between items-center">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton
                                key={i}
                                className="h-[29%] max-w-[50px] w-full rounded-lg"
                            />
                        ))}
                    </View>
                </View>
            ))}
        </>
    )
}

export default FindCar_Loading

export const FindDetail_Loading = () => {
    const { isDarkColorScheme: color } = useColorScheme()
    return (
        <>
            {Array.from({ length: 5 }).map((_, i) => (
                <View
                    key={i}
                    className="p-[6px]  h-[135px] border-b-[1px] w-full flex-row items-center justify-between rounded-[10px] overflow-hidden"
                    style={{
                        borderColor: color
                            ? 'rgb(54 83 100)'
                            : 'rgb(209 218 230)',
                    }}
                >
                    <View className="w-full">
                        <View className="w-full pb-2">
                            <Skeleton className="h-[60px] w-full rounded-lg" />
                        </View>
                        <View className="w-full  px-1 flex-row justify-between items-center">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-[16px] w-[23%] rounded-xl"
                                />
                            ))}
                        </View>
                        <View className="w-full pt-2 flex-row px-[1px] justify-between items-center">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <Skeleton
                                    key={i}
                                    className="h-[25px] w-[23%] rounded-2xl"
                                />
                            ))}
                        </View>
                    </View>
                </View>
            ))}
        </>
    )
}

import { StyleSheet, Text, View } from 'react-native'
import { FindTrucks } from '~/constants/icons'

export const FindTrucksScreen = () => (
    <View style={styles.screen}>
        <Text>
            <FindTrucks width={50} height={50} />
        </Text>
    </View>
)

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Animated,
// } from 'react-native'
// import Swipeable from 'react-native-gesture-handler/Swipeable'
// import { FlatList } from 'react-native'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// const chatData = [
//     { id: '1', name: 'Unical HR' },
//     { id: '2', name: 'FrontEnd Js interview' },
//     { id: '3', name: 'ISHTIXON IT ACADEMY' },
// ]

// const ChatList = () => {
//     const handleDelete = (id: any) => {
//         console.log('Deleted:', id)
//     }

//     const handleArchive = (id: any) => {
//         console.log('Archived:', id)
//     }

//     const handleMute = (id: any) => {
//         console.log('Muted:', id)
//     }

//     return (
//         <GestureHandlerRootView>
//             <FlatList
//                 data={chatData}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => (
//                     <ChatItem
//                         item={item}
//                         onDelete={() => handleDelete(item.id)}
//                         onArchive={() => handleArchive(item.id)}
//                         onMute={() => handleMute(item.id)}
//                     />
//                 )}
//             />
//         </GestureHandlerRootView>
//     )
// }

// export default ChatList

// const ChatItem = ({ item, onDelete, onArchive, onMute }: any) => {
//     const renderRightActions = (progress: any, dragX: any) => {
//         return (
//             <View style={styles.actionsContainer}>
//                 <Animated.View
//                     style={[styles.actionButton, { backgroundColor: 'orange' }]}
//                 >
//                     <TouchableOpacity onPress={onMute}>
//                         <Text style={styles.actionText}>Sukut</Text>
//                     </TouchableOpacity>
//                 </Animated.View>

//                 <Animated.View
//                     style={[styles.actionButton, { backgroundColor: 'red' }]}
//                 >
//                     <TouchableOpacity onPress={onDelete}>
//                         <Text style={styles.actionText}>O‘chirish</Text>
//                     </TouchableOpacity>
//                 </Animated.View>

//                 <Animated.View
//                     style={[styles.actionButton, { backgroundColor: 'gray' }]}
//                 >
//                     <TouchableOpacity onPress={onArchive}>
//                         <Text style={styles.actionText}>Arxiv</Text>
//                     </TouchableOpacity>
//                 </Animated.View>
//             </View>
//         )
//     }

//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <View style={styles.chatItem}>
//                 <Text style={styles.chatText}>{item.name}</Text>
//             </View>
//         </Swipeable>
//     )
// }

// const styles = StyleSheet.create({
//     chatItem: {
//         padding: 16,
//         backgroundColor: '#222',
//         borderBottomWidth: 1,
//         borderBottomColor: '#333',
//     },
//     chatText: {
//         color: 'white',
//         fontSize: 16,
//     },
//     actionsContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
//     actionButton: {
//         padding: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: 100,
//     },
//     actionText: {
//         color: 'white',
//         fontWeight: 'bold',
//     },
// })

// import React from 'react'
// import { View, Text, StyleSheet, Animated } from 'react-native'
// import {
//     GestureHandlerRootView,
//     RectButton,
// } from 'react-native-gesture-handler'
// import Swipeable from 'react-native-gesture-handler/Swipeable'

// const AppleStyleSwipeableRow = () => {
//     const renderLeftActions = (progress: any, dragX: any) => {
//         const trans = dragX.interpolate({
//             inputRange: [0, 50, 100, 150],
//             outputRange: [-20, 0, 10, 20],
//         })

//         return (
//             <RectButton style={styles.leftAction}>
//                 <Animated.Text
//                     style={[
//                         styles.actionText,
//                         { transform: [{ translateX: trans }] },
//                     ]}
//                 >
//                     Archive
//                 </Animated.Text>
//             </RectButton>
//         )
//     }

//     return (
//         <GestureHandlerRootView style={styles.container}>
//             <Swipeable renderLeftActions={renderLeftActions}>
//                 <View style={styles.swipeItem}>
//                     <Text style={styles.text}>Swipe me left!</Text>
//                 </View>
//             </Swipeable>
//         </GestureHandlerRootView>
//     )
// }

// export default AppleStyleSwipeableRow

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     swipeItem: {
//         backgroundColor: '#ddd',
//         padding: 20,
//         borderRadius: 10,
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     leftAction: {
//         backgroundColor: '#4CAF50',
//         justifyContent: 'center',
//         flex: 1,
//         paddingLeft: 20,
//         borderRadius: 10,
//     },
//     actionText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: 'white',
//     },
// })

/* eslint-disable react-native/no-inline-styles */
// import { Button, StyleSheet } from 'react-native'
// import React, { useCallback, useRef } from 'react'
// import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import BottomSheet, { BottomSheetMethods } from './src/components/BottomSheet'
// import Lorem from './src/components/Lorem'
// import BottomSheetScrollView from './src/components/BottomSheetScrollView'
// import BottomSheetFlatList from './src/components/BottomSheetFlatList'
// import data from './src/data/data'
// import RenderItem from './src/components/RenderItem'
// import Example from './src/components/Example'
// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

// const BottomSheetScreenScroll = () => {
//     const bottomSheetRef = useRef<BottomSheetMethods>(null)
//     const bottomSheetRef2 = useRef<BottomSheetMethods>(null)
//     const bottomSheetRef3 = useRef<BottomSheetMethods>(null)
//     const bottomSheetRef4 = useRef<BottomSheetMethods>(null)

//     const pressHandler = useCallback(() => {
//         bottomSheetRef.current?.expand()
//     }, [])
//     const pressHandler2 = useCallback(() => {
//         bottomSheetRef2.current?.expand()
//     }, [])
//     const pressHandler3 = useCallback(() => {
//         bottomSheetRef3.current?.expand()
//     }, [])
//     const pressHandler4 = useCallback(() => {
//         bottomSheetRef4.current?.expand()
//     }, [])

//     return (
//         <SafeAreaProvider>
//             <GestureHandlerRootView style={{ flex: 1 }}>
//                 <SafeAreaView style={styles.container}>
//                     <Button title="Blank" onPress={() => pressHandler()} />
//                     <Button title="Example" onPress={() => pressHandler2()} />
//                     <Button
//                         title="ScrollView"
//                         onPress={() => pressHandler3()}
//                     />
//                     <Button title="Flatlist" onPress={() => pressHandler4()} />
//                     <BottomSheet
//                         ref={bottomSheetRef}
//                         snapTo={'50%'}
//                         backgroundColor={'white'}
//                         backDropColor={'black'}
//                     />
//                     <BottomSheet
//                         ref={bottomSheetRef2}
//                         snapTo={'60%'}
//                         backgroundColor={'#ffe7cf'}
//                         backDropColor={'black'}
//                     >
//                         <Example />
//                     </BottomSheet>
//                     <BottomSheetScrollView
//                         ref={bottomSheetRef3}
//                         snapTo={'50%'}
//                         backgroundColor={'white'}
//                         backDropColor={'black'}
//                     >
//                         <Lorem />
//                     </BottomSheetScrollView>
//                     <BottomSheetFlatList
//                         ref={bottomSheetRef4}
//                         data={data}
//                         renderItem={({ item, index }: any) => {
//                             return <RenderItem item={item} key={index} />
//                         }}
//                         snapTo={'50%'}
//                         backgroundColor={'white'}
//                         backDropColor={'black'}
//                     />
//                 </SafeAreaView>
//             </GestureHandlerRootView>
//         </SafeAreaProvider>
//     )
// }

// export default BottomSheetScreenScroll

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
// })

import { StyleSheet, Text, View } from 'react-native'
import { ShippersLoad } from '~/constants/icons'

export const ShippersLoadScreen = () => (
    <View style={styles.screen}>
        <Text>
            <ShippersLoad width={50} height={50} />
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

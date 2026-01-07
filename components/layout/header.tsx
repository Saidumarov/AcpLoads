import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ToggleSwitch from '../shared/togle-switch'
import { Logo } from '~/constants/icons'
import { useColorScheme } from '~/lib/useColorScheme'

export const Header = () => {
    const { isDarkColorScheme: color } = useColorScheme()
    const insets = useSafeAreaInsets()

    return (
        <View
            className="flex-row header justify-between  items-center px-4"
            style={{
                paddingTop: insets.top + 5,
            }}
        >
            <Logo width={150} fill={color ? '#f6f3f3' : '#3F96D0'} />
            <ToggleSwitch />
        </View>
    )
}

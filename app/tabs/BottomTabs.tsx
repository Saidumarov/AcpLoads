import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    FindLoadsIcon,
    FindTrucks,
    LoadsIcons,
    ProfileIcons,
    ShippersLoad,
} from '../../constants/icons'
import { Header } from '~/components/layout/header'
import { CustomTabBar } from './CustomTabBar'
import { FindLoadsScreen } from '../screen/FindLoadsScreen'
import { FindTrucksScreen } from '../screen/FindTrucksScreen'
import { ShippersLoadScreen } from '../screen/ShippersLoadScreen'
import ProfileScreen from '../screen/ProfileScreen'

const Tab = createBottomTabNavigator()

// Main Tab Navigation
export default function BottomTabs() {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    header: () => <Header />,
                }}
                tabBar={(props) => <CustomTabBar {...props} />}
            >
                {/* <Tab.Screen
          name="Post Loads"
          component={PostLoadsScreen}
          options={{
            tabBarIcon: ({ color, width, height }: any) => (
              <LoadsIcons width={width} height={height} color={color} />
            ),
          }}
        /> */}
                <Tab.Screen
                    name="Find Loads"
                    component={FindLoadsScreen}
                    options={{
                        tabBarIcon: ({ color, width, height }: any) => (
                            <FindLoadsIcon
                                width={width}
                                height={height}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Find Trucks"
                    component={FindTrucksScreen}
                    options={{
                        tabBarIcon: ({ color, width, height }: any) => (
                            <FindTrucks
                                width={width}
                                height={height}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Shippers Load"
                    component={ShippersLoadScreen}
                    options={{
                        tabBarIcon: ({ color, width, height }: any) => (
                            <ShippersLoad
                                width={width}
                                height={height}
                                color={color}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, width, height }: any) => (
                            <ProfileIcons
                                width={width}
                                height={height}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    )
}

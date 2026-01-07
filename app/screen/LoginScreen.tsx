import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Keyboard,
    TouchableWithoutFeedback,
    ImageBackground,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Login, Sigin, SigunUp } from '~/constants/icons'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '~/context/auth-context'
import Loading from '~/components/shared/loader'
import { useColorScheme } from '~/lib/useColorScheme'
import { useWindowDimensions } from 'react-native'

const loginSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(6),
})

const LoginScreen = () => {
    const [secureText, setSecureText] = useState(true)
    const [loading, setLoading] = useState(false)
    const { isDarkColorScheme: color } = useColorScheme()
    const [isFocused, setIsFocused] = useState(false)
    const { width } = useWindowDimensions()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    })

    const { setIsLogin } = useAuth()

    const onSubmit = (data: any) => {
        setLoading(true)
        Keyboard.dismiss()
        setTimeout(() => {
            setIsLogin(true)
            setLoading(false)
        }, 1000)
    }

    return (
        <TouchableWithoutFeedback
            className="flex-1 w-full h-full  justify-center items-center"
            onPress={Keyboard.dismiss}
        >
            <ImageBackground
                resizeMode="cover"
                source={
                    width > 500
                        ? require('../../assets/images/bg2.png')
                        : require('../../assets/images/bg.png')
                }
                className="flex-1 w-full h-full bg-[rgba(255,255,255,1)] bg-cover bg-no-repeat dark:bg-[#152833] justify-center items-center"
            >
                <View className="w-[500px] max-sm:w-[95%]  pt-7 dark:bg-[rgb(26,49,62)] bg-[rgb(255,255,255)] border-border1 border-[1px] p-6 rounded-2xl">
                    <View className="w-full flex-row items-center justify-center pb-5">
                        <Sigin
                            width={200}
                            height={20}
                            fill={color ? '#fff' : '#031E30'}
                        />
                    </View>

                    {/* Email input */}
                    <Text className="text-[14px] font-medium dark:text-slate-50 text-gray-700 mb-2">
                        Email
                    </Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                className="border border-border1 overflow-hidden outline-none  dark:text-slate-50  bg-[rgb(249,251,255)] dark:bg-btn dark:border-slate-500 focus:border-detailt  transition-all duration-300 p-3 rounded-xl h-14 text-[14px] mb-2"
                                value={value}
                                onChangeText={onChange}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                placeholder="Email"
                                placeholderTextColor={
                                    color ? '#e2e8f0' : '#374151'
                                }
                            />
                        )}
                    />
                    {errors.email && (
                        <Text className="text-red-500 text-xs">
                            {errors.email.message}
                        </Text>
                    )}

                    {/* Password input */}
                    <Text className="text-[14px] dark:text-slate-50 font-medium text-gray-700 mt-3 mb-2">
                        Password
                    </Text>
                    <View
                        className={`flex-row overflow-hidden items-center dark:bg-btn px-3 ${
                            isFocused
                                ? 'border-detailt dark:!border-detailt'
                                : ''
                        } transition-all duration-300 dark:border-slate-500 border border-border1 bg-[rgb(249,251,255)]  rounded-xl h-14 text-[14px] mb-2`}
                    >
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    className="flex-1 h-full outline-none  dark:text-slate-50  "
                                    secureTextEntry={secureText}
                                    value={value}
                                    onChangeText={onChange}
                                    placeholder="**********"
                                    placeholderTextColor={
                                        color ? '#e2e8f0' : '#374151'
                                    }
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                            )}
                        />
                        <TouchableOpacity
                            onPress={() => setSecureText(!secureText)}
                        >
                            <Ionicons
                                name={secureText ? 'eye-off' : 'eye'}
                                size={24}
                                className="!text-gray-700 dark:!text-slate-50"
                            />
                        </TouchableOpacity>
                    </View>
                    {errors.password && (
                        <Text className="text-red-500 text-xs">
                            {errors.password.message}
                        </Text>
                    )}

                    {/* Forgot password */}
                    <TouchableOpacity activeOpacity={0.7}>
                        <Text className="text-gray-700 dark:text-slate-300 underline font-semibold mb-4">
                            FORGOT YOUR PASSWORD?
                        </Text>
                    </TouchableOpacity>

                    {/* Login button */}
                    <TouchableOpacity
                        activeOpacity={0.9}
                        disabled={loading}
                        className="bg-[rgba(63,150,208,1)] disabled:!opacity-80 h-12 flex-row justify-center rounded-xl p-4 mt-2 items-center"
                        onPress={handleSubmit(onSubmit)}
                    >
                        {loading ? <Loading /> : <Login />}
                    </TouchableOpacity>

                    {/* Sign Up */}
                    <Text className="text-center text-[rgba(149,165,186,1)] my-3 pt-3">
                        DON'T HAVE AN ACCOUNT YET?
                    </Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="flex-row justify-center items-center"
                    >
                        <SigunUp />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen

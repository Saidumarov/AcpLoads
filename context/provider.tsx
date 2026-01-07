import React, { ReactNode } from 'react'
import Theme_Context from './theme-context'
import AuthProvider from './auth-context'

const Provider = ({ children }: { children: ReactNode }) => {
    return (
        <AuthProvider>
            <Theme_Context>{children}</Theme_Context>
        </AuthProvider>
    )
}

export default Provider

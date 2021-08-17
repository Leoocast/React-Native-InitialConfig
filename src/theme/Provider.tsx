import React from 'react'
import { View, Text } from 'react-native'
import theme from './theme'

export const ThemeContext = React.createContext(theme)

const ThemeProvider = ({children}) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider

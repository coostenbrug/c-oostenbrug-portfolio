import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../theme"

const GlobalStyle = createGlobalStyle({
    "body": {
        background: theme.colors.primary
    }
})

const wrapPage = WrappedComponent => () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <WrappedComponent/>
    </ThemeProvider>
)

export default wrapPage
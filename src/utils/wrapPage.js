import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../theme"

const fontImports = ["@import url('https://fonts.googleapis.com/css?family=Notable');"]

const GlobalStyle = createGlobalStyle({
    "body": {
        ...fontImports,
        background: theme.colors.primary,
        color: theme.colors.white,
        fontFamily: theme.fonts.base
    }
})

const wrapPage = WrappedComponent => () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <WrappedComponent/>
    </ThemeProvider>
)

export default wrapPage
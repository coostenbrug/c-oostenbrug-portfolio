import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../theme"
import { Header } from "../components"

const GlobalStyle = createGlobalStyle({
    "body": {
        background: theme.colors.primary,
        color: theme.colors.white,
        fontFamily: theme.fonts.base,
        margin: "0px"
    }
})

const wrapPage = WrappedComponent => () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <WrappedComponent/>
    </ThemeProvider>
)

export default wrapPage
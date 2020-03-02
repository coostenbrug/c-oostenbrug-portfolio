import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../theme"

const GlobalStyle = createGlobalStyle({
    "body": {
        background: theme.testColor
    }
})

const wrapPage = WrappedComponent => () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <WrappedComponent/>
    </ThemeProvider>
)

export default wrapPage
import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "../theme"
import { Header } from "../components"
import { Helmet } from "react-helmet"

const GlobalStyle = createGlobalStyle({
    "body": {
        background: theme.colors.primary,
        color: theme.colors.textColorPrimary,
        fontFamily: theme.fonts.base,
        margin: "0px"
    }
})

const wrapPage = WrappedComponent => () => (
    <ThemeProvider theme={theme}>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Christiaan Oostenbrug Portfolio</title>
            <link href="https://fonts.googleapis.com/css?family=Montserrat+Subrayada&display=swap" rel="stylesheet"/>
        </Helmet>
        <GlobalStyle/>
        <Header/>
        <WrappedComponent/>
    </ThemeProvider>
)

export default wrapPage
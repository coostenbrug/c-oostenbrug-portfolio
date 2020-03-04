import styled from "styled-components"
import React from "react"
import theme from "../theme"

const BoxLinkWrap = styled.a(({background})=>({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "8px",
    cursor: "pointer",
    textDecoration: "none",
    background,
    ":visited": {
        color: "inherit"
    }
}))

const BoxLinkTitle = styled.p({
    fontSize: "24px",
    margin: "8px auto",
    textAlign: "center"
})

const BoxLink = ({background, href, children, title}, props) => (
    <BoxLinkWrap background={background} href={href}>
        <BoxLinkTitle>ICON</BoxLinkTitle>
        <BoxLinkTitle>{title}</BoxLinkTitle>
        {children}
    </BoxLinkWrap>
)

BoxLink.defaultProps = {
    background: theme.colors.secondaryLight,
    title: "Project Title"
}

export default BoxLink
import styled from "styled-components"
import React from "react"
import theme from "../theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { darken } from "polished"

const BoxLinkWrap = styled.a(({background, theme})=>({
    flexGrow: 1,
    minWidth: "200px",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "32px 8px",
    cursor: "pointer",
    textDecoration: "none",
    background,
    ":visited": {
        color: "inherit"
    },
    outline: `3px solid ${darken(0.1,background)}`,
    outlineOffset: "-6px"
}))

const BoxLinkTitle = styled.p(({color})=>({
    color: color,
    fontSize: "24px",
    margin: "8px auto 16px auto",
    textAlign: "center"
}))

const IconWrapper = styled.div({
    margin: "0 auto"
})

const BoxLink = ({background, color, href, children, title, icon}, props) => (
    <BoxLinkWrap background={background} href={href}>
        <IconWrapper>
            <FontAwesomeIcon color={color} size="3x" icon={icon}/>
        </IconWrapper>
        <BoxLinkTitle color={color}>{title}</BoxLinkTitle>
        {children}
    </BoxLinkWrap>
)

BoxLink.defaultProps = {
    background: theme.colors.secondaryDark,
    color: theme.colors.textColorSecondary,
    icon: "coffee",
    title: "Project Title"
}

export default BoxLink
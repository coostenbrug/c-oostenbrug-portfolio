import styled from "styled-components"
import React from "react"
import theme from "../theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 

const BoxLinkWrap = styled.a(({background})=>({
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
    }
}))

const BoxLinkTitle = styled.p({
    fontSize: "24px",
    margin: "8px auto 16px auto",
    textAlign: "center"
})

const BoxLink = ({background, href, children, title}, props) => (
    <BoxLinkWrap background={background} href={href}>
        <FontAwesomeIcon icon={coffee}/>
        <BoxLinkTitle>{title}</BoxLinkTitle>
        {children}
    </BoxLinkWrap>
)

BoxLink.defaultProps = {
    background: theme.colors.secondaryLight,
    title: "Project Title"
}

export default BoxLink
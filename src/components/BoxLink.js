import styled from "styled-components"
import React from "react"
import theme from "../theme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { darken } from "polished"
import Tag from "./Tag"
import TagSet from "./TagSet"

export const BoxLinkWrap = styled.a(({background, theme})=>({
    flexGrow: 1,
    minWidth: "260px",
    display: "flex",
    flexDirection: "column",
    padding: "24px 16px",
    cursor: "pointer",
    textDecoration: "none",
    background,
    ":visited": {
        color: "inherit"
    },
    outline: `3px solid ${darken(0.1,background)}`,
    outlineOffset: "-6px",
    ":hover": {
        background: darken(0.08, background),
        outline: `3px solid ${darken(0.12,background)}`
    },
    ":focus:not(:active)": {
        outline: `3px solid ${theme.colors.lightBlue}`
    }
}))

const BoxLinkTitle = styled.p(({color})=>({
    margin: "auto 0",
    color: color,
    verticalAlign: "middle",
    fontSize: "24px",
    textAlign: "center",
}))

const IconWrapper = styled.div({
    margin: "0 auto"
})

const BoxLink = ({background, color, href, children, title, icon, tags}, props) => (
    <BoxLinkWrap background={background} href={href} {...props}>
        <IconWrapper>
            <FontAwesomeIcon color={color} size="4x" icon={icon}/>
        </IconWrapper>
        <div style={{height: "60px", display: "flex", justifyContent: "center"}}>
            <BoxLinkTitle color={color}>{title}</BoxLinkTitle>
        </div>
        <div style={{marginBottom: "16px",width: "100%", height: 2, background: darken(0.1,background)}}/>
        <div style={{margin: "auto"}}>
            <TagSet>
                {tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </TagSet>
        </div>
        {children}
    </BoxLinkWrap>
)

BoxLink.defaultProps = {
    background: theme.colors.secondaryDark,
    color: theme.colors.textColorSecondary,
    icon: "coffee",
    title: "Project Title",
    tags: []
}

export default BoxLink
import React from "react"
import styled from "styled-components"

const Logo = styled.a(({theme})=>({
    color: theme.colors.white,
    textDecoration: "none",
    fontSize: "30px", 
    margin: "0"
}))

const HeaderWrapper = styled.div({
    zIndex: 100,
    height: "56px",
    background: "rgba(0,0,0,0.8)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0
})

const HeaderInner = styled.div({
    display: "flex",
    alignItems: "center",
    height: "56px",
    margin: "0 auto",
    padding: "0 16px",
    maxWidth: "1200px"
})
const Header = props => (
    <HeaderWrapper>
        <HeaderInner>
            <Logo href="/">coostenbrug.ca</Logo>
        </HeaderInner>
    </HeaderWrapper>
)

export default Header
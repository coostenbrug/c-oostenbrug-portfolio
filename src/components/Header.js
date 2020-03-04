import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.div({
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
    maxWidth: "1200px"
})
const Header = props => (
    <HeaderWrapper>
        <HeaderInner>
            <p style={{fontSize: "30px", margin: "0"}}>coostenbrug.com</p>
        </HeaderInner>
    </HeaderWrapper>
)

export default Header
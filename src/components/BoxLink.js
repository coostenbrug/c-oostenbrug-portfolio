import styled from "styled-components"
import React from "react"

const BoxLinkWrap = styled.div(({background})=>({
    background
}))

const BoxLink = ({background, children}, props) => (
    <a>
        <BoxLinkWrap background={background}>
            <p>ICON</p>
            <p>Name</p>
            {children}
        </BoxLinkWrap>
    </a>
)

export default BoxLink
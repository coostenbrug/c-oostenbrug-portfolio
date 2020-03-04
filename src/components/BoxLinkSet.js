import styled from "styled-components"
import React from "react"

const BoxLinkSetInner = styled.div({
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "stretch",
    maxWidth: "1200px"
})

const BoxLinkSetOuter = styled.div({
    background: "rgba(0, 0, 0, 0.3)"
})

const BoxLinkSet = props => (
    <BoxLinkSetOuter>
        <BoxLinkSetInner {...props}/>
    </BoxLinkSetOuter>
)

export default BoxLinkSet
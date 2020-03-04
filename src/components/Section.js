import styled from "styled-components"
import React from "react"

const SectionHeader = styled.h1({
    textAlign: "center",
    background: "rgba(0,0,0,0.4)",
    padding: "16px 0",
    margin: 0
})


const SectionInner = styled.div(({mobilePadding})=>({
    margin: "0 auto",
    width: "100%",
    maxWidth: "1200px",
    padding: mobilePadding ? "0 16px" : "0"
}))

const Section = ({title, children, mobilePadding, ...props}) => (
    <>
        <SectionHeader {...props}>{title}</SectionHeader>
        <SectionInner mobilePadding={mobilePadding}>
            {children}
        </SectionInner>
    </>
)

Section.defaultProps = {
    mobilePadding: true,
    title: "Section Title"
}

export default Section
import styled from "styled-components"
import React from "react"

const SectionHeader = styled.h1(({theme})=>({
    fontFamily: theme.fonts.heading,
    fontWeight: 400,
    textAlign: "center",
    background: theme.colors.secondaryLight,
    color: theme.colors.white,
    padding: "16px 0",
    borderBottom: `solid 2px ${theme.colors.yellow}`,
    margin: 0
}))


const SectionInner = styled.div(({mobilePadding})=>({
    margin: "0 auto",
    width: mobilePadding ? "calc(100% - 32px)" : "100%",
    maxWidth: "1200px",
    padding: mobilePadding ? "48px 16px" : "48px 0"
}))

const ScrollAnchor = styled.div({
    position: "absolute",
    top: -56
})

const Section = ({title, children, mobilePadding, anchorId, ...props}) => (
    <div style={{position: "relative"}}>
        <SectionHeader {...props}>{title}</SectionHeader>
        <ScrollAnchor id={anchorId}/>
        <SectionInner mobilePadding={mobilePadding}>
            {children}
        </SectionInner>
    </div>
)

Section.defaultProps = {
    mobilePadding: true,
    title: "Section Title"
}

export default Section
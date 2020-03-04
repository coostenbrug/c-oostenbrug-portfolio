import styled from "styled-components"
import React from "react"

const SectionHeader = styled.h1({
    textAlign: "center"
})

const SectionWrapper = styled.div({
    marginBottom: "80px"
})

const Section = ({title, children, ...props}) => (
    <SectionWrapper {...props}>
        <SectionHeader>{title}</SectionHeader>
        {children}
    </SectionWrapper>
)

Section.defaultProps = {
    title: "Section Title"
}

export default Section
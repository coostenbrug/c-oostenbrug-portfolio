import styled from "styled-components"
import React from "react"

const SectionHeader = styled.h1({})

const Section = ({title, children, ...props}) => (
    <div {...props}>
        <SectionHeader>{title}</SectionHeader>
        {children}
    </div>
)

Section.defaultProps = {
    title: "Section Title"
}

export default Section
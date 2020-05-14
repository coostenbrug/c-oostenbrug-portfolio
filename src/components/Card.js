import styled from "styled-components"
import { darken } from "polished"
import theme from "../theme"
import React from "react"

const CardHeader = styled.div(({background}) => ({
    background: background,
    padding: "16px 32px 8px 32px",
    position: "relative",
    "::before": {
        content: "''",
        background: darken(0.1, background),
        position: "absolute",
        height: "3px",
        top: 3,
        left: 0,
        right: 0
    }
}))

CardHeader.defaultProps = {
    background: theme.colors.red
}

const CardBody = styled.div(({background}) => ({
    background: theme.colors.secondaryLight,
    padding: "4px 32px 8px 32px",
    fontSize: "15px",
    position: "relative",
    "::after": {
        content: "''",
        background: background,
        position: "absolute",
        height: "3px",
        bottom: 3,
        left: 0,
        right: 0
    }
}))

const Card = (props) => (
    <div style={props.style}>
        <CardHeader background={props.background}>
            {props.header}
        </CardHeader>
        <CardBody background={props.background}>
            {props.children}
        </CardBody>
    </div>
)

export default Card
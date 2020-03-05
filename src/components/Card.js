import styled from "styled-components"
import { darken } from "polished"
import theme from "../theme"

const Card = styled.div(({background}) => ({
    background: background,
    padding: "16px 8px",
    boxShadow: "0 -1px 1 #000",
    position: "relative",
    "::before": {
        content: "''",
        background: darken(0.1, background),
        position: "absolute",
        height: "3px",
        top: 3,
        left: 0,
        right: 0
    },
    "::after": {
        content: "''",
        background: darken(0.1, background),
        position: "absolute",
        height: "3px",
        bottom: 3,
        left: 0,
        right: 0
    }
}))

Card.defaultProps = {
    background: theme.colors.red
}

export default Card
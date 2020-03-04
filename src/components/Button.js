import styled from "styled-components"
import theme from "../theme"

const Button = styled.button(({color})=> ({
    "color": color,
    "borderColor": color
}),
({
    "padding": "6px 14px 6px 14px",
    "backgroundColor": "transparent",
    "borderRadius": "8px",
    "border": "2px solid",
    whiteSpace: "nowrap"
})
)

Button.defaultProps = {
    color: theme.colors.white
}

export default Button
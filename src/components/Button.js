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
    whiteSpace: "nowrap",
    fontSize: "16px"
})
)

Button.defaultProps = {
    color: theme.colors.textColorPrimary
}

export default Button
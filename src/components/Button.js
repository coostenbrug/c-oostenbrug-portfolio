import styled from "styled-components"

const Button = styled.button(({color})=> ({
    "color": color,
    "borderColor": color
}),
({
    "padding": "6px 14px 6px 14px",
    "backgroundColor": "transparent",
    "borderRadius": "8px",
    "border": "2px solid"
})
)

export default Button
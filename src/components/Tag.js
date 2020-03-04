import styled from "styled-components"
import theme from "../theme"

const Tag = styled.div(({color})=>({
    color: color,
    background: "transparent",
    fontSize: "14px",
    padding: "2px 8px",
    border: `${color} solid 2px`,
    borderRadius: "18px",
    whiteSpace: "nowrap"
}))

Tag.defaultProps = {
    color: theme.colors.secondaryLight
}

export default Tag
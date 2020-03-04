import styled from "styled-components"

const Tag = styled.div(({theme})=>({
    color: theme.colors.secondaryDark,
    background: "transparent",
    fontSize: "14px",
    padding: "2px 8px",
    border: `${theme.colors.secondaryDark} solid 2px`,
    borderRadius: "18px"
}))

export default Tag
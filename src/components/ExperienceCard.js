import React from "react"
import styled from "styled-components"
import Card from "./Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import theme from "../theme"

const ExperienceHeaderWrapper = styled.div({
    color: theme.colors.textColorSecondary,
    display: "flex",
    justifyContent: "space-between"
})

const CardTitle = styled.h2({
    fontSize: "24px",
    lineHeight: 1.5,
    margin: "2px 0"
})

const CompanyText = styled.p({
    fontSize: "16px",
    lineHeight: 1.5,
    margin: "2px 0"
})

const DateText = styled.p({
    textAlign: "right",
    fontSize: "16px",
    lineHeight: 1.5,
    margin: "10px 0"
})

const ExperienceList = styled.ul({
    color: theme.colors.textColorSecondary,
    paddingLeft: "16px",
    margin: "8px 0",
    lineHeight: 1.5
})

const ExperienceCard = ({background, icon, listItems, title, company, date, ...props}) => (
    <Card background={background} {...props}
        header={<ExperienceHeaderWrapper>
            <FontAwesomeIcon size="4x" icon={icon}/>
            <div style={{flexGrow: 1, marginLeft: "8px"}}>
                <CardTitle>{title}</CardTitle>
                <CompanyText>{company}</CompanyText>
            </div>
            <DateText>{date}</DateText>
        </ExperienceHeaderWrapper>}
        >
        <ExperienceList>
            {listItems.map(item => (
                <li key={item}>{item}</li>
            ))}
        </ExperienceList>
    </Card>
)

ExperienceCard.defaultProps = {
    icon: "coffee",
    listItems: ["Item 1 example.","Item 2 example.","Item 3 example."],
    title: "Job Title",
    date: "Aug 2019 - Present",
    company: "Company Name"
}

export default ExperienceCard
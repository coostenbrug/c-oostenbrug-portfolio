import React from "react"
import { ExperienceCard, Button, ButtonSet, BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { wrapPage } from "../utils"
import { importIcons, projectData, experienceData, educationData } from "../shared"
import theme from "../theme"

importIcons()

function scrollToElement(e) {
    var elmnt = document.getElementById(e.target.getAttribute("name"));
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

const LandingPage = () => (
    <>
        <div style={{height: "60vh", paddingTop: "40vh"}}>
            <h1 style={{color: theme.colors.yellow, fontWeight: "400", fontFamily: theme.fonts.heading, textAlign: "center", fontSize: "56px", margin: "0 0 32px 0"}}>Christiaan Oostenbrug</h1>
            <ButtonSet style={{marginTop: "16px"}}>
                <Button name={"aboutme"} onClick={scrollToElement}>About Me</Button>
                <Button name={"experience"} onClick={scrollToElement}>Experience</Button>
                <Button name={"projects"} onClick={scrollToElement}>Projects</Button>
                <Button name={"education"} onClick={scrollToElement}>Education</Button>
            </ButtonSet>
        </div>
        <Section title="About Me" anchorId="aboutme">
            <p style={{margin: "80px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Experience" anchorId="experience">
            {experienceData.map(experience => (
                <ExperienceCard key={experience.title} style={{marginBottom: "24px"}} {...experience}/>
            ))}
        </Section>
        <Section title="Projects" anchorId="projects">
            <BoxLinkSet>
                {projectData.map(projectLink => (
                    <BoxLink {...projectLink} key={projectLink.title}/>
                ))}
            </BoxLinkSet>
        </Section>
        <Section title="Education" anchorId="education">
            <ExperienceCard {...educationData}/>
        </Section>
    </>
)

export default wrapPage((LandingPage))

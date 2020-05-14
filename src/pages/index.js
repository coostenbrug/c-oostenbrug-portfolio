import React from "react"
import { ExperienceCard, Button, ButtonSet, BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import { importIcons, projectData, experienceData } from "../shared"
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
                <Button name={"skills"} onClick={scrollToElement}>Skills</Button>
                <Button name={"education"} onClick={scrollToElement}>Education</Button>
            </ButtonSet>
        </div>
        <Section title="About Me" anchorId="aboutme">
            <p style={{margin: "80px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Experience" anchorId="experience">
            <div style={{margin: "48px 0 48px 0"}}>
                {experienceData.map(experience => (
                    <ExperienceCard style={{marginBottom: "24px"}} {...experience}/>
                ))}
            </div>
        </Section>
        <Section title="Projects" anchorId="projects">
            <div style={{margin: "48px 0 48px 0"}}>
                <BoxLinkSet>
                    {projectData.map(projectLink => (
                        <BoxLink
                            title={projectLink.title}
                            key={projectLink.title}
                            background={projectLink.background}
                            href={projectLink.href}
                            icon={projectLink.icon}
                        >
                            <TagSet>
                            {projectLink.tags.map(tag => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                            </TagSet>
                        </BoxLink>
                    ))}
                </BoxLinkSet>
            </div>
        </Section>
        <Section title="Skills" anchorId="skills">
            <p style={{margin: "80px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Education" anchorId="education">
            <p style={{margin: "80px 0 500px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
    </>
)

export default wrapPage((LandingPage))

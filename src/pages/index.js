import React from "react"
import { Button, ButtonSet, BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import { importIcons, projectData } from "../shared"
import theme from "../theme"

importIcons()

function scrollToElement(e) {
    var elmnt = document.getElementById(e.target.getAttribute("name"));
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

const LandingPage = () => (
    <>
        <div style={{height: "60vh", paddingTop: "40vh"}}>
            <h1 style={{fontWeight: "400", fontFamily: theme.fonts.heading, textAlign: "center", fontSize: "56px", margin: "0 0 32px 0"}}>Christiaan Oostenbrug</h1>
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
            <p style={{margin: "80px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Projects" anchorId="projects" mobilePadding={false}>
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
        </Section>
        <Section title="Skills" anchorId="skills">
            <p style={{margin: "80px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Education" anchorId="education">
            <p style={{margin: "80px 0"}}>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
    </>
)

export default wrapPage(hiddenByComingSoon(LandingPage))

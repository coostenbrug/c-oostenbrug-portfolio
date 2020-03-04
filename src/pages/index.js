import React from "react"
import { Button, ButtonSet, BoxLinkSet, BoxLink, Tag, TagSet, Section } from "../components"
import { hiddenByComingSoon, wrapPage } from "../utils"
import { importIcons, projectData } from "../shared"

importIcons()

function scrollToElement(e) {
    var elmnt = document.getElementById(e.target.getAttribute("name"));
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

const LandingPage = () => (
    <>
        <div style={{margin: "300px 0"}}>
            <h1 style={{textAlign: "center", fontSize: "56px", margin: "0 0 32px 0"}}>Christiaan Oostenbrug</h1>
            <ButtonSet style={{marginTop: "16px"}}>
                <Button name={"aboutme"} onClick={scrollToElement}>About Me</Button>
                <Button name={"experience"} onClick={scrollToElement}>Experience</Button>
                <Button name={"projects"} onClick={scrollToElement}>Projects</Button>
                <Button name={"skills"} onClick={scrollToElement}>Skills</Button>
                <Button name={"education"} onClick={scrollToElement}>Education</Button>
            </ButtonSet>
        </div>
        <Section title="About Me" anchorId="aboutme">
            <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Experience" anchorId="experience">
        <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
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
        <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
        <Section title="Education" anchorId="education">
        <p>Filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text filler text</p>
        </Section>
    </>
)

export default wrapPage(hiddenByComingSoon(LandingPage))

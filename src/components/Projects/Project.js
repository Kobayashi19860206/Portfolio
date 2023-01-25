import React from "react";

import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover.svg";
import ProjectItem from "./ProjectItem";
import Data from "../Data";
import Button from "../UI/Button";

const Projects = (props) => {
    let projects=Data.DUMMY_PROJECTS;
    return (
        <React.Fragment>
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="" />
                </section>
                <section className={styles.projectHeader}>
                    <h1>Projects</h1>
                    <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, harum! Et quibusdam, in exercitationem optio enim harum aliquid dolorum. Laudantium.</div>
                </section>
            </div>
            <div className={styles.projectList}>
                {projects.map((item)=>{
                    return <ProjectItem key={item.id} project={item} />
                })}
            </div>
            <div className={styles.moreProject}>
                <Button className={styles.moreProjectBtn}>More Projects</Button>
            </div>
        </React.Fragment>
    )
};

export default Projects;
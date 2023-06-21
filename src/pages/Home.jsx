import Nav from "../component/navBarF/navbar";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Main from "../component/Main/main";
import Work from "../component/skills/work";
import Project from "../component/projects/project";
import Contact from "../component/contact/contact";

let Home = () => {
    return (
        <>
            <Nav />
            <Main/>
            <Work />
            <Project />
            <Contact/>
        </>
    )
}
export default Home;
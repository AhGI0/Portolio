import Nav from "../component/navBarF/navbar";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import Main from "../component/Main/main";
import Work from "../component/work/work";
import Project from "../component/projects/project";

let Home = () => {
    return (
        <>
            <Nav />
            <Main/>
            <Work />
            <Project/>
        </>
    )
}
export default Home;
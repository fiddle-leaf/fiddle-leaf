import { useState } from "react";
import Links from "./Links";


export default function Navigation (props) {

    const links = [
        {name: "Home", href:'#', key: 1},
        {name: "About", href:'/about', key: 2},
        {name: "Github", href:'https://github.com/fiddle-leaf', key: 3},
        {name: "Linkden", href:'https://www.linkedin.com/in/shanonps/', key: 4}
    ]

    return (
        <nav>
            <ul>
            {links.map( link => {
                return <Links aboutMe={props.aboutMe} setAboutMe={props.setAboutMe} link={link} key={link.key}/>
            })}
            </ul>
        </nav>
    )
}
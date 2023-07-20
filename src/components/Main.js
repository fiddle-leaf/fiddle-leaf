import About from "./About";
import Projects from "./Projects";

export default function Main (props) {

    return ( 
        <main className="page">
            < About aboutMe={props.aboutMe} />
            < Projects />
        </main>
     );
}
import Intro from "./Intro";
import Navigation from "./Navigation";
import PageTitle from "./PageTitle";

export default function Header (props) {
    const pageTitle = {title: "Welcome to my Page."}

    return ( 
        <header>
            <PageTitle title={pageTitle}/>
            < Intro />
            <Navigation aboutMe={props.aboutMe} setAboutMe={props.setAboutMe} />
        </header>
     );
}


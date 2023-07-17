import Intro from "./Intro";
import Navigation from "./Navigation";
import PageTitle from "./PageTitle";

export default function Header () {
    const pageTitle = {title: "Welcome to my Page."}

    return ( 
        <header>
            <PageTitle title={pageTitle}/>
            < Intro />
            <Navigation/>
        </header>
     );
}


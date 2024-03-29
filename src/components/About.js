export default function About (props) {

    const aboutMeEl = () => {
        return (
            <>
            <h4>About Me</h4>
            <aside className="about">
                <div className="icon">
                    <img src="https://i.imgur.com/IGc0i1o.gif" alt=""></img>
                </div>
                <ul className="about-list">
                    <li>
                        <mark id="dev-name">&nbsp;Shanon,&nbsp;</mark> 26 year-old Plant Mom.
                        </li>
                    <li>Summertime Venusian girly.</li>
                    <li>2/2 member of twins.</li>
                    <li>Missing my hometown Lima every single day.</li>
                    <li>Follow me on my journey with UI Design.</li>
                </ul>
        </aside>
        </>
        )
    }
    return props.aboutMe ? aboutMeEl() : false;
}

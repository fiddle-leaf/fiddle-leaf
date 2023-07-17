import Post from "./Post";

export default function Projects () {
    const githubSrc = 'https://github.com/fiddle-leaf/';

    const projectsList = [
        {title: "fashion-blog", 
        href: githubSrc,
        id: 1},
        {title: "coding-exercises",
        href: githubSrc,
        id: 2},
        {title: "DOM_project",
        href: githubSrc,
        id: 3},
        {title: "Selunaar-UI",
        href: githubSrc,
        id: 4}
    ]
    return ( 
        <section className="projects">
            <h2>Projects on Github</h2>
            {projectsList.map(project =>{
                return < Post project={project}/>
            })}
        </section>
     );
}
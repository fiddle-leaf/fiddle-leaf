export default function Post (props) {
    return ( 
        <article className="post">
            <h3>
                <a href={props.project.href+props.project.title}
                alt={props.project.title}>{props.project.title}</a>
            </h3>
        </article>
     );
}
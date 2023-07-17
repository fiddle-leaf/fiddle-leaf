export default function Links (props) {
    return ( 
        <li>
            <a href={props.link.href}
            alt="">{props.link.name}</a>
        </li>
     );
}
export default function Links ({aboutMe, setAboutMe, link}) {

    const handleClick = (e) => {
        if (e.target.textContent.toLowerCase() === "about") {
            e.preventDefault();
            setAboutMe(!aboutMe);
            console.log(aboutMe);
        }
    }
    return ( 
        <li>
            <a href={link.href} alt={link.name} onClick={handleClick}>{link.name}</a>
        </li>
     );
}
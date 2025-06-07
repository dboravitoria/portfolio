
export default function Icone({link, nameButton, children}){

    return(
        <>
            <a href={link} 
            title={nameButton}
            target="_blank"
            rel="noopener noreferrer">
                {children}
            </a>
        </>
    );
}
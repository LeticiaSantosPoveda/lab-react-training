function Greetings(props){
    let saludo = "";

    if (props.lang === "de") saludo = "Hallo"
    else if (props.lang === "en") saludo = "Hello"
    else if (props.lang === "es") saludo ="Hola"
    else if (props.lang === "fr") saludo = "Bonjour"

    return(
       <div className="saludo">
        <p> {saludo + " " + props.children} </p>
       </div> 
    )
}

export default Greetings;
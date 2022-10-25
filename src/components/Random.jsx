function Random(props){

    let randNum =  props.min + Math.floor(Math.random() * (props.max-props.min));

    return(
        <div className="randomNum">
            <p>Random value between {props.min} and {props.max} = {randNum}</p>
        </div>
    )
}

export default Random;
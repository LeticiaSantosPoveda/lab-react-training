function BoxColor(props){

    const {r, g, b} = props;
    
    const divStyle = {
        backgroundColor: `rgb(${r}, ${g}, ${b}`
    }


    return(
        <div className="rGb" style={divStyle}>
            {r} {g} {b}
        </div>
    )
}

export default BoxColor;
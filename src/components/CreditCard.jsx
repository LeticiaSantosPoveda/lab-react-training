function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    const stylesCard = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: "300px",
        borderRadius: "10px",
        margin: "20px",
        padding: "20px"
    }


    return(
        <div style={stylesCard}>
            <p>{type}</p>
            <p>************{number.slice(12, 16)}</p>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard;
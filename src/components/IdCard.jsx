function IdCard({user}){
    const {lastName, firstName, gender, height, birth, picture} = user

    return(
        <div>
            <div className="user">
                <img className="imgUser" src={picture} alt=""/>
                <div className="content">
                    <p><strong>Last name:</strong> {lastName}</p>
                    <p><strong>Firs name:</strong> {firstName}</p>
                    <p><strong>Gender:</strong>  {gender}</p>
                    <p><strong>Height:</strong> {height}</p>
                    <p><strong>Birth:</strong> {birth.toString().slice(0,16)}</p>
                </div>
            </div>
        </div>
    )
}

export default IdCard;
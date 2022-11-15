function Cards(props) {
    
    const {cardData, onDelete} = props;
    
    

    return (
    <div className="Card-display">
        <div id="Card-box" className="Card-box">
            <div className="Image-profile">
                <img className="User-foto" src={cardData.imageUrl}/>
            </div>
            <div className="User-title">
                <h1 className="User-name">{cardData.firstName} {cardData.lastName}</h1>
                <h2 className="User-role">{cardData.role}</h2>
            </div>
            <div className="User-info">
                <h2 className="User-status">{cardData.status}</h2>
                <h2 className="User-mode">{cardData.mode}</h2>
                <h2 className="User-age">Date of Birth:</h2>
                <h2 className="User-birth">{cardData.dateOfBirth}</h2>
            </div>
        </div>
        <button className="Edit-delete-button">Editar</button>
        <button 
            className="Edit-delete-button" 
            onClick={() => onDelete(cardData.firstName)}>Deletar
        </button>
    </div>
    );
}

export default Cards;
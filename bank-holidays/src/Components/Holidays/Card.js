const Card = ({ data }) => {
    return (
        <div className="border d-flex flex-column mb-2">
            <div className="d-flex justify-content-between m-2">
                <span>{data.title}</span>
                <span>{new Date(data.date).toDateString()}</span>
            </div>
            <div className="d-flex justify-content-between m-2">
                <span><strong>Notes:</strong> {data.notes}</span>
                <span>Bunting: <strong>{data.bunting ? 'True' : 'False'}</strong></span>
            </div>
        </div>
    )
}

export default Card;
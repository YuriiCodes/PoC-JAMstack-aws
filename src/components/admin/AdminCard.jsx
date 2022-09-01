export function AdminCard(props) {
    return (
        <div className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.email} -- {props.phone}</h6>
                <p className="card-text">{props.message}</p>
                <a href="#" className="card-link">Card link</a>
            </div>
        </div>
    )
}
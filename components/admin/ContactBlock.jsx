export function ContactBlock(props) {
    console.log(props)
    return (
        <div className="card p-2 bg-white" style={{width: '30%', margin: '1.5%'}}>
            <div style={{minHeight: '300px', margin: 'auto', paddingTop: 'auto', paddingBottom: 'auto'}}>
                <img src={props.data.image || ""} className={"card-img-top"} alt="..." style={{
                    height: 'auto',
                    width: 'auto',
                    maxWidth: '300px',
                    maxHeight: '300px',
                    margin: 'auto',
                }}/>
            </div>
            <div className="card-body text-center">
                <h5 className="card-title">Client name: {props.data.name || "username"}</h5>
                <p className="card-text">Client email: {props.data.email || ""}</p>
                <p className="card-text">Client phone: {props.data.phone || ""}</p>
                <p className="card-text">Message: {props.data.message || ""}</p>
            </div>
        </div>
    )
}
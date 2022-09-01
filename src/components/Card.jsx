export function Card(props) {
    return (
        <div className="card p-5 bg-white">
            <img src={props.data.url || ""} className={"card-img-top"} alt="..." style={{
                width: '100%',
                height: '200px',
            }}/>
            <div className="card-body text-center">
                <h5 className="card-title">{props.data.title || "Title"}</h5>
                <p className="card-text">Alice is a freelance web designer and developer based in London. She is
                    specialized in HTML5, CSS3, JavaScript, Bootstrap, etc.</p>
                <a href="#" className="btn btn-primary">{props.data.CTA || "Click me"}</a>
            </div>
        </div>
    )
}
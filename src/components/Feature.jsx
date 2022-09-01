export function Feature(props) {
    return (
        <div className="feature col">
            <div
                className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                <svg className="bi" width="1em" height="1em">
                    <use xlinkHref="#collection"></use>
                </svg>
            </div>
            <h4>{props.title || "title"}</h4>

            <p>{ props.text || "Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence   and probably just keep going until we run out of words."}</p>
            <a href={props.link || "#contact-form"} className="icon-link d-inline-flex align-items-center">
                {props.cta || "CLick me"}
                <svg className="bi bi-percent" width="1em" height="1em">
                    <use xlinkHref="#chevron-right"></use>
                </svg>
            </a>
        </div>
    )
}
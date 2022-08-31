import {Card} from "./Card";

export function CardGroup(props) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
            <div className="col">
                <Card />
            </div>
        </div>
    )
}
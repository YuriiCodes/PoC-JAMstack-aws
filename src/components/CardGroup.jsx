import {Card} from "./Card";

const LENOVO_DATA = {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png",
    title: "Lenovo",
    CTA: "Buy lenovo",
    about: "Lenovo is great laptop.",
}
const HP_DATA = {
    url: "https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg",
    title: "HP",
    CTA: "Buy Hewlett Packard",
    about: "Hp is great laptop.",
}
const ACER_DATA = {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Logo_Acer.png/1280px-Logo_Acer.png",
    title: "Acer",
    CTA: "Buy Acer",
    about: "Acer is great laptop."
}
const ASUS_DATA = {
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AsusTek-black-logo.png/800px-AsusTek-black-logo.png",
    title: "ASUS",
    CTA: "Buy Asus",
    about: "Asus is great laptop."
}
// An array of every laptop manufacturer
const brands = [LENOVO_DATA, HP_DATA, ACER_DATA, ASUS_DATA];

export function CardGroup(props) {
    return (
        <div className="my-5" id="brands">
            <h2 className="text-center text-lg-center">Brands we sell</h2>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-3 mb-5">
                {brands.map((brand, index) => {
                    return (
                        <div key={index} className="col">
                            <Card key={index} data={brand}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
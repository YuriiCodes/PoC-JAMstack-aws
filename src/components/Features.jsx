import {Feature} from "./Feature";

export function Features(props) {
    return (
        <div className="my-4 shadow-lg" id="whyus">

            <h2 className="text-center mt-5 pt-5">Why us ?</h2>

            <div className="px-5 g-4 pb-5 row row-cols-1 row-cols-lg-3">
                <Feature title="Student discounts" link="#contact-form" cta="Fill in studentID" emoji="🤑"/>
                <Feature title="Friendly managers" link="#contact-form" cta="Give them a call" emoji="☎️"/>
                <Feature title="The world's best brands" link="#contact-form" cta="Explore products" emoji="🛒"/>
            </div>
        </div>
    )
}
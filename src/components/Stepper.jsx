export function Stepper(props) {
    return (
        <div className="stepper d-flex flex-column mt-5 ml-5 mt-5 justify-content-center mx-auto border-end" >
            <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center p-2">
                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                    <div className="line h-100"></div>
                </div>
                <div>
                    <h5 className="text-dark">Choose your favourite laptop</h5>
                    <p className="lead text-muted pb-3">Choose your favourite laptop brand and model</p>
                </div>
            </div>
            <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center p-2">
                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                    <div className="line h-100"></div>
                </div>
                <div>
                    <h5 className="text-dark">Fill in our form</h5>
                    <p className="lead text-muted pb-3">Enter your contact information along with your favourite laptop
                    </p>
                </div>
            </div>
            <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center p-2">
                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                    <div className="line h-100 d-none"></div>
                </div>
                <div > 
                    <h5 className="text-dark">Enjoy!</h5>
                    <p className="lead text-muted pb-3">Enjoy a modern quality laptop</p>
                </div>
            </div>
        </div>
    )
}
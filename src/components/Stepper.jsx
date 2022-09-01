export function Stepper(props) {
    return (
        <div className="stepper d-flex flex-column mt-5 ml-5 mt-5 justify-content-center mx-auto border-end" >
            <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">1</div>
                    <div className="line h-100"></div>
                </div>
                <div>
                    <h5 className="text-dark">Create your application respository</h5>
                    <p className="lead text-muted pb-3">Choose your website name & create repository</p>
                </div>
            </div>
            <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">2</div>
                    <div className="line h-100"></div>
                </div>
                <div>
                    <h5 className="text-dark">Clone application respository</h5>
                    <p className="lead text-muted pb-3">Go to your dashboard and clone Git respository from the url in
                        the dashboard of your application</p>
                </div>
            </div>
            <div className="d-flex mb-1">
                <div className="d-flex flex-column pr-4 align-items-center">
                    <div className="rounded-circle py-2 px-3 bg-primary text-white mb-1">3</div>
                    <div className="line h-100 d-none"></div>
                </div>
                <div>
                    <h5 className="text-dark">Make changes and push!</h5>
                    <p className="lead text-muted pb-3">Now make changes to your application source code, test it then
                        commit &amp; push</p>
                </div>
            </div>
        </div>
    )
}
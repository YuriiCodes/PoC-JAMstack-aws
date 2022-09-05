export function Map(props) {
    return (
        <div className="mapouter" style={{
            position: 'relative',
            textAlign: 'right',
            height: '500px',
            width: '100%',
        }} id="map">
            <h3 className="text-center mt-5 mb-3"> Where you can find us?</h3>
            <div className="gmap_canvas">
                <iframe width="1080" height="500" id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" style={{
                    overflow: 'hidden',
                    background: 'none!important',
                    height: '500px',
                    width: '100%',
                }}></iframe>
            </div>
        </div>
    )
}
import React from 'react'
import '../Styles/Size.css'

function Size() {
    return (
        <div>
            <div className="page3">
                <div className="size">
                    <h1>Choose By Shape</h1>
                    <div className="image-cont3">
                        <div className="image1"><img
                            src="https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/T/F/TF1121WFM1V_1_lar.jpg" /><button
                                type="button">Cat Eye</button></div>
                        <div className="image1" id="image2"><img
                            src="https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/T/A/TA00119UFA2MBRV_1_lar.jpg"
                            alt="" /><button type="button">Rectangle</button></div>
                        <div className="image1"><img
                            src="https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/T/C/TC1057UFP2SBRV_1_lar_1.jpg"
                            alt="" /><button type="button">Aviator</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}export default Size;
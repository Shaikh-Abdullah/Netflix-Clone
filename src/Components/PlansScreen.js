import React from 'react'
import './PlansScreen.css'

function PlansScreen() {

    return (
        <div className='plansScreen__plan'>
            <div className="plansScreen__info">
                <h5>Premium</h5>
                <h6>4K + HDR</h6>
            </div>
            <button>Subscribe</button>
            <div className="plansScreen__info">
                <h5>Standard</h5>
                <h6>1080p</h6>
            </div>
            <button>Subscribe</button>
            <div className="plansScreen__info">
                <h5>Basic</h5>
                <h6>720p</h6>
            </div>
            <button>Subscribe</button>
        </div>
    )
}

export default PlansScreen



import * as React from 'react'



import Phone from '../../svgComponents/phone';

const NavBarPhone = () => {
    return (
        <div className="">
            <a className="d-flex flex-row text-decoration-none"  href="tel:0744312032">

                <Phone  />
                <div className="white text-align-center d-flex align-items-center flex-md-column">
                    <p className="font-weight-bold white text-align-center">0744312032 </p>
                    <p className="white text-align-center small "> Sunati Acum</p>
                </div>
            </a>

        </div>

    )
}

export default NavBarPhone
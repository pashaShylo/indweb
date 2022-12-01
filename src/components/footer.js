import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CallIcon from '@mui/icons-material/Call';

function footer(){
    return (
        <div className="footer">
            <div className="footer__content _container">
                <a href="#" className='footer__content__item'><TwitterIcon style={{ color: 'white', fontSize: '50px' }} /></a>
                <a href="#" className='footer__content__item'><FacebookIcon style={{ color: 'white', fontSize: '50px' }}/></a>
                <a href="#" className='footer__content__item'><CallIcon style={{ color: 'white', fontSize: '50px' }}/></a>
            </div>
            <p>
                Copyright © 2022 My Swamp Medical Co-op Ltd. - All Rights Reserved.
            </p>
        </div>
    )
}

export default footer;
import React from 'react';
import {MdOutlineAlternateEmail} from 'react-icons/md';
import {BsTwitter} from 'react-icons/bs';
import {BiDonateHeart} from 'react-icons/bi';
import {RiFeedbackFill} from 'react-icons/ri';


const Menu = () =>{
    return(
        <div className="popUp">
            <div className="icons">
                    <div className="link-icon">
                        <MdOutlineAlternateEmail/>
                        </div>
                    <div className="link-icon">
                        <BsTwitter/>
                        </div>
                    <div className="link-icon">
                        <BiDonateHeart/>
                        </div>
                    <div className="link-icon">
                        <RiFeedbackFill/>
                        </div>
                </div>
            </div>
    )
};

export default Menu;
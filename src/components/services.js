import React from "react";
import corner from "../images/corner.png"
import bingChilling from "../images/bingChilling.png"
import blackface from "../images/blackface.png"
import fallen from "../images/fallen.png"
import diva from "../images/diva.png"
import divas from "../images/divas.png"
import twogirls from "../images/twogirls.png"
import massage from "../images/massage.png"
import mask from "../images/mask.png"

function services() {
    return (
        <div className="services">
            <div className="services__top _container">
                <img src={corner} className="services__top__corner_left"/>
                <h1 className="services__top__title">Our services</h1>
                <img src={corner} className="services__top__corner_right"/>
            </div>
            <div className="services__list">
                <p className="services__list__title">We give you the opportunity to choose the dirt yourself:</p>
                <ul className="services__list__list">
                    <li className="services__list__list__item">Peat mud – characterized by a high content of active organic substances;</li>
                    <li className="services__list__list__item">Silt sulfide muds are silt parts of salt reservoirs in their composition;</li>
                    <li className="services__list__list__item">Mineral components predominate over organic substances;</li>
                    <li className="services__list__list__item">Hydrothermal mud is mined in volcanic areas;</li>
                </ul>
                <img src={bingChilling} className="services__list__img"/>
            </div>
            <div className="services__middle">
                <div className="services__middle__content _container">
                    <h1 className="services__middle__title">Mud is Great!</h1>
                    <div className="services__middle__list">
                        <div className="first_block">
                            <div className="services__middle__list__item"><img src={blackface} className="services__middle__list__item__img"/>
                                <p>Lie down in the mud pool; Breathe fresh air;
                                Enjoy beautiful mountains!</p>
                            </div>
                            <div className="services__middle__list__item"><img src={fallen} className="services__middle__list__item__img"/>
                                <p>Who said that treatment can’t be fun?</p>
                            </div>
                        </div>
                        <div className="second_block">
                            <div className="services__middle__list__item"><img src={diva} className="services__middle__list__item__img"/>
                                <p>You can apply it anywhere you want!</p>
                            </div>
                            <div className="services__middle__list__item"><img src={divas} className="services__middle__list__item__img"/>
                                <p>Bring your frends : more fun together!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services__footer _container">
                <h1 className="services__footer__title">We offer:</h1>
                <ul className="services__footer__list">
                    <li className="services__footer__list__item">
                        <img src={twogirls} className="services__footer__list__item__img"/>
                        <p>Mud Bath & Spa</p>
                    </li>
                    <li className="services__footer__list__item">
                        <img src={massage} className="services__footer__list__item__img"/>
                        <p>Total Body Mud Treatment</p>
                    </li>
                    <li className="services__footer__list__item">
                        <img src={mask} className="services__footer__list__item__img"/>
                        <p>Mud Masks</p>
                    </li>
                </ul>
            </div>
            <div className="services__bottom _container">
                <img src={corner} className="services__bottom__corner_left"/>
                <img src={corner} className="services__bottom__corner_right"/>
            </div>
        </div>
    )
}

export default services;
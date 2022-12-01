import React from "react";
import '../styles/styles.scss';
import corner from "../images/corner.png"
import shrekHouse from "../images/shrekHouse.jpeg"
import shrekPazzle from "../images/shrekPazzle.jpeg"
import shrekWindows from "../images/shrekWindows.png"

function main(){
    return(
        <div className="main">
            <div className="main__top _container">
                <img src={corner} className="main__top__corner_left"/>
                <h1 className="main__top__title">Das ist mein Boloto</h1>
                <img src={corner} className="main__top__corner_right"/>
            </div>
            <img src={shrekHouse} className="main__shrek_house"/>
            <div className="main__medicial_center">
                <div className="main__medicial_center__content _container">
                    <div className="main__medicial_center__content__left">
                        <img src={shrekPazzle} />
                    </div>
                    <div className="main__medicial_center__content__right">
                        <div className="main__medicial_center__content__right_div">
                            <h2 className="main__medicial_center__content__right__title">Welcome to the Medical Center</h2>
                            <h1 className="main__medicial_center__content__right__name">Tse Moie Boloto</h1>
                            <p className="main__medicial_center__content__right__paragraph">
                            We are one of the most modern private medical facilities in Poland. 
                            The beginnings of the company’s activity date back to 2003. Since 2013, 
                            we have started operating in a new location, just off the southern outskirts of Kharkiv. 
                            Our staff  is a team of experienced specialist doctors with many years of clinical practice, 
                            in part who are the head of hospital wards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={shrekWindows} className="main__shrek_windows"/>
            <div className="main__bottom _container">
                <img src={corner} className="main__bottom__corner_left"/>
                <h1 className="main__bottom__title">1 swamp bath a year makes cancer dissapear!</h1>
                <img src={corner} className="main__bottom__corner_right"/>
            </div>
        </div>
    )
}

export default main;
import React from "react";
import corner from "../images/corner.png"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import shrek from "../images/shrek.png";

function reviews() {
    return (
        <div className="reviews _container">
             <div className="reviews__top">
                <img src={corner} className="reviews__top__corner_left"/>
                <h1 className="reviews__top__title">Feedback from our regular customers</h1>
                <img src={corner} className="reviews__top__corner_right"/>
            </div>
            <img src={shrek} className="reviews__shrek2"/>
            <div className="reviews__review1">
                <img src={img1} className="reviews__review__img"/>
                <div className="reviews__review__text">
                    <h1 className="reviews__review__text__title">Ryan Gosling</h1>
                    <p className="reviews__review__text__paragraph">After hard working days, it will be pleasant to return to this legendary place with the family and have a great time in fresh mud</p>
                    <ThumbUpIcon style={{ fontSize: '70px', color: 'green'}}/>
                </div>
            </div>
            <img src={shrek} className="reviews__shrek1"/>
            <div className="reviews__review2">
                <img src={img2} className="reviews__review__img"/>
                <div className="reviews__review__text">
                    <h1 className="reviews__review__text__title">Ganna Vudovice</h1>
                    <p className="reviews__review__text__paragraph">Unique mud wraps help me keep my youthful beauty and feel like I was 12</p>
                    <ThumbUpIcon style={{ fontSize: '70px', color: 'green' }}/>
                </div>
            </div>
            <img src={shrek} className="reviews__shrek2"/>
            <div className="reviews__review3">
                <img src={img3} className="reviews__review__img"/>
                <div className="reviews__review__text">
                    <h1 className="reviews__review__text__title">Afanasiy Jokowych</h1>
                    <p className="reviews__review__text__paragraph">I love this place, I like to come back after skiing and have a cup of tea in this beautiful place, the atmosphere is incredible. Mud bath warms well and removes muscle spasm.</p>
                    <ThumbUpIcon style={{ fontSize: '70px', color: 'green' }}/>
                </div>
            </div>
            <img src={shrek} className="reviews__shrek1"/>
            <div className="reviews__review4">
                <img src={img4} className="reviews__review__img"/>
                <div className="reviews__review__text">
                    <h1 className="reviews__review__text__title">Lena Golovach</h1>
                    <p className="reviews__review__text__paragraph">This swamp is amazing but after the special properties of this mud, my skin color has become darker and now I love rap and KFC.</p>
                    <ThumbDownIcon style={{ fontSize: '70px', color: 'red' }}/>
                </div>
            </div>

            <div className="reviews__bottom">
                <img src={corner} className="reviews__bottom__corner_left"/>
                <img src={corner} className="reviews__bottom__corner_right"/>
            </div>
        </div>
    )
}

export default reviews;
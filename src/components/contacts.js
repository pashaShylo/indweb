import React, {useState} from "react";
import corner from "../images/corner.png"
import mapStyles from "../db/mapStyles";
import { GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import marker from "../images/marker.png"
import CallIcon from '@mui/icons-material/Call';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import RateReviewIcon from '@mui/icons-material/RateReview';
import { Link } from "react-router-dom";

const options = {
    styles: mapStyles,
    streetViewControl: false,
    scaleControl: false,
    mapTypeControl: false, 
    myLocationButtonEnabled: false, 
    zoomControl: false, 
    fullscreenControl: false
}
const center = {
    lat: 50.503861640451014, 
    lng: 30.44515382883499,
}
const markers = [
    {
        lat: 50.503861640451014,
        lng: 30.44515382883499,
        phone: "(097) 555-55-55",
        src: marker,
        name: `ЦЕ МОЄ БОЛОТО`,
    }
]
function contacts() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDVK67g4f9tzBNimho_djQZkra8WImHc3Q"
    })

    const [selected, setSelected] = useState(null)
    
    if(!isLoaded) return (
        <div>
           <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>
    )

    return (
        <div className="contacts _container">
             <div className="contacts__top _container">
                <img src={corner} className="contacts__top__corner_left"/>
                <h1 className="contacts__top__title">Where can you find us:</h1>
                <img src={corner} className="contacts__top__corner_right"/>
            </div>
            <GoogleMap
                mapContainerClassName="contacts__map" 
                options={options}
                zoom={14} center={center}
            >
                {markers.map((marker, index)=>(
                    <Marker
                        key={index}
                        position={{lat: marker.lat, lng: marker.lng}}
                        icon = {{
                            url: marker.src,
                            scaledSize: new window.google.maps.Size(50, 50),
                            origin: new window.google.maps.Point(0, 0),
                            anchor: new window.google.maps.Point(25, 5)
                        }}
                        onClick = {()=> setSelected(marker)}
                    />))}
                {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}} onCloseClick= {()=>setSelected(null)}>
                    <div className="dealers__info">
                        <h4>{selected.name}</h4>
                        <br/>
                        <p>{selected.phone}</p>
                    </div>
                </InfoWindow>)   : null }
            </GoogleMap>
            <h1 className="contacts__title">CONTACTS:</h1>
            <div className="contacts__block">
                <ul className="contacts__block__list">
                    <li className="contacts__block__list__item">
                        <CallIcon style={{ fontSize: '100px' }}/>
                        <div>
                            <p className="contacts__block__list__item__top">Give us a call:</p>
                            <p className="contacts__block__list__item__bottom">+380 555 55 55</p>
                        </div>
                    </li>
                    <li className="contacts__block__list__item">
                        <RateReviewIcon style={{ fontSize: '100px' }}/>
                        <div>
                            <p className="contacts__block__list__item__top">Leave feedback</p>
                            <p className="contacts__block__list__item__bottom">
                                <Link to="/reviews">here</Link>
                            </p>
                        </div>
                    </li>
                    <li className="contacts__block__list__item">
                        <AlternateEmailIcon style={{ fontSize: '100px' }}/>
                        <div>
                            <p className="contacts__block__list__item__top">Send us an email:</p>
                            <p className="contacts__block__list__item__bottom">swamp@shrek.com</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="contacts__bottom">
                <img src={corner} className="contacts__bottom__corner_left"/>
                <img src={corner} className="contacts__bottom__corner_right"/>
            </div>
        </div>
    )
}

export default contacts;
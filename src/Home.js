import React from 'react';
import './Home.css';
import Hero from './hero.jpg';
import Product from './Product';
import ImgRope from './rope.jpg';
import ImgBaby from './baby.jpg';
import ImgBand from './bandaid.jpg';
import ImgCinta from './cinta.jpg';
import Imgflash from './flahlight.jpg';
import ImgOther from './ñocl.jpg';
import ImgReloj from './reloj.jpg';
import ImgSec from './security.jpg';
import ImgSpeak from './speaker.jpg';
import ImgTV from './tv.jpg';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img class="home__image" src={Hero} alt="Hero"/>
                
                <div className="home__row">
                    <Product id="34978612" title='Skipping Rope with Ball Bearings and 6” Memory Foam Handles Ideal for Aerobic Exercise Like Speed Training and Endurance Training' price={16.99} image={ImgRope} rating={5} />

                    <Product id="17868478" title='Waterproof Shower Bluetooth Speaker, Portable Wireless Outdoor Speaker with HD Sound, Support TF Card and Suction Cup' price={49.99} image={ImgSpeak} rating={4}/>
                    
                    <Product id="54457318" title='Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)' price={204.99} image={ImgReloj} rating={2}/>

                    <Product id="17897318" title='UV Flashlight Black Light , Vansky 51 LED Blacklight Pet Urine Detector for Dog/Cat Urine,Dry Stains,Bed Bug, Matching with Pet Odor Eliminator' price={88.99} image={Imgflash} rating={5}/>
                </div>

                <div className="home__row">
                    <Product id="17868478" title='invidyo - WiFi Baby Monitor with Live Video and Audio | Cry Detection & Stranger Alerts | 1080P Full HD Camera, Night Vision, Two Way Talk, Temperature Sensor | Remote Pan & Tilt with Smart Phone App' price={74.99} image={ImgBaby} rating={4}/>

                    <Product id="17874678" title='VIZIO 24-Inch D-Series LED HDTV with Apple AirPlay and Chromecast Built in Screen Mirroring for Second Screens, & 150+ Free Streaming Channels (D24h-G9) Dolby Vision HDR QLED Smart TV - 65S535, 2021 Model' price={899.99} image={ImgTV} rating={3}/>
                </div>
                    {/*Here I want to add some kind of carousel*/}
                <div className="home__row">
                    <Product id="17868478" title='Blink Outdoor – wireless, weather-resistant HD security camera with two-year battery life and motion detection – 3 camera kit' price={399.99} image={ImgSec} rating={5}/>

                    <Product id="54351318" title='Band-Aid Brand Flexible Fabric Adhesive Bandages for Wound Care & First Aid, Assorted Sizes, 100 Ct, Beige and White' price={24.99} image={ImgBand} rating={3}/>

                    <Product id="17868478" title='ULTRALOQ U-Bolt Pro Smart Lock + Bridge WiFi Adaptor, 6-in-1 Keyless Entry Door Lock with WiFi, Bluetooth, Biometric Fingerprint and Keypad' price={249.99} image={ImgOther} rating={4}/>

                    <Product id="17868478" title='SKEMIX Plaid Check Wired Edge Ribbon - 10 Yards (White, Black, Green, Yellow, Red, Beige and Purple 2.5" - 3.8")' price={9.99} image={ImgCinta} rating={1}/>
                     
                </div>
            </div>
        </div>
    )
}

export default Home

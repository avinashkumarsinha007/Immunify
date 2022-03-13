import React, { useState } from "react";
import { Card } from "./Card";
import { Card2 } from "./Card2";
import styles from "../Css/Body.module.css"

let data1 = [
    {
        img: "https://immunifyme.com/img/icons/11.png",
        title: "Telemedicine",
        content:"Our telemedicine is not just any platform. It is telemedicine 2.0! It is built on cutting edge technology, along with end-to-end encryption of doctor-patient calls. Our consultations are also prepaid which reduces the chances of cancellations. We also give you access to the patient's health records before they arrive at your clinic, aiding you in better questioning, diagnosis and treatment!"
    },
    {
        img: "https://immunifyme.com/img/icons/22.png",
        title: "Appointment Management",
        content:"The advanced appointment management system offers you complete freedom to practice your profession giving you the freedom to choose the timings, days and months depending upon your availability. It allows you to customize your appointment slots, with regular notifications of upcoming appointments. Designed to help you efficiently utilize the day."
    },
    {
        img: "https://immunifyme.com/img/icons/33.png",
        title: "Revenue management",
        content:"Though we do not track your finances, we do help you manage your revenue. With us, you can keep a record of your daily transactions. All your earnings on the ImmunifyMe platform are stored in a secured e-wallet. You can transfer the amount to your bank account with a click of a button."
    },
    {
        img: "https://immunifyme.com/img/icons/44.png",
        title: "New Patient Registration",
        content:"ImmunifyMe will assist you to digitize your practice completely! Choose to bring any new or existing patient online using a simple form that will take not even 5 mins of your time."
    },
    {
        img: "https://immunifyme.com/img/icons/55.png",
        title: "Broadcast messaging",
        content:"With the Immunifyme broadcast tool, you can send a message to everyone’s phone with just one click. Our technology will broadcast the message to everyone so that you can attend your emergency or simply have a great vacation without any worry!"
    },
    {
        img: "https://immunifyme.com/img/icons/66.png",
        title: "Patient Record Management",
        content:"Say NO to paper! Our state-of-the-art system will help you digitize the health records of your existing patients. With ImmunifyMe you can access your patient's health records from anywhere, anytime!"
    }
]

let data2 = [
    {
        img: "https://immunifyme.com/img/icons/wg1.png",
        title:"Cloud-Based Ecosystem"
    },
    {
        img: "https://immunifyme.com/img/icons/wg2.png",
        title:"Enhanced Practice"
    },
    {
        img: "https://immunifyme.com/img/icons/wg3.png",
        title:"Patient Retention"
    },
    {
        img: "https://immunifyme.com/img/icons/wg4.png",
        title:"Preventing Double Vaccination"
    }
    ,
    {
        img: "https://immunifyme.com/img/icons/wg4.png",
        title:"Socio-Economic Impact"
    },
    {
        img: "https://immunifyme.com/img/icons/wg6.png",
        title:"Wider Reach"
    }
]
export const Body = () => {
    const [data, setData] = useState(data1);
    const [icons, setIcons] = useState(data2);

    return (
        <>
            <div>
                <div>
                    <div>
                <img src="https://immunifyme.com/img/banner/doc_banner-mobile.jpeg" alt=""/>
                    </div>
                    <div>
                        <p></p>
                        <p></p>
                        <div>
                            <div>
                                <img src="https://immunifyme.com/img/icons/apple-store.svg" alt="apple store"/>
                            </div>
                            <div>
                                <img src="https://immunifyme.com/img/icons/google-play.svg" alt="play"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p>GET STARTED TODAY</p>
                    <p>Smarter Digitization,<br />Leads to Better Immunization</p>
                    <div>
                        {
                            data.map((el,i) => {
                                return <Card key={i + el.title} item={el}/>
                            })
                        }
                    </div>
                </div>
                <div>
                    <p>What You Get </p>
                    <div></div>
                    <div>
                        {
                            icons.map((el,i) => {
                                return <Card2 item={el} key={i + el.title} i={i}/>
                            })
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <img src="https://immunifyme.com/img/pitch1.svg" alt="immunify"/>
                    </div>
                    <div>
                        <p>Your Private Data Remains Private</p>
                        <p>Your health files always remain encrypted with us and we never use it in any external promotions. Be reassured that we are both GDPR and HIPAA compliant platforms, if that satisfies your curious soul.</p>
                        <div>And all this is absolutely free of charge!</div>
                    </div>
                </div>
                <div>
                    <h1>Awards & Grants</h1>
                </div>
            </div>
            </>
    )
}
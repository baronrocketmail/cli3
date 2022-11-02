"use client";

import MenuLinks from "../(components)/MenuLinks";
import {useState, use} from "react";
//
async function getAutopayStatus(){
    const autopayStatus = fetch("https://server-neon-tau.vercel.app/api/autopayStatus", {next: {revalidate: 1}})
    return autopayStatus.json()
}

export default function Page(){

//    const autopayInitialStatus = use(getAutopayStatus())

//    const [autopayStatus, setAutopayStatus] = useState(" ")

    return(
            <div>
            <MenuLinks objArray = {[{name: "<------", url: "/"}, {name: "autopay: " , url: "/"}]}/>
            </div>
    )
}


////"use client";
//
//import MenuLinks from "../(components)/MenuLinks";
//async function getAuthMethods(){
//    const authMethods = await fetch("http://localhost:3000/api/authMethods")
//    return authMethods.json()
//}
//
////async function sendAuthCode(email, url){
////    await fetch("http://localhost:3000/api/sendAuthCode", { method: "POST", headers:  {"Content-Type":"application/json"},  body: JSON.stringify({email: email, url: url})})
////}
//
//export default async function Autopay(){
//
//    const authMethods = await getAuthMethods()
//
//    let authButtons = []
//
//    for(let elem in authMethods){
//        if (authMethods[elem].indexOf("@")!=-1) authButtons.push(<button className={"card"}><p>{authMethods[elem]}</p></button>)
//        else if (authMethods[elem].indexOf("(") != -1) authButtons.push(<button className={"card"}><p>{authMethods[elem]}</p></button>)
//    }
//
//    let menuLinksObjArray = [{name: "<------", url: "/"}, {name: "autopay: ", url: "/"}]
//
//    return(
//            <div>
//                <MenuLinks objArray={menuLinksObjArray}/>
//                <div className={"grid"}>
//                    {authButtons}
//                </div>
//            </div>
//    )
//}
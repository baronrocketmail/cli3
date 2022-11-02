import MenuLinks from "../(components)/MenuLinks";
import React from "react";

async function getUnpaid(){
    const unpaid = await fetch("https://server-neon-tau.vercel.app/api/unpaid", {next: {revalidate: 1}})
    return unpaid.json()
}

export default async function PaymentURL({params}){

    const unpaid = await getUnpaid()


    let menuLinksObjArray = [{name: "<------", url: "/"}, {name: " ", url: "/"}]
    for(let i = 0; i < unpaid.length;i++) {
        if (unpaid[i].url != params.paymentURL) {
            menuLinksObjArray.push({name: " ", url: "/"})
        } else if (unpaid[i].url === params.paymentURL) {
            menuLinksObjArray.push({name: unpaid[i].name + ": $" + unpaid[i].amount, url: "/" });
            break;
        }
    }

    return(
            <div>
                <MenuLinks objArray={menuLinksObjArray}/>

            </div>
    )
}
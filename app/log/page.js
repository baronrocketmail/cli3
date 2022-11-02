import MenuLinks from "../(components)/MenuLinks";

async function getUnpaid(){
    const unpaid = await fetch("https://server-neon-tau.vercel.app/api/unpaid")
    return unpaid.json()
}

export default async function Log(){

    const unpaid = await getUnpaid()

    let menuLinksObjArray = [{name: "<------", url: "/"}, {name: " ", url: "/"}]

    for(let elem in unpaid) menuLinksObjArray.push({name: "", url: ""})


    return(
            <div>
                <MenuLinks objArray={menuLinksObjArray}/>
                <h1>very advanced table</h1>
            </div>
    )
}
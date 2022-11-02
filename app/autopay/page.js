import MenuLinks from "../(components)/MenuLinks";

async function getAuthMethods(){
    const authMethods = await fetch("http://localhost:3000/api/authMethods")
    return authMethods.json()
}

export default async function Autopay(){

    const authMethods = await getAuthMethods()

    let authButtons = []

    for(let elem in authMethods){
        if (authMethods[elem].indexOf("@")!=-1) authButtons.push(<button className={"card"}><p>{authMethods[elem]}</p></button>)
        else if (authMethods[elem].indexOf("(") != -1) authButtons.push(<button className={"card"}><p>{authMethods[elem]}</p></button>)
    }

    let menuLinksObjArray = [{name: "<------", url: "/"}, {name: "autopay: ", url: "/"}]

    return(
            <div>
                <MenuLinks objArray={menuLinksObjArray}/>
                <div className={"grid"}>
                    {authButtons}
                </div>
            </div>    
    )
}
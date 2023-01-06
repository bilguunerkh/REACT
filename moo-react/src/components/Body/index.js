import "../../styles/Body.css";
import Btn from "./Btn";

const ButtonItems = [
    {
        text: "TWITTER",
        link: "#",
        // icon:"/images/twitter.png",
        class: "BtnTwitter",
    },
    {
        text: "LINKEDIN",
        link: "#",
        // icon:"/images/linkedin.png",
        class: "BtnLinkedin",
    },
    {
        text: "MEDIUM",
        link: "#",
        // icon:"/images/3ohin.png",
        class: "Btn3ohin",
    },
];




const TextSection = () =>{
    return(
        <>
        <h1>Blog Posts</h1>
        <h2>I think so, this is it. </h2>
        <p>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
        </>
    )
}


const Body = () => {
    return (
        <div className="Body">
            <div className="LeftBody">
                <TextSection/>
                <div className="Buttons">
                    {ButtonItems.map((item) => (
                        <Btn key={item.text} name={item.text} icon={item.icon} classNer={item.class}/>
                    ))}
                </div>
            </div>
            <div className="RigthBody">
                <img src="/images/modNom.png"/>
            </div>
        </div>
    )
};

export default Body;

import "../../styles/Card.css";


const CardItems = [
    {
        image: "/images/setup.png",
        date: "NOV 23 2020",
        text: "This way is wrong about UI Design.",
        description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
        button: "READ MORE",

    },
    {
        image: "/images/macbook.png",
        date: "NOV 23 2020",
        text: "This way is wrong about UI Design.",
        description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
        button: "READ MORE",

    },
    {
        image: "/images/setup.png",
        date: "NOV 23 2020",
        text: "This way is wrong about UI Design.",
        description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
        button: "READ MORE",

    },
    {
        image: "/images/macbook.png",
        date: "NOV 23 2020",
        text: "This way is wrong about UI Design.",
        description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
        button: "READ MORE",

    },
    {
        image: "/images/setup.png",
        date: "NOV 23 2020",
        text: "This way is wrong about UI Design.",
        description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
        button: "READ MORE",

    },
    {
        image: "/images/macbook.png",
        date: "NOV 23 2020",
        text: "This way is wrong about UI Design.",
        description: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web. ",
        button: "READ MORE",

    },
];





const CardLoop = () => {
    return (
        <div className="CardSection">
            <div className="Carduud">{CardItems.map((item) => 
            <div className="cardo">
                <img src={item.image}/>
                <h5>{item.date}</h5>
                <h3>{item.text}</h3>
                <p>{item.description}</p>
                <a href="#">{item.button}</a>
            </div>)}</div>
        </div>
    )
}
export default CardLoop;
import "../../styles/Navbar.css";


const NavItems = [
    {
        name: "PORTFOLIO",
        link: "#",
        class: "NavItem"
    },
    {
        name: "BLOG",
        link: "#",
        class: "NavItem"
    },
    {
        name: "CV",
        link: "#",
        class: "NavItem"
    },
    {
        name: "STORE",
        link: "#",
        class: "NavItem"
    },
    {
        name: "FREELANCE",
        link: "#",
        class: "NavItem"
    },
    {
        name: "ABOUT ME",
        link: "#",
        class: "NavItem"
    },
    {
        name: "CONTACTA",
        link: "#",
        class: "NavItem"
    },
];


const NavbarOk = () => {
    return (
    
        <div className="Navbar">
            <div className="LeftHeseg">
                <img className="Logo" src="/images/minuLogo.png"/>
      
                
            </div>
            <div className="RightHeseg">
                {
                    NavItems.map((item) => {
                        return(
                            <a href={item.link} className={item.class}>{item.name} </a>
                        )
                    })
                }

            </div>
        </div>
        
    )
}
export default NavbarOk;

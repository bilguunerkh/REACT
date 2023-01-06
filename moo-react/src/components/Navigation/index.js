import "../../styles/Navigation.css";
import MenuItem from "../MenuItem";

const Naviga = [
    "All",
    "UI Design",
    "UX Design",
    "Product Design",
    "Articles",
    "Tutorials",
    "News",
];


const Navigation = () => {
    return (
        <div className="Navigation">
            {Naviga.map((menu) => (
                <MenuItem key={menu} name={menu}/>
            ))}
        </div>
    )
}
export default Navigation;
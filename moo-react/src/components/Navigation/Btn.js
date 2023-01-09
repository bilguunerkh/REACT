import { Button } from "react-bootstrap";


const Btn = (props) => {
    return(
        <Button onClick={() => {
            props.handleChange(props.naviga.category);
        }}>
            {props.naviga.name}
        </Button>
    )
} 
export default Btn;
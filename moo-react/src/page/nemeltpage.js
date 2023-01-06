import NavbarOK from "../components/Navbar";
import ImageUrl from '../components/Body2';
import DetailsBlog from '../components/Details';
import FooterUrl from "../components/Footer";



function Nemeltpage() {
  return (
    <div className="App">
      <div  className="container">
      <NavbarOK />
        <ImageUrl/>
        <DetailsBlog/> 
      <FooterUrl/>

      </div>
    

 
    </div>
  );
}

export default Nemeltpage;


import NavbarOK from "../components/Navbar";
import Body from "../components/Body";
import Navigation from "../components/Navigation";
import CardLoop from '../components/Cards';
import FooterUrl from "../components/Footer";



function HomePage() {
  return (
    <div className="App">
      <div  className="container">
      <NavbarOK />
      <Body/>
      <Navigation/>
      <CardLoop />
      <FooterUrl/>

      </div>
    

 
    </div>
  );
}

export default HomePage;

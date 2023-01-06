import "../../styles/Footer.css";
const FooterImage = [
    {
        images: "/images/footerLogo.png",
    },
]

const FooterUrl = () => {
    return(
        <div className="footerSection">
        <div className="footerFull">
        {FooterImage.map((item) => (
            <img src={item.images}/>
        ))}
        </div>
      
    </div>

    )

}
export default FooterUrl;
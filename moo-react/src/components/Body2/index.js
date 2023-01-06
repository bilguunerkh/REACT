import "../../styles/Body2.css";
const SetUp = [
    {
        image: "/images/haha.png",
    }
]


const ImageUrl = () => {
    return (
        <div className="ImageUrl">
            <div className="Full">
                {SetUp.map((item) => (
                    <img src={item.image}/>
                ))}
            </div>
        </div>
    );
};
export default ImageUrl;
import "../../styles/Details.css";


const Blogs = [

    {
        title: "BLOG DETAILS H1",
        description: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved.",
    },
    {
        title: "BLOG DETAILS H2",
        description: "Just like graphic design and web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved.  In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved.",
    },
    {
        title: "BLOG DETAILS H2",
        description:"web development, UX design trends come and go for a reason. UX is all about developing a better digital world for humanity. It’s a field that requires innovation, but that is constantly evolving. Regularly following UX design blogs can help you keep on top of changes in the industry, as well as develop your UX skills.Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved. Reading about these types of cases can help give you ideas. In this sense, UX design blogs can help provide an indication for the kinds of directions your future projects should take. Additionally, many UX design blogs expose you to case studies detailing an app or web’s successful development, along with how its usability was improved.",
    },
];

const DetailsBlog = () =>{
    return(
        <div className="DeatailsSection">
            <div className="Bloguud">
                {Blogs.map((item) => (
                    <>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </>
                   
                ))}
            </div>
        </div>
    )
}
export default DetailsBlog;

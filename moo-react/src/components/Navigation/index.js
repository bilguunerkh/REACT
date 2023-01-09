import "../../styles/Navigation.css";

import Btn from "./Btn";
import { useState } from "react";



const naviga = [
    {name: "All", category: ""},
    {name: "UI Design", category: "UI"},
    {name: "UX Design", category: "UX"},
    {name: "Dev Design", category: ""},
    {name: "Articles", category: ""},

];

const blogs = [
    {
      category: "UI",
      title: "This way is wrong about UI Design.",
      text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
      image: "/images/content1.png",
      date: "NOV 23 2020",
      link: "#",
    },
    {
      category: "UX",
      title: "This way is wrong about UX Design.",
      text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
      image: "/images/content2.png",
      date: "NOV 23 2020",
      link: "#",
    },
    {
      category: "UI",
      title: "This way is wrong about UI Design.",
      text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
      image: "/images/content1.png",
      date: "NOV 23 2020",
      link: "#",
    },
    {
      category: "DEV",
      title: "This way is wrong about DEV Design.",
      text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
      image: "/images/content2.png",
      date: "NOV 23 2020",
      link: "#",
    },
    {
      category: "DEV",
      title: "This way is wrong about DEV Design.",
      text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
      image: "/images/content1.png",
      date: "NOV 23 2020",
      link: "#",
    },
    {
      category: "DEV",
      title: "This way is wrong about DEV Design.",
      text: "A quick guide to assisting users in the challenging steps from learning about your podcast on the web.  A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
      image: "/images/content2.png",
      date: "NOV 23 2020",
      link: "#",
    },
  ];

const Content = () => {
    const [news, setNews] = useState(blogs);

    const handleChange = (category) => {
        console.log(category);

        const filtered = blogs.filter((item) => item.category === category);
        setNews(filtered);
    };
    return(
        <>
        <div className="content-menu">
            {naviga.map((item) => {
                return <Btn naviga={item} handleChange={handleChange}/>
            })}
        </div>


{/* 
        <div className="blogu">
            {news.map((blogs) => {
                return(
                   {blogs}
                    );
            })}
        </div> */}
        </>
    )
}
export default Content;





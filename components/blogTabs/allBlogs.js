import React from "react";
import styles from "./index.module.css";
import { BlogCard } from "./blogCard";
import { useEffect, useState} from "react";


 export function AllBlogs(){
    const [blog, setBlog] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fluxofficial");
            const data = await response.json();
            const blogData = data?.items ?? [];
            
            // Extract image URLs from blog data
            const blogsWithImages = blogData.map(item => ({
                ...item,
                image: item.thumbnail, // Assuming the image URL is provided in the 'thumbnail' field
            }));
    
            setBlog(blogsWithImages);
        } catch (error) {
            setBlog([]);
            console.log(`Error retrieving Medium data: ${error}`);
        }
    }
    
    useEffect(() => {
        fetchData();
    }, []);
    
    console.log(blog);
      
    
    return(
        <React.Fragment>
            <div className="row">               
                {blog?.map((data) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-5"  key={data.title}> 
                    <BlogCard img={ data['description'].toString().match(/<img[^>]+src="([^">]+)"/)[1]} date={data.pubDate.slice(0, 10)} description={data.title} content={data.description.split("</p>")[3].replace("<strong>","").replace("</strong>","").replace("<figure>", "").replace("</figure>", "").replace("<p>", "").replace("</p>", "").replace("<h3>","").replace("</h3>","")} link={data.link} />
                    </div>
                     ))}
                   
            </div>
        </React.Fragment>
    )
}


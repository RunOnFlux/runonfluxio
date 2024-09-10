import React, { useEffect, useState } from "react";
import { BlogCard } from "./blogCard";
import DOMPurify from 'dompurify';

export function AllBlogs() {
    const [blog, setBlog] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/getBlog");
            const data = await response.json();
            const blogData = data?.items ?? [];

            const blogsWithImages = blogData.map(item => ({
                ...item,
                image: item.thumbnail, 
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

    const stripHtml = (html) => {
        const cleanHtml = DOMPurify.sanitize(html, { ALLOWED_TAGS: [] });
        return cleanHtml.replace(/<\/?[^>]+(>|$)/g, "");
    }

    const getFirstParagraph = (html) => {
        const match = html.match(/<p>(.*?)<\/p>/);
        if (match && match[1]) {
            return stripHtml(match[1]);
        }
        return "";
    }

    return (
        <React.Fragment>
            <div className="row">
                {blog?.map((data) => (
                    <div className="col-lg-4 col-md-6 col-sm-6 mb-5" key={data.title}>
                        <BlogCard
                            img={data['description'].toString().match(/<img[^>]+src="([^">]+)"/)[1]}
                            date={data.pubDate.slice(0, 10)}
                            description={getFirstParagraph(data.description)}
                            content={stripHtml(data.description.split("</p>")[3] || "")}
                            link={data.link}
                        />
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

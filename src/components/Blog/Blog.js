import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div id="services">
            <h2 className="fs-1 fw-bold mt-4 mb-4 text-center">Latest <span className="text-danger">News</span> </h2>
            <div className="">
                {
                    blogs.map(blog => <Link style={{ textDecoration: "none" }} className="d-flex text-danger border "
                        to="/blog">
                        <img className="w-25 h-25 p-2" src={blog.img} alt="" />
                        <div>
                            <h3 style={{ color: 'slateblue' }}>{blog.name}</h3>
                            <p>{blog.date}</p>
                        </div>
                    </Link>)
                }

            </div>
        </div>
    );
};

export default Blog;
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const SingleBlogs = () => {

    const params = useParams();
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`https://soulmate-server-routed.vercel.app/blogs/${params.id}`)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const { image, title, details } = blogs;

    return (
        <div>
            {/* Title */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Soulmate | BLOG</title>
            </Helmet>

            <div className="card card-side bg-base-100 shadow-2xl p-5">
                <figure><img src={image} alt="Blog" /></figure>
                <div className="card-body ">
                    <h2 className="card-title ">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogs;
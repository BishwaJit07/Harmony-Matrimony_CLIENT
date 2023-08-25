import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;

const AddBlog = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`;

    const onSubmit = (data) => {
        console.log(data);
        console.log(image_hosting_url);

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgUrl = imgResponse.data.display_url;
                    const { title, description, type } = data;
                    const newBlogs = { title, details: description, type, image: imgUrl, react: 0 };
                    console.log(newBlogs);

                    fetch('https://soulmates-server-two.vercel.app/blogs/post', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(newBlogs)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Blog Added',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                navigate('/blog')
                            }
                        })

                }
            })

    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/dLdXyq8/top-view-beautiful-valentine-s-day-concept.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-medium">Blog Title</span>
                        </label>
                        <input type="text"  {...register("title", { required: true })} placeholder="Title" className="input input-bordered w-full" />
                        {errors.title && <span className="text-red-600">Title is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-medium">Blog Description</span>
                        </label>
                        <input type="text"  {...register("description", { required: true })} placeholder="Description" className=" textarea w-full" />
                        {errors.description && <span className="text-red-600">Description is required</span>}
                    </div>
                    <div className="flex gap-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-medium">Blog Type</span>
                            </label>
                            <input type="text"  {...register("type", { required: true })} placeholder="Blog Type" className="input input-bordered file-input  w-full max-w-xs" />
                            {errors.type && <span className="text-red-600">Type is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white text-lg font-medium">Publish Date</span>
                            </label>
                            <input type="date"  {...register("date", { required: true })} placeholder="Publish Date" className="input input-bordered file-input  w-full max-w-xs" />
                            {errors.date && <span className="text-red-600">Date is required</span>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white text-lg font-medium">Blog Image</span>
                        </label>
                        <input type="file"  {...register("image", { required: true })} placeholder="image" className="input input-bordered file-input  w-full max-w-xs" />
                        {errors.image && <span className="text-red-600">Image is required</span>}
                    </div>
                    <input className="btn btn-outline btn-red w-full mt-2" type="submit" value='Add ' />
                </form>
            </div>
        </div>
    );
};

export default AddBlog;
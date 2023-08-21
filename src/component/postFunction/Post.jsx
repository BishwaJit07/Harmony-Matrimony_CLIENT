import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { BsImages } from "react-icons/bs";
import { useForm } from "react-hook-form";
import PostShow from "./PostShow";
import axios from "axios";
import { formatDate } from "../../utilities/utilities";
const Image_Hosting_Token = import.meta.env.VITE_Image_Upload_Token;

const Post = () => {
  const { user, loading } = useContext(AuthContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [prevStatus, setPrevStatus] = useState([]);
  const [loader, setLoader] = useState(true);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/statusPosts?user=${user?.email}`)
      .then((response) => {
        setPrevStatus(response.data);
      });
  }, [loader, user]);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const onSubmit = (data) => {
    setLoader(true);
    const postDate = formatDate(new Date());
    const formData = new FormData();
    formData.append("image", data.photo[0]);

    axios
      .post(
        `https://api.imgbb.com/1/upload?key=${Image_Hosting_Token}`,
        formData
      )
      .then((response) => {
        if (response.data.success) {
          const imgUrl = response.data.data.display_url;

          const statusPost = {
            userId: user.email,
            post: data.postText,
            postDate,
            postImg: imgUrl,
          };

          axios
            .post(`http://localhost:5000/statusPost`, statusPost)
            .then((response) => {
              if (response.data.insertedId) {
                reset();
                setSelectedImage(null);
                setLoader(false);
              }
            });
        }
      });
  };

  return (
    <>
      {loading ? (
        <>
          <progress className="progress w-56"></progress>
        </>
      ) : (
        <>
          <div className="m-10 items-center">
            <div className="card card-compact w-96 bg-base-100 p-4 shadow-xl mb-2">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-3">
                  <img
                    src={user?.photoURL}
                    className="w-12 h-12 rounded-full"
                    alt="User"
                  />
                  <input
                    type="text"
                    placeholder="What's Up (Optional)"
                    className="input input-bordered w-full focus:outline-0 p-2"
                    {...register("postText")}
                  />
                </div>
                {selectedImage && (
                  <div className="mt-2">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      className="w-96 h-96 rounded"
                    />
                  </div>
                )}

                <div className="form-control my-3">
                  <label className="input-group">
                    <span>
                      <BsImages className="text-green-600 text-md me-1" /> Image
                    </span>
                    <input
                      type="file"
                      {...register("photo", { required: true })}
                      onChange={handleImageChange}
                    />
                  </label>
                  {errors.photo && (
                    <span className="my-2 text-sm text-red-600">
                      Image is required
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn red-primary text-white p-3 px-4 text-base lg:text-md capitalize font-semibold rounded-xl hover:bg-[#bc1828]"
                >
                  Post
                </button>
              </form>
            </div>

            {prevStatus.map((status) => (
              <PostShow
                status={status}
                setLoader={setLoader}
                key={status._id}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Post;

// eslint-disable-next-line no-unused-vars
const BookServiceCard = ({ data }) => {
  return (
    <>
      <div className="card max-w-screen-md bg-base-100 shadow-xl ">
        <figure>
          <img
            src={data.image}
            alt="image"
            className=" lg:h-[calc(100vh-400px)] w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <p>{data.description}</p>
          <div className="card-actions justify-end">
            {/* <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BookServiceCard;

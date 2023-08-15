const LeftCard = ({data}) => {
  return (
    <>
      <div className="card  card-side bg-base-100 shadow-xl mb-4 ml-2 hover:translate-x-6 duration-700">
        <figure>
          <img
            src={data.image}
            alt={data.title}

           
            className=" h-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{data.title}</h2>
        </div>
      </div>
    </>
  );
};

export default LeftCard;


const HappyStoryCard = ({ happyStory }) => {
  return (
    <div className="card mx-4 my-8 md:mx-0  bg-opacity-80 round-t-[30%] md:rounded-t-[50%] rounded-b-3xl shadow-xl border-t-white">
      <figure><img  src={happyStory.img} alt="Shoes" /></figure>
      <div className="card-body  ">
        <h2 className="card-title text-4xl font-normal justify-center">{happyStory.name}</h2>
        <p className="text-base  text-justify py-3 text text-[#728483]">{happyStory.about_marriage}</p>
        <div className="card-actions justify-center">
          <button className="btn red-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HappyStoryCard;
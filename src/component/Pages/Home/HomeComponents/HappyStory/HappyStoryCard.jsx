
const HappyStoryCard = ({ happyStory }) => {
  return (
    <div className="card mx-4 my-8 md:mx-0 bg-red-600 rounded-t-[50%] rounded-b-3xl shadow-xl border-t-white">
      <figure><img  src={happyStory.img} alt="Shoes" /></figure>
      <div className="card-body  text-white">
        <h2 className="card-title text-4xl font-normal justify-center">{happyStory.name}</h2>
        <p className="text-sm  text-justify py-3">{happyStory.about_marriage}</p>
        <div className="card-actions justify-center">
          <button className="btn text-red-600">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HappyStoryCard;
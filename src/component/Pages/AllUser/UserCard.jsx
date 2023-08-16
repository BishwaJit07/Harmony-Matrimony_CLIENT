
const UserCard = ({user}) => {
    const {img,name}  = user
    return (
        <div>
            <div className="flex p-4 rounded-lg bg-base-100 shadow-xl bg items-center gap-10">
                <figure><img  src={img} alt="Movie" /></figure>
                <div className="">
                    <h2 className="card-title">{name}</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
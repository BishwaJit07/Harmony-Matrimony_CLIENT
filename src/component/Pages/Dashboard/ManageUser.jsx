import useAllUsers from "../../../hooks/useAllUsers";


const ManageUser = () => {
    const [users] = useAllUsers();
    return (
        <div className="w-full">
            <div>
                <h1 className="text-[#FF725E] text-2xl font-bold border-b-2 border-[#FF725E] w-fit mx-auto p-2">
                    All Users
                </h1>
                <div className="">
                    <img src='https://i.ibb.co/swBsp3p/flower.png' alt="" className="lg:w-[20%] w-[60%] md:w-[40%] mx-auto -mt-1 mb-5" />
                </div>
            </div>
            <div className="overflow-x-auto" >
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users?.map((user, index)=> <tr  key={user._id}>
                            <th>{index+1}</th>
                            <th className="w-16 h-16 object-cover"><img src={user.img} alt="" /></th>
                            <th>{user.name}</th>
                            <th><button className="btn btn-outline btn-sm border-green-400 text-green-400">Admin</button></th>
                            <th><button className="btn btn-outline btn-sm border-green-400 text-green-400">Instructor</button></th>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;
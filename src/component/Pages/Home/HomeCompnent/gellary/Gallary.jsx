import "./gellary.css";

const Gallary = () => {
  return (
    <div className="mt-20 mb-32">
      <div><h2  className="text-[#272932] lg:text-[40px]  text-[20px] text-left font-alice  ml-10 mb-10">Photo Gallery</h2></div>
      <div className="galContent grid grid-cols-3 md:grid-cols-7 grid-rows-1 md:grid-rows-3 gap-2 relative max-h-[calc(150vh-50px)] md:max-h-[calc(100vh-350px)]">
        <div>
          <img
            src="https://i.ibb.co/NmzGg7F/beautiful-stylish-couple-field-with-sunflowers-1157-25972.jpg"
            className="galImg"
          />
        </div>
        <div className=" col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/r6wJ0qX/young-couple-together-walking-autumn-park-1303-26181.jpg"
            className="galImg"
          />
        </div>
        <div>
          <img src="https://i.ibb.co/GPNRJCw/pxfuel-1.jpg" className="galImg" />
        </div>
        <div className="col-span-2 row-span-2">
          <img
            src="https://i.ibb.co/chdn9y8/man-hugs-his-wife-they-smile-each-other.jpg"
            className="galImg"
          />
          
        </div>
        <div className="row-span-2">
          <img src="https://i.ibb.co/c1zwDyw/pxfuel-2.jpg" className="galImg" />
        </div>
        <div className="row-span-3 md:row-span-2">
          <img
            src="https://i.ibb.co/z2zcbNJ/315b896025e1da6a9fbaf95c836f1b4c.jpg"
            className="galImg"
          />
        </div>
        <div className="row-span-2 hidden md:flex ">
          <img
            src="https://i.ibb.co/PZ83F9w/pexels-jonathan-borba-3014860.jpg"
            className="galImg"
          />
        </div>
        <div className="col-span-2 md:hidden ">
          <img
            src="https://i.ibb.co/PZ83F9w/pexels-jonathan-borba-3014860.jpg"
            className="galImg"
          />
        </div>
        <div className="col-span-2">
          <img src="https://i.ibb.co/Cwvnx2C/pxfuel.jpg" className="galImg" />
        </div>
        <div className="col-span-2">
          <img
            src="https://i.ibb.co/m56LmtV/young-romantic-couple-relaxing-beach-watching-sunset.jpg"
            className="galImg"
          />
        </div>
        <div className="hidden md:flex">
          <img
            src="https://i.ibb.co/Z1wcgNk/55a1435552506b9f7ef0054b74ecde4c.jpg"
            className="galImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallary;

import "./gellary.css";
const Gellary = () => {
  return (
    <div className="mb-8">
      <h1 className="text-red-600 font-bold border-b-2 border-red-600 w-fit mx-auto mb-8">
        Photo Gellary
      </h1>

      <div className="galContent grid grid-cols-7 grid-rows-3 gap-2 relative max-h-[calc(100vh-350px)]">
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
        <div className="row-span-2">
          <img
            src="https://i.ibb.co/z2zcbNJ/315b896025e1da6a9fbaf95c836f1b4c.jpg"
            className="galImg"
          />
        </div>
        <div className="row-span-2">
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
        <div>
          <img
            src="https://i.ibb.co/Z1wcgNk/55a1435552506b9f7ef0054b74ecde4c.jpg"
            className="galImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gellary;

import React from "react";
import One from "../assets/media/1.png";
import Two from "../assets/media/2.png";
import Three from "../assets/media/3.png";
import Four from "../assets/media/4.png";
import Hello from "../assets/media/ello.png";
const People = () => {
  return (
    <div className="bg-gray-50  flex items-center justify-center font-sans">
      <div className="max-w-8xl rounded-lg p-4 flex flex-col md:flex-row items-center gap-4">
        {/* Left */}
        <div className="flex-1 font-sans font-bold">
          {/* <h1 className="text-green-500 text-4xl font-bold mb-6">£llo</h1> */}
          <img src={Hello} />
          <p className="text-[#161421] text-2xl text-bold  mb-6">
            We are a bunch of people <br /> obsessed with all things <br />{" "}
            food! Two of us had <br /> startups in
            <span className="text-green-500 font-semibold ">food</span> <br />
            previously, and one comes <br />
            from a family of chefs. <br />
            Culinary is
            <span className="text-purple-500 font-semibold">
              close to our <br />
              hearts
            </span>
            , hence this is our <br />
            attempt to bring people <br />
            away from home closer to
            <br />
            home food. Curb cravings,
            <br /> indulge, meet people, <br /> spread joy.
          </p>
        </div>

        {/* Right */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="bg-green-100 flex justify-center items-center h-30 rounded-md">
            <img src={One} />
          </div>
          <div className="bg-purple-100 flex justify-center items-center h-30 rounded-md">
            <img src={Two} />
          </div>
          <div className="bg-blue-100 flex justify-center items-center h-30 rounded-md">
            <img src={Three} />
          </div>
          <div className="bg-yellow-100 flex justify-center items-center h-40 rounded-md">
            <img src={Four} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;

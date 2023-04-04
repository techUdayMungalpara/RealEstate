import { useContext } from "react";

import { HouseContext } from "./HouseContext";

import House from "./House";

import { Link } from "react-router-dom";

import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]  " />
    );
  }

  if (houses.length < 1) {
    return <div className="p-8 text-4xl   ">Sorry nothing found </div>;
  }
  return (
    <section className="mb-20 bg-white ">
      <div className=" container mx-auto    ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-14">
          {houses.map((a) => {
            return (
              <Link to={`/property/${a.id}`} key={a.id}>
                <House house={a} />
              </Link>
            );
          })}
        </div>
      </div>
      HouseList
    </section>
  );
};

export default HouseList;

import React from "react";
import { useParams } from "react-router-dom";
import Navpar from "./Navpar";
import Footer from "./Footer";

type Info2 = {
  id: number;
  name: string;
  status: string;
  gender: string;
  image: string;
};

export default function DataofImg() {
  const { id } = useParams();
  const [Character, setCharacter] = React.useState<Info2[]>([]);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}  `)
      .then((res) => res.json())
      .then((data) => setCharacter([data]));
  }, []);
  return (
    <div>
      <Navpar />
      <div className="">
        {Character.map((item) => {
          return (
            <div
              className="flex h-screen m-10 text-left text-black  rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-teal-400 max-sm:flex-wrap max-sm:text-left max-sm:h-auto max-sm:mb-36"
              key={item.id}
            >
              <img
                className="rounded-lg  object-none border-4 border-black bg-white max-sm:w-full"
                src={item.image}
                alt=""
              />
              <div className="p-6 flex flex-col justify-center  ">
                <h1 className="mb-5 text-5xl font-bold leading-tight  dark:text-neutral-50 max-sm:text-lg max-sm:mb-2">
                  Name: {item.name}
                </h1>
                <h4 className="mb-5 text-4xl font-bold leading-tight  dark:text-neutral-50 max-sm:text-lg max-sm:mb-2">
                  Stuts: {item.status}
                </h4>
                <h4 className="mb-5 text-4xl font-bold leading-tight dark:text-neutral-50 max-sm:text-lg max-sm:mb-2">
                  Gender: {item.gender}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

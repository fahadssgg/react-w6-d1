import React from "react";
import { Link } from "react-router-dom";
import Navpar from "./Navpar";
import Footer from "./Footer";
type Info = {
  id: number;
  image: string;
};

export default function RickData() {
  const [list, setList] = React.useState<Info[]>([]);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((res) => res.json())
      .then((data) => setList(data.results));
  }, []);

  return (
    <>
      <Navpar />
      <div className="grid grid-cols-4 gap-10 m-10   content-center max-sm:grid-cols-2 max-sm:m-0 ">
        {list.map((item) => (
          <Link to={`/Character/${item.id}`} key={item.id}>
            <img
              className="rounded-lg border-8 border-black"
              src={item.image}
            />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

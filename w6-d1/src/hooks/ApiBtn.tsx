import React from "react";

type Info = {
  name: string;

  title?: string;
};
export default function ApiBtn() {
  const [MyApiBtn, setMyApiBtn] = React.useState<Info[]>([]);
  const [MyApi, setMyApi] = React.useState("");
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${MyApi}`)
      .then((res) => res.json())
      .then((data) => setMyApiBtn(data));
  }, [MyApi]);

  return (
    <>
      <button className="border m-5" onClick={() => setMyApi("posts")}>
        post
      </button>
      <button className="border m-5" onClick={() => setMyApi("comments")}>
        comments
      </button>
      <button className="border m-5" onClick={() => setMyApi("users")}>
        users
      </button>
      <br></br>
      {MyApiBtn.map((item, id) => {
        return (
          <div className="text-left" key={id}>
            {item.name}
            {item.title}
          </div>
        );
      })}
    </>
  );
}

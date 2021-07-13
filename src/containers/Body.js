import { useEffect, useState } from "react";

const Body = () => {
  // const root = document.querySelector("#root");
  const API = "https://jsonplaceholder.typicode.com/posts";
  const [state, setState] = useState([]);

  useEffect(() => {
    const List = async () => {
      const data = await fetch(API);
      const list = await data.json();
      setState(list);
      console.log(state);
    };
    List();
  }, []);

  // const fetch = () => {
  //   fetch(API)
  //     .then(res => res.json())
  //     .then(data => {
  //       data.forEach(item => {
  //         const li = ` <li>
  //       <h2>${item.title}</h2>
  //       <p>${item.body}</p>
  //     `;
  //         root.insertAdjacentHTML("beforeend", li);
  //       });
  //     })
  //     .catch(e => console.log(e));
  // };

  return (
    <>
      <h1>post</h1>
      <ul>
        {state.map(list => {
          return (
            <li id={list.id} key={list.id}>
              <h2>{list.title}</h2>
              <p>{list.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Body;

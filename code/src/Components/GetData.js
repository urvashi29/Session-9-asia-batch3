import React, { useEffect, useState } from "react";

// ''
import axios from "axios";

const GetData = () => {
  const [state, setState] = useState({
    firstName: "",
  });

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://api.fake-rest.refine.dev/users/1"
    );

    const result = await response;
    console.log(result);
    return result.data;
  };

  useEffect(() => {
    (async () => {
      const data = await fetchUsers();
      console.log(data);
      setState(data);
    })();
  }, []);

  return <div>{state.firstName}</div>;
};

export default GetData;

// callback
// promises ES6/2015
// async/await 2017

// async function add() {
//   let y = await "hello";
//   console.log(y);
// }

// add().then(
//   () => {},
//   () => {}
// );

console.log("hi");

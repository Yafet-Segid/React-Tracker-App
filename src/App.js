import { useState, useEffect } from "react";
import axios from "axios";

const fetchRundomData = () => {
  return axios
    .get("https://randomuser.me/api/")
    .then((data) => {
      // handle success
      console.log(data);
      return JSON.stringify(data);
    })
    .catch((err) => {
      // handle error
      console.log(err);
    });
};

function App() {
  // const [randonData, setRandonData] = useState();
  const [jsonRandonData, setjsonRandonData] = useState();

  useEffect(() => {
    fetchRundomData().then((randomData) => {
      setjsonRandonData(randomData || "No user data found");
    });
  }, []);

  return (
    <div className="App">
      <button
        onClick={() => {
          fetchRundomData();
        }}
      >
        Add
      </button>
      <p>{jsonRandonData}</p>
    </div>
  );
}

export default App;

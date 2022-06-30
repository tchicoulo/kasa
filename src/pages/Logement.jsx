import React from "react";
import Navigation from "../components/Navigation";
import { useParams } from "react-router-dom";

const Logement = () => {
  const { id } = useParams();
  console.log(id);
  // const [data, setData] = useState([]);

  // // useEffect(() => {
  // //   axios
  // //     .get("./data/logement.json")
  // //     .then((res) => setData(res.data))
  // //     .catch((err) => console.log(err));
  // // }, []);

  return (
    <div>
      <Navigation />
      <h1>Logement Page</h1>
    </div>
  );
};

export default Logement;

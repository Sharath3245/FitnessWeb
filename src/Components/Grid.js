import { useSelector } from "react-redux";
import Bodypart1 from "./Bodypart1";
import Spinner from "./Loader";
const Grid = () => {
  const bodyparts = useSelector((state) => state.bodyparts.bodyparts);
  console.log(bodyparts, "grid");
  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const array = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist"
  ];

  return (
    <div className="bodypartcontainer">
      {bodyparts.length > 0 ? (
        bodyparts.map((item, index) => (
          
            <Bodypart1 item={item} />
          
        ))
      ) : (
        <div className="spinner">
          {" "}
          <Spinner />
        </div>
      )}
    </div>
  );
};
export default Grid;

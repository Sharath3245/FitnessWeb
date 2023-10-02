import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import Paginations from "./Paginations";
import Spinner from "./Loader";
const Exercises = () => {
  const bodyparts = useSelector((state) => state.bodyparts.searchedexercises);
  return (
    <Box style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      {bodyparts.length > 0 ? (
        <Paginations data={bodyparts} perpage={9} typo={"Showing results"} />
      ) : (
        <div className="spinner1">
          {" "}
          <Spinner />
        </div>
      )}
    </Box>
  );
};
export default Exercises;

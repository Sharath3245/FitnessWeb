import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import Bodypart from "./Bodypart";
import { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Rightarrow from "../Assets/right-arrow.png";
import Leftarrow from "../Assets/left-arrow.png";
import Spinner from "./Loader";
const Horizontalscrollbar = () => {
  const bodyparts = useSelector((state) => state.bodyparts.bodyparts);
  console.log(bodyparts);
  const scroll = useContext(VisibilityContext);
  const leftarrow = () => {
    const { scrollPrev } = scroll;
    return (
      <div
        onClick={() => console.log(VisibilityContext)}
        className="left-arrow"
      >
        <img src={Leftarrow} alt="left-arrow" />
      </div>
    );
  };
  const rightarrow = () => {
    const { scrollNext, isLastItemVisible } = scroll;
    return (
      <Typography
        disabled={isLastItemVisible}
        onClick={() => console.log(ScrollMenu)}
        className="right-arrow"
      >
        <img src={Rightarrow} alt="right-arrow" />
      </Typography>
    );
  };
  return (
    <ScrollMenu LeftArrow={leftarrow} RightArrow={rightarrow}>
      {bodyparts.length >= 0 ? (
        bodyparts.map((item, index) => (
          <Box key={index} itemId={item.id} title={item.id} m="0 40px">
            <Bodypart item={item} />
          </Box>
        ))
      ) : (
        <Spinner />
      )}
    </ScrollMenu>
  );
};
///
export default Horizontalscrollbar;

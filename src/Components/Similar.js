import Paginations from "./Paginations";
import Spinner from "./Loader";
import { Box } from "@mui/material";
const Similar = ({ target, equipment }) => {
  console.log(target, equipment, "simailar exercises");
  return (
    <Box>
      {target.length > 0 ? (
        <Paginations
          data={target}
          perpage={4}
          typo={"Exercise that target the same muscle group"}
        />
      ) : (
        <div className="Spinner">
          <Spinner />
        </div>
      )}
      {target.length > 0 ? (
        <Paginations
          data={equipment}
          perpage={4}
          typo={"Exercise that target the same muscle group"}
        />
      ) : (
        <div className="Spinner">
          <Spinner />
        </div>
      )}
    </Box>
  );
};
export default Similar;

import { Box, Stack, Typography } from "@mui/material";

const Youtube = ({ exercisevideos, exercisename }) => {
  console.log(exercisevideos);
  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="32px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {exercisename}{" "}
        </span>
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ flexDirection: { lg: "row" }, gap: { lg: "110px", xs: "0" } }}
      ></Stack>
    </Box>
  );
};
export default Youtube;

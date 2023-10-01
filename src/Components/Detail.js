import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import BodyIcon from "../Assets/body-part.png";
import EquipmentIcon from "../Assets/equipment.png";
import TargetIcon from "../Assets/target.png";
const Detail = ({ exercises }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exercises;
  const array = [
    { icon: BodyIcon, name: bodyPart },
    { icon: EquipmentIcon, name: equipment },
    { icon: TargetIcon, name: target }
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to
          target your {target}.It will help you improve your mood and gain
          energy
        </Typography>
        {array.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px"
              }}
            >
              <img
                src={item.icon}
                alt="icon"
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
export default Detail;

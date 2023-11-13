import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img from "../../assets/image.svg";

const Card = () => {
  return (
    <Stack className="items-center">
      <Stack className="bg-blue rounded-lg max-w-md">
        <Stack className="p-6 py-12 justify-center items-center gap-3">
          <Stack className="max-w-full justify-center items-center">
            <Typography className="text-white font-bold text-center max-w-[80%] text-lg">
              Get Started with KoinX for FREE
            </Typography>
          </Stack>

          <Stack className="justify-center items-center">
            <Typography
              className="text-white text-sm max-w-[95%] text-center"
              variant="caption"
            >
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </Typography>
          </Stack>

          <Stack className="pt-12">
            <img src={img} alt="" />
          </Stack>

          <Stack className="pt-6">
            <Button
              variant="contained"
              className="bg-white text-black capitalize hover:bg-black hover:text-white text-base"
            >
              Get Started for FREE
              <ArrowForwardIcon />
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;

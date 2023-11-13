import React from "react";
import Card from "../Card/Card";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TaxCalculator from "../TaxCalculator/TaxCalculator";
import FAQ from "../FAQ/FAQ";

const Header = () => {
  return (
    <Stack className="p-4 md:p-6 md:px-12 bg-[#EFF2F5]">
      <Grid container spacing={3}>
        <Grid xs={12} lg={8}>
          <Stack className="gap-6">
            <TaxCalculator />
            <FAQ />
          </Stack>
        </Grid>
        <Grid xs={12} lg={4}>
          <Card />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Header;

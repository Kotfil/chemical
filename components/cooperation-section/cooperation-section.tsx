import React, { FC } from "react";
import { Grid } from "@mui/material";
import CooperationSchedule from "@/components/cooperation-section/cooperation-schedule/cooperation-schedule";

export const CooperationSection: FC = () => {
  return (
    <Grid width={"100%"} display={"flex"} flexDirection={"column"} px={2}>
      <Grid>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 leading-tight">
          GENERAL ALGORITHM OF CO-OPERATION
        </h2>
      </Grid>
      <Grid>
        <CooperationSchedule />
      </Grid>
    </Grid>
  );
};

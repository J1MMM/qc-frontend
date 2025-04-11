import { Box, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

import useData from "../../hooks/useData";
import TableFilterBtn from "../../components/form/table/TableFilterBtn";
import TableQuickFilter from "../../components/form/table/TableQuickFilter";
import { TableToolbar } from "../../components/form/table/TableToolbar";
import { PageContainer } from "../../components/layout/PageContainer";
import { BarChart, PieChart } from "@mui/x-charts";
import { Female, Male, StorageRounded, Transgender } from "@mui/icons-material";
import axios from "../../api/axios";

const Dashboard = () => {
  const { records } = useData();
  const [analytics, setAnalytics] = useState({});
  console.log(records);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios("/analytics");
        console.log("response.data");
        console.log(response.data);
        setAnalytics(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log("analytics");
  console.log(analytics);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        gap: 2,
        height: "calc(100vh - 135px)",
        flexDirection: "column",
      }}
    ></Box>
  );
};

export default Dashboard;

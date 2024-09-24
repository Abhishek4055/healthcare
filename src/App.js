import React, { useEffect } from "react";
import { fetchDashboardData } from "./features/dashboardSlice";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import Table from "./page/Table";
import WorkflowPanel from "./page/WorkflowPanel";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;
  if (!data) return null;

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
          <Box sx={{ flex: 3, overflowX: "auto" }}>
            <Box
              sx={{
                my: 2,
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid #ccc",
                flexDirection: "row", // Make it one line
                alignItems: "center", // Align items in the center
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "inline-block",
                    marginRight: 2,
                    fontWeight: "bold",
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  PROJECT NAME:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    display: "inline-block",
                    marginRight: 4,
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  {data.project_name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "inline-block",
                    marginRight: 2,
                    fontWeight: "bold",
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  OUTPUT DATASET NAME:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    display: "inline-block",
                    marginRight: 4,
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  {data.output_name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "inline-block",
                    marginRight: 2,
                    fontWeight: "bold",
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  LAST RUN:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    display: "inline-block",
                    marginRight: 4,
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  {data.last_run}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: "inline-block",
                    marginRight: 2,
                    fontWeight: "bold",
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  Rows:
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{
                    display: "inline-block",
                    fontSize: "0.875rem", // Reduced font size
                  }}
                >
                  {data.row_count}
                </Typography>
              </Box>
            </Box>
            <Table data={data} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <WorkflowPanel steps={data.workflow_steps} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;

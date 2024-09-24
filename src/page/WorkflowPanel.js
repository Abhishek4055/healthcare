import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const WorkflowPanel = ({ steps }) => {
  return (
    <Paper>
      <Typography
        variant="h6"
        style={{ backgroundColor: "#4a0e4e", color: "white", padding: "10px" }}
      >
        DATASET SELECTION
      </Typography>
      <List>
        {steps.map((step) => (
          <ListItem key={step.id} button>
            <ListItemText
              primary={step.name_title}
              secondary={
                step.name === "join" ? (
                  <>
                    <Typography component="span" variant="body2">
                      type: {step.params_extra.type}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2">
                      left_columns: {step.params_extra.left_columns.join(", ")}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2">
                      right_columns:{" "}
                      {step.params_extra.right_columns.join(", ")}
                    </Typography>
                    <br />
                    <Typography component="span" variant="body2">
                      dataset2_name: {step.params_extra.dataset2_name}
                    </Typography>
                  </>
                ) : null
              }
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default WorkflowPanel;

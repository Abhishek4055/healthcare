import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  Box,
} from "@mui/material";

const DashboardTable = ({ data }) => {
  const headers = data.table_headers.slice(1);

  return (
    <Box
      sx={{ border: "1px solid #ccc", borderRadius: "4px", padding: "16px" }}
    >
      <TableContainer
        component={Paper}
        sx={{ overflowX: "auto", maxHeight: 440 }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow sx={{ height: "40px" }}>
              {headers.map((header, index) => (
                <TableCell
                  key={header.name}
                  sx={{
                    fontSize: "0.875rem",
                    padding: "8px",
                    borderRight:
                      index < headers.length - 1 ? "1px solid #ccc" : "none",
                  }}
                >
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
            <TableRow sx={{ height: "30px" }}>
              {headers.map((header, index) => (
                <TableCell
                  key={`${header.name}-type`}
                  sx={{
                    fontSize: "0.875rem",
                    padding: "4px",
                    borderRight:
                      index < headers.length - 1 ? "1px solid #ccc" : "none",
                  }}
                >
                  <Select
                    value={header.type}
                    disabled
                    sx={{ fontSize: "0.75rem", height: "30px" }}
                  >
                    <MenuItem value="string">String</MenuItem>
                    <MenuItem value="int">Int</MenuItem>
                    <MenuItem value="float">Float</MenuItem>
                  </Select>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.table_data.map((row, rowIndex) => (
              <TableRow key={rowIndex} sx={{ height: "40px" }}>
                {row.slice(1).map((cell, cellIndex) => (
                  <TableCell
                    key={`${rowIndex}-${cellIndex}`}
                    sx={{
                      fontSize: "0.875rem",
                      padding: "8px",
                      borderRight:
                        cellIndex < row.length - 2 ? "1px solid #ccc" : "none",
                    }}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardTable;

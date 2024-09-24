import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import jsonData from "../json/jsonData";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return jsonData;
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default dashboardSlice.reducer;

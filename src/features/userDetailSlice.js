import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: true,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state,action) =>{
      state.searchData = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state) => {
        state.loading(false);
      })
      
      .addCase(showUser.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state) => {
        state.loading(false);
        state.error = action.payload;
      })

      .addCase(deleteUser.pending, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const {id} = action.payload

        if(id) {
          state.users = state.users.filter((elem) => elem.id !== id)
        }
      })
      .addCase(deleteUser.rejected, (state) => {
        state.loading(false);
        state.error = action.payload;
      })

      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) => ele.id === action.payload.id ? action.payload : ele)
      })
      .addCase(updateUser.rejected, (state) => {
        state.loading(false);
      });
  },
});


// Create user
export const createUser = createAsyncThunk("createUser", async (data) => {
  const res = await fetch("https://65b8ba03b71048505a894e66.mockapi.io/crud2", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

// Read user
export const showUser = createAsyncThunk(
  "showUser",
  async () => {
    const res = await fetch(
      "https://65b8ba03b71048505a894e66.mockapi.io/crud2"
    );

    try {
      const result = await res.json();
      return result;
    } catch (error) {
      return console.log(error);
    }
  }
);

// Delete user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id) => {
    const res = await fetch(
      `https://65b8ba03b71048505a894e66.mockapi.io/crud2/${id}`,{method: "DELETE"}
    );

    try {
      const result = await res.json();
      return result;
    } catch (error) {
      return console.log(error);
    }
  }
);

// Update user
export const updateUser = createAsyncThunk("updateUser", async (data) => {
  const res = await fetch(`https://65b8ba03b71048505a894e66.mockapi.io/crud2/${data.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
});

export default userDetailSlice.reducer;

export const {searchUser} = userDetailSlice.actions
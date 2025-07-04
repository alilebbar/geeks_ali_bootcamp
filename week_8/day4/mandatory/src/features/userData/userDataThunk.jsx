import { createAsyncThunk } from "@reduxjs/toolkit";


export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkApi) => {
    try {
      const { username, email, password } = user;
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password }),
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const verifyUser = createAsyncThunk(
  "auth/verifyUser",
  async (_, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3000/api/users/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getAllUsers = createAsyncThunk(
  "auth/getAllUser",
  async (_, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getUser = createAsyncThunk(
    "auth/getUser",
    async (id, thunkApi)=>{
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`,{
                method: "GET",
                credentials: "include"
            })
            const data = await response.json()
            console.log(data)
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const deleteUser = createAsyncThunk(
    "auth/deleteUser",
    async (id, thunkApi) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "DELETE",
                credentials: "include"
            })
            const data = await response.json()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const updateUser = createAsyncThunk(
    "auth/updateUser",
    async (user, thunkApi) => {
        try {
            const { username, email, password } = user
            const response = await fetch(`http://localhost:3000/api/users/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ username, email, password }),
            })
            const data = await response.json()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const upgradeToAdmin = createAsyncThunk(
    "auth/upgradeToAdmin",
    async (id, thunkApi) => {
        try {
            const response = await fetch(`http://localhost:3000/api/users/admin/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            })
            const data = await response.json()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
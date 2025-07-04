import { createSlice } from "@reduxjs/toolkit";
import { 
  loginUser, 
  logoutUser, 
  registerUser, 
  verifyUser, 
  getAllUsers, 
  getUser, 
  deleteUser, 
  updateUser, 
  upgradeToAdmin 
} from "./userDataThunk";

// État initial du slice utilisateur
const initialState = {
  user: null,           // Données de l'utilisateur connecté
  loading: false,       // Indique si une requête est en cours
  error: null,          // Message d'erreur en cas d'échec
  message: null,        // Message de succès en cas de réussite
  connected: false,     // Indique si l'utilisateur est connecté
  users: [],            // Liste de tous les utilisateurs (admin)
  showUser: null,       // Détail d'un utilisateur sélectionné
  initialized: false    // Indique si la vérification initiale a été faite
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // ===========================
    // Connexion de l'utilisateur
    // ===========================
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.connected = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.connected = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

    // ===========================
    // Déconnexion de l'utilisateur
    // ===========================
    builder.addCase(logoutUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.connected = false;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = null;
      state.message = action.payload.message;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // ===========================
    // Inscription d'un utilisateur
    // ===========================
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.connected = false;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.connected = false;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

    // ===========================
    // Vérification de l'utilisateur (token)
    // ===========================
    builder.addCase(verifyUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.connected = false;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.loading = false;
      state.connected = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
      state.initialized = true;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
      state.initialized = true;
    });

    // ===========================
    // Récupération de tous les utilisateurs (admin)
    // ===========================
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload ?? [];
      state.connected = true;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

    // ===========================
    // Récupération d'un utilisateur par ID
    // ===========================
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.showUser = action.payload;
      state.connected = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

    // ===========================
    // Suppression d'un utilisateur
    // ===========================
    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.connected = false;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

    // ===========================
    // Mise à jour d'un utilisateur
    // ===========================
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.connected = false;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

    // ===========================
    // Passage d'un utilisateur en admin
    // ===========================
    builder.addCase(upgradeToAdmin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(upgradeToAdmin.fulfilled, (state, action) => {
      state.loading = false;
      state.message = action.payload.message;
      state.connected = false;
    });
    builder.addCase(upgradeToAdmin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.connected = false;
    });

  },
});

export default userDataSlice.reducer;

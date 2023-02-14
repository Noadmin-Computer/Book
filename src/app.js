import express from "express";
import { ENV } from "./common/config.js";
import ConnectDb from "./common/db/connect.db.js";

// routes
import userRoutes from "./book/router/user/user.routes.js";
import mainRoutes from "./book/router/main/main.routes.js";
import searchRoutes from "./book/router/search/search.routes.js";
import storeRoutes from "./book/router/store/store.routes.js";
import authToken from "./book/middleware/authToken.js";

const app = new express();

app.use(express.json());

app.use("/sign", userRoutes);
app.use("/main", mainRoutes);
app.use("/search", searchRoutes);
// app.use(authToken);
app.use("/store", storeRoutes);

async function start() {
  console.log(`Server is running on port ${ENV.PORT}`);
  ConnectDb();
}

app.listen(ENV.PORT, start());

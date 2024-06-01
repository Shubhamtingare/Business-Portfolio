const express = require("express");
const authRouter = require("./routers/auth-router");
const contactRouter = require("./routers/contact-router");
const serviceRouter = require("./routers/service-router");
const adminRouter = require("./routers/admin-router");
const dbConn = require("./database/dbConn");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/user", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);
dbConn().then(() => {
  app.listen(port, () => {
    console.log(`server is live at ${port}`);
  });
});

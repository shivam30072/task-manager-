const connectDB = require("./db/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const errorHandlerMiddleware = require("./middleware/error-handler");
require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.static("./public"));
app.use(errorHandlerMiddleware);

const PORT = 5000;
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`server is running on PORT:${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();

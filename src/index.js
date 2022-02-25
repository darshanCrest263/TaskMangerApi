const express = require("express");
require("./db/mongoose.js");
const userRouter = require("./routers/users.js");
const taskRouter = require("./routers/tasks.js");

const app = express();
const port = process.env.PORT;
console.log(port);

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Live server is running...");
});

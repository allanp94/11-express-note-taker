const htmlRoutes = require("./routes/htmlRoutes");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Notes server now on port ${PORT}!`);
});

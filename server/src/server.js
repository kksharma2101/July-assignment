import app from "./app.js";

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

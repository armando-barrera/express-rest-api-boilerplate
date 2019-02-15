const app = require("./app");
const { APP_NAME, ENV, PORT } = require("./config/config");

app.listen(PORT, () => {
  // if (
  //   ENV !== "production" &&
  //   ENV !== "development" &&
  //   ENV !== "testing"
  // ) {
  //   console.log("NODE_ENV must be production or development");
  //   process.exit(1);
  // }
  console.log(`${APP_NAME} running on port ${PORT}`);
});

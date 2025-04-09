import dotenv from "dotenv";
import { DB } from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

/* DB connection approach 1
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("ERROR-in_DB", err);
//       console.error(err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`our app is listining on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("ERROR-in connecting database: ", error);
//     throw error;
//   }
// })();
*/

DB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!: ", err);
  });

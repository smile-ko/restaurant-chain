import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import session from "express-session";
import fileUpload from "express-fileupload";
import expressLayouts from "express-ejs-layouts";

import route from "./routes";
import * as config from "./configs";

dotenv.config();

const app = express();
const port = process.env.PORT || 8888;

// set the view engine to ejs - how to config detail to folder src/configs/views
app.use(expressLayouts);
app.set("view engine", "ejs");

// Static files
app.use(express.static("src/public"));

// Multiple view folders
app.set("views", "src/resources/views");

// Setup session
app.use(session(config.session));

// Use the express-file upload middleware
app.use(
  fileUpload({
    createParentPath: true,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB limit
    },
  }),
);

// Logger request
app.use(morgan("dev"));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Init route
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}: http://localhost:${port}`);
});

/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended:true});

app.use(jsonParser);
app.use(urlEncodedParser)

const ipFn = require("./middleware/getIpAddress");
app.use("*",ipFn);

/** Methods */
app.get("/",(req, res, next) => {
    res.send("Welcome to academic rest api.");
});

// user routes loading
const userRoutes = require("./routes/user.route");
userRoutes(app);

// token middleware

tkFn = require("./middleware/verifyToken");
app.use(tkFn)

// student routes loading
const studentRoutes = require("./routes/student.route");
studentRoutes(app);

// teacher routes loading
const teacherRoutes = require("./routes/teacher.route");
teacherRoutes(app);

// period routes loading
const periodRoutes = require("./routes/period.route");
periodRoutes(app);

// course routes loading
const courseRoutes = require("./routes/course.route");
courseRoutes(app);

// faculty routes loading
const facultyRoutes = require("./routes/faculty.route");
facultyRoutes(app);

// program routes loading
const programRoutes = require("./routes/program.route");
programRoutes(app);


app.listen(port, () => {
    console.log("Server is runnig...");
});
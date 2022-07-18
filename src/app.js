/* --- Imports Modules ---  */
const express = require("express");
const morgan = require("morgan");
/* --- Imports Routes ---  */
const indexRoute = require("./routes/index");
/* --- Variables --- */
const app = express();
const setPORT = 8080;
/* --- Configurations ---  */
app.set("port", process.env.PORT || setPORT);
const PORT = app.get("port");
/* --- Middleware ---  */
app.use(morgan("tiny"));
/* --- Routes ---  */
app.use("/", indexRoute);
/* --- Server --- */
app.listen(PORT, (req, res) => {
	console.log(`Servidor escuchando el puerto: ${PORT}`);
});

const http = require("http");

// app object - module scaffolding
const app = {};

// app configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(
        app.config.port,
        () => `server is running at port ${app.config.port}`
    );
};

// * handle Request Response
app.handleReqRes = (req, res) => {
    res.end("hello programmers");
};

// ! starting the server
app.createServer()
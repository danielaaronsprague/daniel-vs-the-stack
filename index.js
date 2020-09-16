// const path = require("path");
// const express = require("express");
// const morgan = require("morgan");
// const PORT = process.env.PORT || 1337;
// const app = express();
// const http2 = require("http2");
// const fs = require("fs");
// const mime = require("mime");
// const compression = require("compression");
// const fallback = require("express-history-api-fallback");
// const root = `${__dirname}/public`;

// const {
//   HTTP2_HEADER_PATH,
//   HTTP2_HEADER_METHOD,
//   HTTP_STATUS_NOT_FOUND,
//   HTTP_STATUS_INTERNAL_SERVER_ERROR,
// } = http2.constants;

// // Log requests
// app.use(morgan("dev"));

// app.use(compression());

// // Serve up static files
// app.use(express.static(path.join(__dirname, ".", "node_modules")));
// app.use(express.static(path.join(__dirname, ".", "public")));
// app.use(express.static(root));
// app.use(fallback("index.html", { root }));

// // Parse incoming requests
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) =>
//   path.extname(req.path).length > 0 ? res.status(404).send("Not found") : next()
// );

// app.use("*", (req, res, next) =>
//   res.status(200).sendFile(path.join(__dirname, ".", "public/index.html"))
// );

// app.use((err, req, res, next) =>
//   res.status(err.status || 500).send(err.message || "Internal server error.")
// );

// app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// const options = {
//   key: fs.readFileSync("./server.key"),
//   cert: fs.readFileSync("./server.crt"),
//   allowHTML1: true,
// };

// const server = http2.createSecureServer(options);

// const serverRoot = "./public";

// function respondToStreamError(err, stream) {
//   console.log(err);
//   if (err.code === "ENOENT") {
//     stream.respond({ ":status": HTTP_STATUS_NOT_FOUND });
//   } else {
//     stream.respond({ ":status": HTTP_STATUS_INTERNAL_SERVER_ERROR });
//   }
//   stream.end();
// }

// server.on("stream", (stream, headers) => {
//   const reqPath = headers[HTTP2_HEADER_PATH];
//   const reqMethod = headers[HTTP2_HEADER_METHOD];

//   const fullPath = path.join(serverRoot, reqPath);
//   const responseMimeType = mime.lookup(fullPath);

//   if (fullPath.endsWith(".html")) {
//     console.log("html");
//     // handle HTML file
//     stream.respondWithFile(
//       fullPath,
//       {
//         "content-type": "text/html",
//       },
//       {
//         onError: (err) => {
//           respondToStreamError(err, stream);
//         },
//       }
//     );

//     stream.pushStream(
//       { ":path": "/font.woff" },
//       { parent: stream.id },
//       (pushStream) => {
//         console.log("pushing");
//         pushStream.respondWithFile(
//           path.join(serverRoot, "/font.woff"),
//           {
//             "content-type": "text/css",
//           },
//           {
//             onError: (err) => {
//               respondToStreamError(err, pushStream);
//             },
//           }
//         );
//       }
//     );
//   } else {
//     // handle static file
//     console.log(fullPath);
//     stream.respondWithFile(
//       fullPath,
//       {
//         "content-type": responseMimeType,
//       },
//       {
//         onError: (err) => respondToStreamError(err, stream),
//       }
//     );
//   }
// });

// server.listen(1338);

// module.exports = app;

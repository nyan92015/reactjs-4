import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
import express from "express";
import fs from "fs";
import path from "path";

const html = ReactDOMServer.renderToString(<App />);

const responseHtml = `
  <html>
    <head>
      <title>Reactjs-4</title>
      <link rel="stylesheet" href="/styles.css" type="text/css"/>
    </head>
    <body>
      <div id="root">${html}</div>
      <script src="/client.js"></script>
    </body>
  </html>
`;

const app = express();
const PORT = 9000;

app.use(express.static(path.resolve(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.send(responseHtml);
});

app.listen(PORT, () => console.log("サーバが立ち上がりました。"));

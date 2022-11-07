import http from "node:http";
const port = process.env.PORT || 8080;
const requestListener = async function (req, res) {
  console.log("start");
  if (req.method === "POST") {
    let index = 0;
    res.writeHead(200);
    for await (const chunk of req) {
      console.log(`client send ${chunk.toString()}`);
      res.write(
        `server response ${index++}, after client send ${chunk.toString()}`
      );
    }
    res.end();
  } else {
    res.setHeader("Allow", "POST");
    res.writeHead(405).end("Method Not Allowed");
  }
};

const server = http.createServer(requestListener);
server.listen(port);

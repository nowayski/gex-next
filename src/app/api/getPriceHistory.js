import axios from "axios";

export default function handler(req, res) {
  if (req.method === "GET") {
    console.log("Started my getPriceHistory request.");
    console.log(req.query);
    let my_url = `https://api.weirdgloop.org/exchange/history/rs/last90d?id=${req.query.name}`;
    const options = {
      headers: {
        accept: "application/json",
        "User-Agent": "GEX Application Dev",
      },
    };
    axios
      .get(my_url, options)
      .then((response) => {
        console.log(`Reponse Status: ${response.status}`);
        console.log("DATA REQUESTED");
        formatHistoryData(response.data);
        res.json(response.data);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  } else {
    return res.status(405).end();
  }
}

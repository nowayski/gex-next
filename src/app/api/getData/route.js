import axios from "axios";
import { NextResponse } from "next/server";

//TODO: rewrite this function without axios, and without replaceAll
export async function POST(request) {
  console.log("Hello");
  try {
    console.log("Started my data get request");
    let data = [];
    let finalData;
    let itemName = request.body.name;
    console.log(itemName);
    itemName = itemName.replaceAll(", ", "%7C");
    itemName = itemName.replaceAll(",", "%7C");
    itemName = itemName.replace(/ /g, "%20");
    itemName = itemName.replaceAll("(", "%28");
    itemName = itemName.replaceAll("(", "%29");
    itemName = itemName.replaceAll("'", "%27");
    console.log(itemName);
    let my_url = `https://api.weirdgloop.org/exchange/history/rs/latest?name=${itemName}`;
    const options = {
      headers: {
        accept: "application/json",
        "User-Agent": "GEX Application Dev",
      },
    };

    const response = await axios.get(my_url, options);
    console.log(`Response Status: ${response.status}`);
    console.log(response.data);
    return NextResponse.json(response.json());
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Something went wrong" });
  }
}

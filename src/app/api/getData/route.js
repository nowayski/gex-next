import { NextResponse } from "next/server";

//TODO: rewrite this function without axios, and without replaceAll
// const encodedItemName =  encodeUriComponent(itemName)
export async function GET(request) {
  console.log("Hello");
  try {
    console.log("Started my data get request");
    let data = [];
    const { searchParams } = new URL(request.url);
    const ids = searchParams.get("name");
    console.log("Item name is: " + ids);
    let new_ids = ids
      .split(",")
      .map((item) => item.trim().replace(/\s+/g, " "))
      .join("|");
    console.log("New item id is " + new_ids);
    let my_url = `https://api.weirdgloop.org/exchange/history/rs/latest?name=${encodeURIComponent(
      new_ids
    )}`;
    console.log(my_url);
    const response = await fetch(my_url, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "GEX Application Dev",
      },
    });
    data = await response.json();
    console.log(data);
    return NextResponse.json({ data });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

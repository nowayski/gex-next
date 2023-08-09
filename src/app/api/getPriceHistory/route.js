import { NextResponse } from "next/server";

function formatHistoryData(data) {
  console.log(data);
  const formattedData = Object.values(data).map((items) => {
    return items.map((item) => {
      return {
        ...item,
        timestamp: formatTimestamp(item.timestamp),
      };
    });
  });
  console.log(formattedData);
  return formattedData;
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const datevalues = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;
  return datevalues;
}

export async function GET(request) {
  try {
    console.log("Started my getPriceHistory request.");

    const { searchParams } = new URL(request.url);
    const param = searchParams.get("name");

    let my_url = `https://api.weirdgloop.org/exchange/history/rs/last90d?id=${encodeURIComponent(
      param
    )}`;
    console.log(my_url);
    const response = await fetch(my_url, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "GEX Application Dev",
      },
    });
    let data = await response.json();
    data = formatHistoryData(data);
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

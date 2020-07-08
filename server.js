const puppeteer = require("puppeteer");
const express = require("express");
const app = express();

app.use(express.static("public"));

app.post("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto("http://imoti.bg/");

    var latest = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll(".offersList")
      ).map((section) => section.innerText.trim().split("\n"));
    });
    latest = Object.values(latest).map((section) => {
      return Object.values(section).map((offer) => {
        offer = offer.trim("\t").split(",");
        return {
          name: offer[0],
          squareMeters: offer[1],
          price: offer[2],
          location: offer[3],
        };
      });
    });
    res.send([...latest[0], ...latest[1]]);
  } catch (error) {
    res.send(error);
  }
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Run !");
});

const express = require("express");
var cors = require("cors");

const app = express();
const data = require("./data.json");

const port = 555;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/s/:searchItem", (req, res) => {
  let searchWord = req.params.searchItem;
  //console.log(typeof searchWord);
  //console.log(searchWord);
  const searchedData = [];
  const coupons = data.coupons;
  coupons.map((i) => {
    if (i.from.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1) {
      searchedData.push(i);
    }
  });
  res.json(searchedData);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

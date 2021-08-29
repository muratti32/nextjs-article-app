import { articles } from "../../../data";

const getData = () => {
  console.log("halooo");
  fetch("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((data) => {
      console.log("fetched data : ", data);
      return data.json();
    })
    .then((data) => {
      console.log("last data : ", data);
    });
};

export default function handler(req, res) {
  getData();
  res.status(200).json(articles);
}

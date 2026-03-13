console.log("Web3 Discovery Scanner Initialized");

const categories = [
 "ZK",
 "AI",
 "Infrastructure",
 "Restaking"
];

categories.forEach(c=>{
 console.log("Scanning category:",c);
});
const fs = require("fs");

let data = require("./data.json");

data.projects.push({
  name: "NewAIChain",
  sector: "AI compute",
  airdrop: true,
  status: "testnet"
});

fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

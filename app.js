const projects = [
 {name:"Aztec",type:"zk rollup"},
 {name:"Gensyn",type:"AI compute"},
 {name:"Ritual",type:"AI network"}
];

function discoverProjects(){
 console.log("Scanning Web3 ecosystem...\n");

 projects.forEach(project=>{
  console.log("Project:",project.name,"| Category:",project.type);
 });
}

discoverProjects();
const fs = require("fs");

const data = JSON.parse(fs.readFileSync("data.json"));

function discoverProjects(){
 console.log("Scanning Web3 ecosystem...\n");

 data.projects.forEach(project=>{
  console.log(
   "Project:",
   project.name,
   "| Category:",
   project.category,
   "| Status:",
   project.status
  );
 });
}

discoverProjects();

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

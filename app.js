const fs = require("fs");

// Load dataset
const data = JSON.parse(fs.readFileSync("data.json"));

// Banner
function showBanner() {
  console.log("====================================");
  console.log("   Web3 Project Discovery Scanner   ");
  console.log("====================================\n");
}

// Discover projects
function discoverProjects() {
  console.log("🔍 Scanning Web3 Ecosystem...\n");

  data.projects.forEach((project, index) => {
    console.log(
      index + 1 + ".",
      "Project:", project.name,
      "| Category:", project.category,
      "| Status:", project.status
    );
  });

  console.log("\nScan completed.\n");
}

// Filter by category
function filterByCategory(category) {
  console.log("\n📊 Projects in category:", category, "\n");

  const filtered = data.projects.filter(
    project => project.category.toLowerCase() === category.toLowerCase()
  );

  filtered.forEach(project => {
    console.log(project.name, "| Status:", project.status);
  });
}

// Show project summary
function showSummary() {
  console.log("\n📈 Ecosystem Summary\n");

  const total = data.projects.length;

  const categories = {};

  data.projects.forEach(project => {
    if (!categories[project.category]) {
      categories[project.category] = 0;
    }
    categories[project.category]++;
  });

  console.log("Total Projects:", total);
  console.log("\nCategory Breakdown:");

  for (let cat in categories) {
    console.log(cat + ":", categories[cat]);
  }
}

// Run tool
function run() {
  showBanner();
  discoverProjects();
  showSummary();

  // Example filter
  filterByCategory("AI Compute");
}

run();

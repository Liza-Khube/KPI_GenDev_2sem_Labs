const fs = require("fs");
const readline = require("readline");

const processUser = async function (fileName) {
  const stream = fs.createReadStream(fileName);
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let totalUserCount = 0;
  let bestUsersCount = 0;
  let bestUsers = [];

  for await (const line of rl) {
    try {
      const user = JSON.parse(line);
      totalUserCount++;
      if (user.rating >= 4.5) {
        bestUsersCount++;
        bestUsers.push({
          name: user.name,
          rating: user.rating,
        });
      }
    } catch (err) {
      console.error("Error parsing line:", err);
    }
  }

  console.log(`Total users processed: ${totalUserCount}`);
  console.log(`The best users (total: ${bestUsersCount}):`);
  bestUsers.forEach((user) => {
    console.log(`${user.name}: ${user.rating}`);
  });
};

processUser("Lab_6/data.jsonl");

const generateBigArray = () => {
  const firstNames = [
    "Marlee",
    "Amira",
    "Rachel",
    "Jaxson",
    "Reid",
    "Dawson",
    "Jared",
    "Alvin",
    "Ismael",
    "Gabriella",
  ];
  const lastNames = [
    "Harris",
    "Joseph",
    "Stafford",
    "Simon",
    "Harding",
    "Gray",
    "Reyes",
    "Osborne",
    "McClure",
    "Hobbs",
  ];
  const domains = [
    "gmail.com",
    "facebook.com",
    "linkedin.com",
    "outlook.com",
    "yahoo.com",
  ];

  const results = [];
  const startDate = new Date(2020, 0, 1).getTime();
  const endDate = new Date(2025, 5, 28).getTime();

  for (let id = 1; id <= 200; id++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * 50) + 16;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${id % 100}@${
      domains[Math.floor(Math.random() * domains.length)]
    }`;
    const rating = parseFloat((Math.random() * 5).toFixed(1));
    const registered = new Date(
      startDate + Math.random() * (endDate - startDate)
    ).toISOString();

    results.push({
      id,
      name: `${firstName} ${lastName}`,
      age,
      email,
      rating,
      registered,
    });
  }

  return results;
};

console.log(JSON.parse(generateBigArray()));

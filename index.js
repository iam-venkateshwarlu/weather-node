const express = require("express");
const app = express();
const path = require("path");

// Set EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Route to render the weather form
app.get("/", (req, res) => {
  res.render("index", { error: null, weather: null });
});

// Route to fetch weather data
app.get("/weather", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.render("index", { error: "City name is required", weather: null });
  }

  try {
    // Example: Call a weather API to get data (replace with your actual API logic)
    const weather = {
      main: { temp: 72 },
      weather: [{ main: "Cloudy" }],
      name: "Sample City",
      sys: { country: "US" },
    };

    res.render("index", { error: null, weather });
  } catch (err) {
    res.render("index", { error: "Could not fetch weather data", weather: null });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

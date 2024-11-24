const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 5000;
const FEEDBACKS_FILE = "./src/server/feedbacks.json";

// Middleware
app.use(express.json());
app.use(cors());

// Handle POST request to save feedback
app.post("/feedback", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Read existing feedbacks
  fs.readFile(FEEDBACKS_FILE, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading feedbacks.json:", err);
      return res.status(500).json({ error: "Failed to read feedback file" });
    }

    const feedbacks = JSON.parse(data || "[]");
    const newFeedback = {
      id: feedbacks.length + 1,
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    };

    // Append the new feedback
    feedbacks.push(newFeedback);

    // Write updated feedbacks to the file
    fs.writeFile(FEEDBACKS_FILE, JSON.stringify(feedbacks, null, 2), (err) => {
      if (err) {
        console.error("Error writing to feedbacks.json:", err);
        return res.status(500).json({ error: "Failed to save feedback" });
      }

      res.status(201).json({ message: "Feedback submitted successfully" });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

import axios from "axios";
import "dotenv/config";

export async function getCruxReport(req, res) {
  try {
    const { url } = req.body;
    const response = await axios.post(
      `https://chromeuxreport.googleapis.com/v1/records:queryRecord?key=${process.env.CRUX_API_KEY}`,
      {
        formFactor: "DESKTOP",
        url,
        metrics: [
          "largest_contentful_paint",
          "first_contentful_paint",
          "cumulative_layout_shift",
          "experimental_time_to_first_byte",
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response", response.data);
    res.json(response.data.record.metrics);
  } catch (error) {
    console.log("error", error.response ? error.response.data : error.message);
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ error: error.message });
    }
  }
}

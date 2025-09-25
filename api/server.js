import express from "express";
import { google } from "googleapis";
import cors from "cors";

// โหลด credentials จากไฟล์ JSON (จาก Google Cloud)
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

const app = express();
app.use(
  cors()
);
app.use(express.json());

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// ใส่ Spreadsheet ID ของคุณ
const SPREADSHEET_ID = "13sEwRlrUA2qfj4V5GkX4B-_2SZEwhmX3amfl5J5d23M";
const SPREADSHEET_ID_pill2 = "11EhMJEkZAzKlACnh7pG-is0E_dnfuvS1NR2xiZWeZek";
const SPREADSHEET_ID_pillM = "1OmYClIjHQQS4bruvK2dZ5_L9xRNvV372epU57bbKqpY";

app.post("/add", async (req, res) => {
  try {
    const { uid, gender, age, selectedDate, hasProtection } = req.body;
    const numericAge = Number(age);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
      values: [[uid, gender, numericAge, selectedDate, hasProtection]],
      },
    });

    res.json({ success: true, response: response.data });
    console.log('data added', response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/pill2", async (req, res) => {
  try {
    const { uid, gender, age, selectedDate, pillDate, pillTime } = req.body;
    const numericAge = Number(age);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID_pill2,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
      values: [[uid, gender, numericAge, selectedDate, pillDate, pillTime]],
      },
    });

    res.json({ success: true, response: response.data });
    console.log('data added', response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/pillM", async (req, res) => {
  try {
    const { uid, gender, age, selectedDate, pillDate, pillTime } = req.body;
    const numericAge = Number(age);

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID_pillM,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
      values: [[uid, gender, numericAge, selectedDate, pillDate, pillTime]],
      },
    });

    res.json({ success: true, response: response.data });
    console.log('data added', response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});


export default app;

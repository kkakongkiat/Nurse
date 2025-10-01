import { google } from "googleapis";

// โหลด credentials จาก environment variable
const credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// ใส่ Spreadsheet ID ของคุณ
const SPREADSHEET_ID = "13sEwRlrUA2qfj4V5GkX4B-_2SZEwhmX3amfl5J5d23M";
const SPREADSHEET_ID_pill2 = "11EhMJEkZAzKlACnh7pG-is0E_dnfuvS1NR2xiZWeZek";
const SPREADSHEET_ID_pillM = "1OmYClIjHQQS4bruvK2dZ5_L9xRNvV372epU57bbKqpY";
const SPREADSHEET_ID_inject1M = "1ZH-F3EXr964Vrh2Ryh-hTTZ2QRW_TNGUQPY0u6GzPnE"
const SPREADSHEET_ID_inject3M = "1ZbbLwBLCks22CpLfugV03A5e957eEBg3ps7xDFxcm_I"

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { endpoint } = req.query; // ส่ง endpoint เป็น query เช่น ?endpoint=add
  const { uid, gender, age, selectedDate, hasProtection, pillDate, pillTime,injectDate } = req.body;
  const numericAge = Number(age);

  try {
    let spreadsheetId;
    let values;

    switch (endpoint) {
      case "add":
        spreadsheetId = SPREADSHEET_ID;
        values = [[uid, gender, numericAge, selectedDate, hasProtection]];
        break;
      case "pill2":
        spreadsheetId = SPREADSHEET_ID_pill2;
        values = [[uid, gender, numericAge, selectedDate, pillDate, pillTime]];
        break;
      case "pillM":
        spreadsheetId = SPREADSHEET_ID_pillM;
        values = [[uid, gender, numericAge, selectedDate, pillDate, pillTime]];
        break;
      case "inject1M":
        spreadsheetId = SPREADSHEET_ID_inject1M;
        values = [[uid, gender, numericAge, selectedDate, injectDate]];
        break;
      case "inject3M":
        spreadsheetId = SPREADSHEET_ID_inject3M;
        values = [[uid, gender, numericAge, selectedDate, injectDate]];
        break;
      default:
        return res.status(400).json({ success: false, error: "Invalid endpoint" });
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values },
    });

    console.log("Data added:", values);
    return res.status(200).json({ success: true, response: response.data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
}

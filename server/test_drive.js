require('dotenv').config();
const { google } = require('googleapis');

const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'],
});

const drive = google.drive({ version: 'v3', auth });
const sheets = google.sheets({ version: 'v4', auth });

async function pingTemplate() {
    const fileId = "15SFU7VFOsKETzYQRQNdUqsvC26INrJIejiwPo-VzfW8";
    try {
        const sheetMeta = await sheets.spreadsheets.get({ spreadsheetId: fileId });
        console.log("-> SHEETS API FUNCIONA! Hojas dentro del ID:", sheetMeta.data.sheets.map(s => s.properties.title));
    } catch (err) {
        console.error("-> ERROR PING:", err.message);
    }
}

pingTemplate();

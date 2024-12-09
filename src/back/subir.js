const express = require('express');
const bodyParser = require('body-parser');
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

// Crear una nueva instancia de Express
const app = express();
const port = 3002;

// Configuración de Body-Parser para manejar solicitudes JSON
app.use(bodyParser.json());

// Cargar las credenciales de Google
const credentials = require('./datos.json');

// Autenticación con Google Sheets API
async function authenticateGoogleSheets() {
  const { client_email, private_key } = credentials;
  const auth = new google.auth.JWT(
    client_email,
    null,
    private_key,
    ['https://www.googleapis.com/auth/spreadsheets'],
    null
  );
  await auth.authorize();
  return google.sheets({ version: 'v4', auth });
}

// Ruta para agregar datos a Google Sheets
app.post('/add-to-sheets', async (req, res) => {
  try {
    // Autenticar
    const sheets = await authenticateGoogleSheets();

    // ID de la hoja de cálculo (reemplázalo por tu ID de hoja de cálculo de Google Sheets)
    const spreadsheetId = '1Rz5YMzd35uLztNJFBVftkWIgm4MsYpqZdObrRqq0gPo';

    // Obtener los datos del cuerpo de la solicitud
    const { nombre, fechaNacimiento, genero, region, comuna, coberturaMedica, numeroContacto } = req.body;

    // Formatear los datos para agregar a la hoja
    const values = [
      [nombre, fechaNacimiento, genero, region, comuna, coberturaMedica, numeroContacto],
    ];

    // Definir el rango de la hoja donde se agregarán los datos
    const range = 'A2:G2'; // Asume que empiezas a escribir en la fila 2 (ajusta según tu hoja)

    // Escribir los datos en la hoja de cálculo
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values,
      },
    });

    // Responder con éxito
    res.status(200).send({ message: 'Datos enviados correctamente a Google Sheets' });
  } catch (error) {
    console.error('Error al agregar datos:', error);
    res.status(500).send({ message: 'Error al procesar la solicitud' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});

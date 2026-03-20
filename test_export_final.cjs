const http = require('http');
const fs = require('fs');

const data = JSON.stringify({
  metrados: [
    {
      item: "OE.1.1.1",
      descripcion: "ITEM PRUEBA REESCRITO FINAL",
      unidad: "m2",
      cantidad: 25,
      largo: 5,
      ancho: 5,
      veces: 1,
      parcial: 25,
      total: 25
    }
  ],
  proyecto: "hospital"
});

const options = {
  hostname: 'localhost',
  port: 3001,
  path: '/api/export/metrados',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(data)
  }
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);

  if (res.statusCode === 200) {
    const file = fs.createWriteStream('d:\\00_OFI_PRESUPUESTOS\\buscardormetrados\\test_export_final.xlsx');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Exportación exitosa. Archivo guardado.');
    });
  } else {
    let body = '';
    res.on('data', (d) => {
      body += d;
    });
    res.on('end', () => {
      console.error('Error en la respuesta:', body);
    });
  }
});

req.on('error', (error) => {
  console.error('Error de conexión:', error.message);
});

req.write(data);
req.end();

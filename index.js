require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    // Configuramos el encabezado con UTF-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    // Creamos la vista con caracteres correctamente codificados
    const html = `
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <title>Servidor en Render</title>
            </head>
            <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
                <h1>🚀 Bienvenidos al curso</h1>
                <p>Aplicación desplegada correctamente en Render</p>
            </body>
        </html>
    `

    // Enviamos el HTML como un buffer UTF-8
    res.end(Buffer.from(html, 'utf-8'))
}

const server = http.createServer(requestController)
const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log("Aplicación corriendo en el puerto: " + PORT)
})

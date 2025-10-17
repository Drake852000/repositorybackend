require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    // Establecer el tipo de contenido como HTML
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    // Enviar una vista sencilla al navegador
    res.write(`
        <html>
            <head>
                <title>Servidor en Render</title>
            </head>
            <body style="font-family: sans-serif; text-align: center; margin-top: 50px;">
                <h1>🚀 Bienvenidos al curso</h1>
                <p>Aplicación desplegada correctamente en Render</p>
            </body>
        </html>
    `)

    // Finalizar la respuesta
    res.end()
}

const server = http.createServer(requestController)
const PORT = process.env.PORT || 3000

server.listen(PORT, function() {
    console.log("Aplicación corriendo en el puerto: " + PORT)
})

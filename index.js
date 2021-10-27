const http = require('http')

const server = http.createServer((req, res) => {
    const {url} = req
    if (url === "/") {
        res.write('Welcome Home')
    } else if (url === '/users') {
        res.write("Welcome to users")
    }
    res.end()
})
server.listen(5055)
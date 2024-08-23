const fastify = require('fastify');
//const fistify = require('fastify');

const start = async () => {
    const app = fastify();
    const PORT = process.env.PORT || 3000
    app.listen(
        { port: PORT, host: "0.0.0.0" },
        (err, add) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Aynaghor started on http://localhost:${PORT}`)
            }
        }
    )
}

start();
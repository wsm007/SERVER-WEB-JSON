const { envs } = require( './config/env.js')
const { startServer } = require('./server/server.js')

// Para proyectos que deben iniciar de form asíncrona
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

// Función agnóstica autoconvocada
// Agnóstica porque no tiene nombre
// Autoconvocada porque la ejecutamos con los parétesis vacios
( async () => {
    main()
})()
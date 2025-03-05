import colors from 'colors';
import server from './server';

const port = process.env.PORT || 3001;

server.listen(port, () => {
    console.log( colors.cyan.bold( `SERVIDOR CONECTADO EN EL PUERTO: ${port}`))
})
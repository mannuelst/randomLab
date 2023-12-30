import 'dotenv/config';
import { fastify } from "fastify";
import { DatabaseMemory } from './src/database_memory.js';
const server = fastify({logger:true});

//let porta= 3333
const DATABASE_MEMORY = new DatabaseMemory()


/*ROTTAS | */

server.get('/videos', (request, reply)=>{
    return "All videos"
})
server.post('/video', (request, reply)=>{
    DATABASE_MEMORY.create({
        titulo: "Video 01",
        descricao: "Esse é o video 01",
        duracao: 180,
    })
})
server.put('/videos/:id', ()=>{
    return "delet video"
})
server.delete('/video/:id', ()=>{
    return "DELETING"
})


//SERVER 
server.listen({port:process.env.PORT,}, ()=>{
    console.log(`Server's running on PORT: ${process.env.PORT}
    `)})
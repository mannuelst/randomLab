import 'dotenv/config';
import { fastify } from "fastify";
import { DatabaseMemory } from './src/db_memory.js';
const server = fastify({logger:true});

//let porta= 3333
const DATABASE_MEMORY = new DatabaseMemory()


/*ROTTAS | */

server.get('/videos', ()=>{
   
   const videos = DATABASE_MEMORY.listar()
   return videos
})
server.post('/videos', (request, reply)=>{
    const { titulo,descricao, duracao } = request.body
    DATABASE_MEMORY.criar({
        titulo,
        descricao,
        duracao
    })


    return reply.status(201).send()
})
server.put('/videos/:id', (request, reply)=>{
    const video_id = reque
})
server.delete('/video/:id', ()=>{
    return "DELETING"
})


//SERVER 
server.listen({port:process.env.PORT,}, ()=>{
    console.log(`Server's running on PORT: ${process.env.PORT}
    `)})
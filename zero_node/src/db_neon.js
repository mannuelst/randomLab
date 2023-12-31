import { sql } from "./db.js";

import { randomUUID } from 'node:crypto'
export class DatabaseMemory{
    #videos= new Map()

    criar(video){
        const video_id = randomUUID()

        this.#videos.set(video_id, video)
         
    }
    listar(search){
       return Array.from(this.#videos.entries()).map((arrayVideo)=>{
        const [id, body] = arrayVideo
        return{
            id,
           ...body
        }
       }).filter( video =>{
        if(search){
            return video.titulo.includes(search)
        }
        return true
       })
    }
    actualizar(video_id, video){
        this.#videos.set(video_id, video)
    }
    eliminar(video_id){
        this.#videos.delete(video_id)
    }
}
import { randomUUID } from 'node:crypto'
export class DatabaseMemory{
    #videos= new Map()

    criar(video){
        const video_id = randomUUID()

        this.#videos.set(video_id, video)
         
    }
    listar(){
       return Array.from(this.#videos.values())
    }
    actualizar(video_id, video){
        this.#videos.set(video_id, video)
    }
    eliminar(video_id){
        this.#videos.delete(video_id)
    }
}
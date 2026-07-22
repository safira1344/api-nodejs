import { type FastifyInstance, type FastifyPluginOptions, type FastifyRequest, type FastifyReply } from "fastify"
import { CreateCustomerController } from "./controllers/CreateCustomerController.js"
import {ListCustomersController} from './controllers/ListCustomersController.js'

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    //criar um novo registro, criar um novo cliente na aplicação
    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new  CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })
}
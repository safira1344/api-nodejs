import type { FastifyReply, FastifyRequest } from "fastify";
import { ListCustomersService } from "../services/ListCustomersService.js";



class ListCustomersController {
    async handle(request:FastifyRequest, reply: FastifyReply) {
        const listCustomerService = new ListCustomersService();

        const customers = await listCustomerService.execute();
    }
}

export {ListCustomersController}
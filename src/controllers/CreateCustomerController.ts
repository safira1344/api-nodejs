import { type FastifyRequest, type FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService.js'

class CreateCustomerController{
    //responsável por "lidar com" alguma ação, evento ou dado. "tratar", "manipular" ou "gerenciar"
    async handle(request: FastifyRequest, reply: FastifyReply){
        const customeService = new CreateCustomerService()

        const customer = await customeService.execute();

        reply.send(customer)
    }
}

export {CreateCustomerController}
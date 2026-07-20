import { type FastifyRequest, type FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService.js'

class CreateCustomerController{
    //responsável por "lidar com" alguma ação, evento ou dado. "tratar", "manipular" ou "gerenciar"
    async handle(request: FastifyRequest, reply: FastifyReply){

        const {name, email} = request.body as { name: string, email: string};

        const customeService = new CreateCustomerService()

        const customer = await customeService.execute({name, email});

        reply.send(customer)
    }
}

export {CreateCustomerController}
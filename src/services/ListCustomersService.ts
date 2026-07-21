import prismaClient from "../index.js"

class ListCustomersService {
    async execute() {
        const customers = await prismaClient.customer.findMany()
        return customers
    } 
}

export {ListCustomersService}
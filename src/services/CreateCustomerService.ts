import prismaClient from "../index.js";

class CreateCustomerService{
    async execute() {
        console.log("Rota foi chamada!");

        return { ok: true }
    }
}

export { CreateCustomerService }
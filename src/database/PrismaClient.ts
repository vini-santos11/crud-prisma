import { PrismaClient } from '@prisma/client'
import { Todo } from '../entities/todo'

export const prisma = new PrismaClient()

async function main() {
    const todos = await prisma.todo.findMany()

    console.log(todos)
}

main().then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  })
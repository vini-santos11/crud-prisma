import { PrismaClient } from '@prisma/client'
import { Todo } from '../entities/todo'

export const prisma = new PrismaClient()

async function main() {
  // const todo = await prisma.todo.create({
  //   data: {
  //     title: 'Prisma makes databases easy',
  //     description: 'Prisma is a modern database access toolkit that makes databases easy. Prisma is a modern database access toolkit that makes databases easy. Prisma is a modern database access toolkit that makes databases easy.',
  //     status: 'DRAFT',
  //   },
  // })
  // console.log(todo)

  // const allTodos = await prisma.todo.findMany()
}

// async function createTodo() {
//   const todo = await prisma.todo.create({
//     data: {
//       title: 'Prisma makes databases easy',
//       description: 'Prisma is a modern database access toolkit that makes databases easy. Prisma is a modern database access toolkit that makes databases easy. Prisma is a modern database access toolkit that makes databases easy.',
//       status: 'DRAFT',
//     },
//   })
//   console.log(todo)
// }

export async function getTodos() {
  return await prisma.todo.findMany()
}

main().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
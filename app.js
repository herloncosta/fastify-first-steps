import Fastify from 'fastify'
import { querySchema, validateSchema } from './models/schemas.js'
import { authentication } from './middlewares/index.js'

const fastify = Fastify({ logger: true })
const PORT = process.env.PORT || 3000

// eslint-disable-next-line no-unused-vars
fastify.get('/query', querySchema, async (request, reply) => {
    // request.query
    return {
        params: request.query,
    }
})

// eslint-disable-next-line no-unused-vars
const userValidated = async (request, reply) => {
    return { hello: request.query }
}

fastify.route({
    method: 'GET',
    url: '/validate',
    schema: validateSchema,
    preHandler: authentication,
    handler: userValidated,
})

try {
    fastify.listen({ port: PORT })
} catch (error) {
    fastify.log.error(error)
    process.exit(1)
}

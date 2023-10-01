export const querySchema = {
    schema: {
        querystring: {
            type: 'object',
            properties: {
                user: { type: 'string' },
                allowed: { type: 'boolean' },
            },
            required: ['user', 'allowed'],
        },
    },
}

export const validateSchema = {
    querystring: {
        // validação da requisição com querystrings
        type: 'object',
        properties: {
            name: { type: 'string' },
        },
        required: ['name'],
    },
    response: {
        // validação do tipo da resposta
        200: {
            type: 'object',
            properties: {
                hello: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        email: { type: 'string' },
                        age: { type: 'number' },
                    },
                },
            },
        },
    },
}

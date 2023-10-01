export const authentication = async (request, reply) => {
    // validação de usuário logado
    if (request.query.name !== 'Daivan') {
        return reply.redirect('/query?usuario=nome&permitido=false')
    }
}

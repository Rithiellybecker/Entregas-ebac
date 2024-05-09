$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor informe seu Email',
            telefone: 'Por favor informe seu número de telefone',
            cpf: 'Por favor informe o número do seu CPF',
            endereco: 'Por favor informe seu endereço',
            cep: 'Por favor informe seu CEP'
        }
    })
})
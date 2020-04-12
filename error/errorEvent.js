const { EventEmitter } = require('events')
const emitter = new EventEmitter()


const validaObjeto = (a)=>{
    if(typeof a !== 'object'){
        emitter.emit('error', new Error('Tipo informado inválido'))
    }
    console.log('objeto valido')
}


emitter.addListener('error', (err)=>{
    console.log('Evento: ', + err.message)
} )

let dados = {nome:'Digital', course:'NodeJS'}

validaObjeto(dados)
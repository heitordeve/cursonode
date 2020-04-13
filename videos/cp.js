const { spawn } = require("child_process")

const ls = spawn('cmd', ['/c', 'dir'])

ls.stdout.on('data', (data)=>{
    console.log(` stdout: ${data}`)
})

ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`)
})

ls.on('close', (code)=>{
    console.log(`Processo em segundo plano finalizado com sucesso! \n code: ${code}`)
})
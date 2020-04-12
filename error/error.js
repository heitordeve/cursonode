

function execute()
{
    executeTo()
    
}

function executeTo(){
    throw new Error(`deu erro`)
}

function init(){
    try{
        execute()
    }catch (error){
        console.log(`Temos um problema`)
    }

}

init();
console.log('depois do erro')
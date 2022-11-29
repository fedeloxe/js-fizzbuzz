const container= document.getElementById('container')

let element; 

for(let i = 1; i<=100; i++){

    if(i % 3 == 0 && i % 5 ==0){
        console.log('fizzbuzz')
    }

    else if(i % 3 ==0){
        console.log('fizz')
        let element = `<div class="box box-yellow"> ${i} </div>`
    }

    else if(i % 5 ==0){
        console.log('buzz')
        let element = `<div class="box box-red"> ${i} </div>`

    }

    else{
        console.log(i)
        let element = `<div class="box box-blue"> ${i} </div>`
    }  
    
    container.innerHTML+= element
}
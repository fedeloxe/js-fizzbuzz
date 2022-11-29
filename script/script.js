const container= document.getElementById('container')

let element; 

for(let i = 1; i<=100; i++){


    if(i % 3 == 0 && i % 5 ==0){
        console.log('fizzbuzz')
        element = `<div class="box box-purple">Fizzbuzz</div>`
    }

    else if(i % 3 ==0){
        console.log('fizz')
        element = `<div class="box box-yellow">Fizz</div>`
    }

    else if(i % 5 ==0){
        console.log('buzz')
        element = `<div class="box box-red"> Buzz</div>`

    }

    else{
        console.log(i)
        element = `<div class="box box-blue">${i}</div>`
    }  
    
    container.innerHTML+= element
}
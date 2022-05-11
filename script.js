let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;


document.getElementById('btnRetry').addEventListener('click', function () {
    
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;

    })

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            // const answerPhrase = (phraseRandom === 1) ?
                // `Вы загадали неправильное число!\n\u{1F914}` :
                // `Я сдаюсь..\n\u{1F92F}`;
            let answerPhrase;
                if (phraseRandom === 0){
                    answerPhrase = `Что-то тут нечисто \u{1F914}`;
                } else if (phraseRandom === 1){
                    answerPhrase = `А не врешь ли ты часом? \u{1F925}`;                
                } else if (phraseRandom === 2){
                    answerPhrase = `Кто-то забыл какое число загадал`;
                }                         
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
            let answerPhrase;
            if (phraseRandom === 0){
                answerPhrase = `1AAAAAAAAAAA`;
            } else if (phraseRandom === 1){
                answerPhrase = `2AAAAAAAAAAA`;                
            } else if (phraseRandom === 2){
                answerPhrase = `3AAAAAAAAAAA`;
            }                   
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        let answerPhrase;
                if (phraseRandom === 0){
                    answerPhrase = `Плёвое дело!`;
                } else if (phraseRandom === 1){
                    answerPhrase = `Это было легко!`;                
                } else if (phraseRandom === 2){
                    answerPhrase = `Проще простого \u{1F61C}`;
                }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }          
})


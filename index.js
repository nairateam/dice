// Random Number One

// var randomNumber1 = (Math.random() * 6);
// return Math.floor(randomNumber1 + 1);

// 

// Left Dice

// function randNow() {
//     //     var imgSwap =
//         var randomNumber1 = (Math.random() * 6);
//         randFloor = Math.floor(randomNumber1 + 1);
    
//         if (randFloor === 1) {
//             return (document.querySelector('.img1').setAttribute('src', 'images/dice1.png'));
//         }
    
//         else if (randFloor === 2) {
//             return (document.querySelector('.img1').setAttribute('src', 'images/dice2.png'));
//         }
    
//         else if (randFloor === 3) {
//             return (document.querySelector('.img1').setAttribute('src', 'images/dice3.png'));
//         }
    
//         else if (randFloor === 4) {
//             return (document.querySelector('.img1').setAttribute('src', 'images/dice4.png'));
//         }
    
//         else if (randFloor === 5) {
//             return (document.querySelector('.img1').setAttribute('src', 'images/dice5.png'));
//         }
    
//         else if (randFloor === 6) {
//             return (document.querySelector('.img1').setAttribute('src', 'images/dice6.png'));
//         }
    
//         else {
//             return(randFloor); 
//         }
    
//     } 
    
    // 

// Right Dice

// function randNoww() {
//     //     var imgSwap =
//         var randomNumber2 = (Math.random() * 6);
//         randFloorr = Math.floor(randomNumber2 + 1);
    
//         if (randFloorr === 1) {
//             return (document.querySelector('.img2').setAttribute('src', 'images/dice1.png'));
//         }
    
//         else if (randFloorr === 2) {
//             return (document.querySelector('.img2).setAttribute('src', 'images/dice2.png'));
//         }
    
//         else if (randFloorr === 3) {
//             return (document.querySelector('.img2').setAttribute('src', 'images/dice3.png'));
//         }
    
//         else if (randFloorr === 4) {
//             return (document.querySelector('.img2').setAttribute('src', 'images/dice4.png'));
//         }
    
//         else if (randFloorr === 5) {
//             return (document.querySelector('.img2').setAttribute('src', 'images/dice5.png'));
//         }
    
//         else if (randFloorr === 6) {
//             return (document.querySelector('.img2').setAttribute('src', 'images/dice6.png'));
//         }
    
//         else {
//             return(randFloorr); 
//         }
    
//     }


var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = 'images/dice' + randomNumber1 + '.png'; //dice1.png - dice6.png

var image1 = document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage);

//

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage2 = 'images/dice' + randomNumber2 + '.png'; //dice1.png - dice6.png

var image2 = document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);

//

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').textContent = 'Player One (1) Won!';
    }

    else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerHTML = 'Player Two (2) Won!';
    }

    else {
        document.querySelector('h1').innerHTML = 'Draw!';
    }

    //

    function load() {
        location.reload();
    }

    var changeH1 = document.querySelector('h1').style.fontSize = '4rem';

    var reload = document.querySelector('button').setAttribute('onclick', 'load()');

    // Sampling Codes

    var btnBg = document.querySelector('button').style.background = '#4ECCA3';

    btnBg = document.querySelector('button').style.borderRadius = '5px';
    btnBg = document.querySelector('button').style.fontSize = '1rem';
    btnBg = document.querySelector('button').style.color = '#000';
    btnBg = document.querySelector('button').style.fontWeight = '200';

    var footerText = document.querySelector('footer').innerHTML = 'Built by Olwafemi Olamilekan O. for 🎲 App Brewery 🎲 com';
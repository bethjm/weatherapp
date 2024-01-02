
// const printOnScreen = () => {
//     return(`Temp is ${showOnScreen[1]}. Humidity is ${showOnScreen[2]}. Percipitation is ${showOnScreen[3]}. The sky looks ${showOnScreen[5]}. The wind is ${showOnScreen[6]}`)
// }

// console.log(printOnScreen())

/////////





let summerPercip = () => {
    let percipRange = Math.random();
    if (showOnScreen[1] <90){
        let highPercipRange = Math.random();
        if (highPercipRange <.5){
            let range = percipitationArray['springAndSummerThunderAndLightningDanger'][Math.floor(Math.random()*percipitationArray['springAndSummerThunderAndLightningDanger'].length)]
            showOnScreen.push(range)
        } else if (highPercipRange > .5 && highPercipRange < .7){
            let range = percipitationArray['summerThunderAndLightning'][Math.floor(Math.random()*percipitationArray['summerThunderAndLightning'].length)]
            showOnScreen.push(range)
        }  else if (highPercipRange > .7 && highPercipRange < 9){
            let range = percipitationArray['allRain'][Math.floor(Math.random()*percipitationArray['allRain'].length)]
            showOnScreen.push(range)
        } 
        else if (highPercipRange > .9 && highPercipRange < 1){
            let range = percipitationArray['allNone'][Math.floor(Math.random()*percipitationArray['allNone'].length)]
            showOnScreen.push(range)
        } 
    } else if (percipRange <= .6){
        let range = percipitationArray['allNone'][Math.floor(Math.random()*percipitationArray['allNone'].length)]
        showOnScreen.push(range)
    } else if (percipRange > .6 && percipRange <.9){
        let range = percipitationArray['allRain'][Math.floor(Math.random()*percipitationArray['allRain'].length)]
        showOnScreen.push(range)
    } else if (percipRange > .9 && percipRange <1){
        let range = percipitationArray['summerThunderAndLightning'][Math.floor(Math.random()*percipitationArray['summerThunderAndLightning'].length)]
        showOnScreen.push(range)
    }
    }
    summerPercip()


///dont delete for a while- you might want to refernce it
// let randomSummerPercipitationRange = () => {
//     let summerPercipitationrange = Math.random();

//     if (showOnScreen[2] == 'very high' ){
//         let summerStormRange = Math.random();
//         if(summerStormRange > 0 && summerStormRange <= .1){
//             showOnScreen.push('dangerous thunder and lightning storm with down pour')
//             showOnScreen.push('t&l')
//         }  else if (summerStormRange > .1 && summerStormRange <= .2){
//             showOnScreen.push('dangerous thunder and lightning storm with rain')
//             showOnScreen.push('t&l')
//         } else if (summerStormRange > .2 && summerStormRange <= .3){
//             showOnScreen.push('thunder and lightning storm with down pour')
//             showOnScreen.push('t&l')
//         } else if (summerStormRange > .3 && summerStormRange <= .5){
//             showOnScreen.push('thunder and lightning storm with rain')
//             showOnScreen.push('t&l')
//         } else if (summerStormRange > .5 && summerStormRange <= .7){
//             showOnScreen.push('lightning storm with rain')
//             showOnScreen.push('rain')
//         } else if (summerStormRange > .7 && summerStormRange <= .9){
//             showOnScreen.push('thunder storm with rain')
//             showOnScreen.push('t&l')
//         } else if (summerStormRange > .9 && summerStormRange <= 1){
//             showOnScreen.push('no percipitation')
//             showOnScreen.push('no')
//         }
        
//     } else if (summerPercipitationrange <= .1){
//         showOnScreen.push('light drizzle')
//         showOnScreen.push('rain')
//     } else if (summerPercipitationrange > .1 && summerPercipitationrange <= .2){
//         showOnScreen.push('rain')
//         showOnScreen.push('rain')
//     }  else if (summerPercipitationrange > .2 && summerPercipitationrange <= .8){
//         showOnScreen.push('no perciptiation')
//         showOnScreen.push('no')
//     }   else if (summerPercipitationrange > .8 && summerPercipitationrange <= 1){
//         showOnScreen.push('thunder and lightning')
//         showOnScreen.push('t&l')
//     }
// }


// //this calls the function
// randomSummerPercipitationRange()
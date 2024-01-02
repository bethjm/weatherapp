//make into winter
//when pasting back in dont add arrays
//figure out a way to prompt everything in console
//start thinking of a way to get this to work webpage

//Arrays
let tempsArray = {
    tempRangeZ: [-20, -19, -18, -17, -16, -15, -14, -13, -12, -11, -10],
    tempRangeA: [-9, -8, -7, -6, -5, -4, -3, -2, -1],
    tempRangeB: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    tempRangeC: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    tempRangeD: [35, 36, 37, 38, 39, 40],
    tempRangeE: [41, 42, 43, 44, 45],
    tempRangeF: [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55],
    tempRangeE: [56, 57, 58, 59, 60, 61, 62, 63, 64],
    tempRangeF: [65, 66, 67, 68, 69],
    tempRangeG: [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
    tempRangeH: [80, 81, 82, 83, 84, 86, 86, 87, 88, 89],
    tempRangeI: [90, 91, 92, 93, 94, 95],
    tempRangeJ: [96, 97, 98, 99, 100],
    tempRangeK: [101, 102, 103, 104, 105],
    tempRangeL: [106, 107, 108, 109, 110]
};

let windArray = {
    windRangeA: [0],
    windRangeB: [1, 2, 3, 4, 5, 6, 7],
    windRangeC: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    windRangeD: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    windRangeE: [32, 33, 34, 35,36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46],
    windRangeF: [47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
    windRangeG: [64, 65, 66, 67, 68]
}


let percipitationArray = {
    allNone: ['no percipitation'],
    allRain: ['light rain','drizzle','mist',],
    allRainDanger: ['flood level rain','intense down pour'],
    allHail: ['light hail', 'hail mixed with snow'],
    springAndSummerThunderAndLightningDanger: ['dangerous thunder and lightning storm with down pour','dangerous thunder and lightning storm with rain','fire starting lightning','dangerous thunder and lightning with flood level rains'],
    SummerrThunderAndLightning: ['thunder and lightning','thunder storm with some rain','lightning storm with some rain'],
    fallSnow: ['1 inch of fluffy snow', '3 inches of fluffy snow','1 inch of wet snow', '3 inches of wet snow',],
    fallAndWinterSnowDanger: ['dangerous white out blizzard','blizzard','12 inches of snow'],
    fallAndWinterHailDanger: ['golf ball sized hail','pea sized hail'],
    winterSnow: ['1 inch of fluffy snow', '3 inches of fluffy snow', '6 inches of fluffy snow','1 inch of wet snow', '3 inches of wet snow', '6 inches of wet snow'],   
}


let showOnScreen = []
////End arrays

let randomWinterTempRange = () => {
    let WinterTemprange = Math.random();

    if (WinterTemprange <= .15 ){
        showOnScreen.push('A')
    } else if (WinterTemprange >= .15 && WinterTemprange <= .60){
        showOnScreen.push('B')
    } else if (WinterTemprange >= .60 && WinterTemprange <= .85){
        showOnScreen.push('C')
    } else if (WinterTemprange >= .85 && WinterTemprange <= .90){
        showOnScreen.push('D')
    } else if (WinterTemprange >= .90 && WinterTemprange <= .95){
        showOnScreen.push('E')
    } else if (WinterTemprange >= .95 && WinterTemprange <= 1){
        showOnScreen.push('F')
    }
}
//this calls the function
randomWinterTempRange()

randomExactWinterTemp = () => {
    if (showOnScreen[0] === 'A') {
        let rangeATemp = tempsArray['tempRangeG'][Math.floor(Math.random()*tempsArray['tempRangeG'].length)]
            showOnScreen.push(rangeATemp)
    } else if (showOnScreen[0] == 'B') {
        let rangeBTemp = tempsArray['tempRangeH'][Math.floor(Math.random()*tempsArray['tempRangeH'].length)]
        showOnScreen.push(rangeBTemp)
    } else if (showOnScreen[0] == 'C') {
        let rangeCTemp = tempsArray['tempRangeI'][Math.floor(Math.random()*tempsArray['tempRangeI'].length)]
        showOnScreen.push(rangeCTemp)
    } else if (showOnScreen[0] == 'D') {
        let rangeDTemp = tempsArray['tempRangeJ'][Math.floor(Math.random()*tempsArray['tempRangeJ'].length)]
        showOnScreen.push(rangeDTemp)
    } else if (showOnScreen[0] == 'E') {
        let rangeETemp = tempsArray['tempRangeK'][Math.floor(Math.random()*tempsArray['tempRangeK'].length)]
        showOnScreen.push(rangeETemp)
    } else if (showOnScreen[0] == 'F') {
        let rangeFTemp = tempsArray['tempRangeL'][Math.floor(Math.random()*tempsArray['tempRangeL'].length)]
        showOnScreen.push(rangeFTemp)
    }
}
//this calls the function
randomExactWinterTemp()


//humidity

let randomWinterHumidityRange = () => {
    let WinterHumidityrange = Math.random();
    if (showOnScreen[1] < 90) {
        let highHeatHumidityrange = Math.random();
        if (highHeatHumidityrange <= .3){
            showOnScreen.push('high')
        } else if (highHeatHumidityrange > .3 && highHeatHumidityrange <= .6){
            showOnScreen.push('very high')
        } else if (highHeatHumidityrange > .6 && highHeatHumidityrange <= .8){
            showOnScreen.push('medium')
        } else if (highHeatHumidityrange > .8 && highHeatHumidityrange <= 1){
            showOnScreen.push('low')
        }
    }  else if (WinterHumidityrange <= .2 ){
        showOnScreen.push('low')
    } else if (WinterHumidityrange > .2 && WinterHumidityrange <= .6){
        showOnScreen.push('medium')
    } else if (WinterHumidityrange > .6 && WinterHumidityrange <= .8){
        showOnScreen.push('high')
    } else if (WinterHumidityrange > .8 && WinterHumidityrange <= 1){
        showOnScreen.push('very high')
    } 
}

//this calls the function
randomWinterHumidityRange()

let winterPercip = () => {
    let percipRange = Math.random();
    if (showOnScreen[1] > 90){
        let highPercipRange = Math.random();
        if (highPercipRange <.5){
            let range = percipitationArray['springAndWinterThunderAndLightningDanger'][Math.floor(Math.random()*percipitationArray['springAndWinterThunderAndLightningDanger'].length)]
            showOnScreen.push(range)
        } else if (highPercipRange > .5 && highPercipRange < .7){
            let range = percipitationArray['WinterThunderAndLightning'][Math.floor(Math.random()*percipitationArray['WinterThunderAndLightning'].length)]
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
        let range = percipitationArray['WinterThunderAndLightning'][Math.floor(Math.random()*percipitationArray['WinterThunderAndLightning'].length)]
        showOnScreen.push(range)
    }
    }

    //this calls the function
    winterPercip()


let winterStateOfSky = () => {
    let WinterSkyRange = Math.random();
    if (showOnScreen[4]=== 'rain' || showOnScreen[4]=== 't&l'){
        showOnScreen.push('cloudy')
    } else if (WinterSkyRange < .3){
        showOnScreen.push('cloudy')
    } else if (WinterSkyRange > .3 && WinterSkyRange < .9){
        showOnScreen.push('sunny')
    }  else if (showOnScreen[4] != 't&l' && WinterSkyRange > .9 && WinterSkyRange < 1){
        showOnScreen.push('heat lightning')
    } else {
        showOnScreen.push('sunny')
    }
}

//this calls the array
winterStateOfSky()

let winterStateOfWind = () => {
    let windRange = Math.random();
    if (showOnScreen[4] == 't&l' || showOnScreen == 'rain'){
        let stormWindRange = Math.random();
        if (stormWindRange < .3){
            showOnScreen.push(0)
        } else if (stormWindRange > .3 && stormWindRange < .6){
            let range = windArray['windRangeB'][Math.floor(Math.random()*windArray['windRangeB'].length)]
            showOnScreen.push(range)
        } else if (stormWindRange > .6 && stormWindRange < .9){
            let range = windArray['windRangeC'][Math.floor(Math.random()*windArray['windRangeC'].length)]
            showOnScreen.push(range)
        }  else if (stormWindRange > .9 && stormWindRange < 1){
            let range = windArray['windRangeG'][Math.floor(Math.random()*windArray['windRangeG'].length)]
            showOnScreen.push(range)
        } 
    }  else if (windRange <= .5){
        showOnScreen.push(0)
    } else if (windRange > .5 && windRange <.7){
        let range = windArray['windRangeB'][Math.floor(Math.random()*windArray['windRangeB'].length)]
        showOnScreen.push(range)
    } else if (windRange > .7 && windRange <.9){
        let range = windArray['windRangeC'][Math.floor(Math.random()*windArray['windRangeC'].length)]
        showOnScreen.push(range)
    } else if (windRange > .9 && windRange < 1){
        let range = windArray['windRangeG'][Math.floor(Math.random()*windArray['windRangeG'].length)]
        showOnScreen.push(range)
    }
    }

    //this calls the function
    winterStateOfWind()

    const printOnScreenWinter = () => {
        return(`Temp is ${showOnScreen[1]}. Humidity is ${showOnScreen[2]}. Percipitation is ${showOnScreen[3]}. The sky looks ${showOnScreen[4]}. The wind is ${showOnScreen[5]} miles per hour`)
    }
    // this calls the function
    // printOnScreenWinter()


    console.log(printOnScreenWinter())

    /////prints array at the top
    // console.log(showOnScreen)
//To hide or show tab menu
function openCalc(evt, calcType) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(calcType).style.display = "block";
    evt.currentTarget.className += " active";
};

//BMR Imperial Calc Function  
function imperialCalc() {        

    var gender, txtAge, age, txtFeet, feet, txtInches, inches, 
        measureType, weightMeasure, bmr, tdee, heightInch, weightMeasureF;
        
    gender          = document.getElementById("txtGender").value;
    txtAge          = document.getElementById("txtAge").value;
    age             = parseInt(txtAge, 10);
    txtFeet         = document.getElementById("txtFeet").value;
    feet            = parseInt(txtFeet, 10);
    txtInches       = document.getElementById("txtInches").value;
    inches          = parseInt(txtInches, 10);
    measureType     = document.getElementById("txtMeasure").value;
    weightMeasure   = document.getElementById("txtKglb").value;
    activityLevel   = parseFloat(document.querySelector('input[name="optAct"]:checked').value, 10);

    if (txtAge.length <= 0 || txtFeet.length <= 0 || txtInches.length <= 0 || weightMeasure.length <= 0){
        return true; //to prevent showing results if required inputs are empty
    }

    //convert measure from KG if is LB

    if (measureType == 'KG') {
        weightMeasureF = weightMeasure * 2.20462;
    } else {
        weightMeasureF = weightMeasure;
    }

    //convert height to inches
    heightInch = (feet * 12) + inches;

    if (gender == 'F') {
        //basal metabolic rate
        bmr = 655 + (4.35 * weightMeasureF) + (4.7 * heightInch) - (4.7 * age);

        //total daily energy expenditure
        tdee = bmr * activityLevel;

    } else {
        //basal metabolic rate
        bmr = 66 + (6.2 * weightMeasureF) + (12.7 * heightInch) - (6.76 * age);

        //total daily energy expenditure
        tdee = bmr * activityLevel;
    }

    document.getElementById("Results").innerHTML =
        "<b>Submitted info: </b>"+
        "<b>Gender:</b> <span>" + gender + "</span> " +
        "<b>Age:</b> <span>" + age + "</span> " +
        "<b>Height: (Feet:</b> <span>" + feet + "</span> " +
        "<b>Inches:</b> <span>" + inches + "<b>)</b></span> " +
        "<b>Weigth:</b> <span>" + weightMeasure + " " + measureType + "</span>" +
        "<br>" +
        "<p><b>BMR</b> (basal metabolic rate) = " + Math.round(bmr) +"</p> "+
        "<p><b>TDEE</b> - Daily Calories intake to burn = "+ Math.round(tdee) + "</p>" + 
        "<p><b>TDEE</b> = total daily energy expenditure according to the <b>activity level</b></p>";

    document.getElementsByClassName("ResultPane")[0].style.display = "block";
    document.getElementById("Results").style.display = "block";              
    return false; //to prevent the form from submitting
};

function hideResult() {
    document.getElementsByClassName("ResultPane")[0].style.display = "none";
    document.getElementById("Results").style.display = "none";
};

//BMR Metric Calc Function  
function metricCalc() {
    
    var genderM, txtAgeM, ageM, txtFeetM, feetM, txtInchesM, inchesM, 
    measureTypeM, weightMeasureM, bmrM, tdeeM, heightCmM, weightMeasureFM;
    
    genderM          = document.getElementById("txtGenderM").value;
    txtAgeM          = document.getElementById("txtAgeM").value;
    ageM             = parseInt(txtAgeM, 10);
    txtFeetM         = document.getElementById("txtFeetM").value;
    feetM            = parseInt(txtFeetM, 10);
    txtInchesM       = document.getElementById("txtInchesM").value;
    inchesM          = parseInt(txtInchesM, 10);
    measureTypeM     = document.getElementById("txtMeasureM").value;
    weightMeasureM   = document.getElementById("txtKglbM").value;
    activityLevelM   = parseFloat(document.querySelector('input[name="optActM"]:checked').value, 10);    

    if (txtAgeM.length <= 0 || txtFeetM.length <= 0 || txtInchesM.length <= 0 || weightMeasureM.length <= 0){
        return true; //to prevent showing results if required inputs are empty
    }

    //convert measure from LB if is KG

    if (measureTypeM == 'LB') {
        weightMeasureFM = weightMeasureM / 2.20462;
    } else {
        weightMeasureFM = weightMeasureM;
    }

    //convert height to cm
    heightCmM = (feetM * 30.48) + (inchesM * 2.54);
    
    if (genderM == 'F') {
        //basal metabolic rate
        bmrM = 655 + (9.563 * weightMeasureFM) + (1.850 * heightCmM) - (4.676 * ageM);

        //total daily energy expenditure
        tdeeM = bmrM * activityLevelM;

    } else {
        //basal metabolic rate
        bmrM = 66.5 + (13.76 * weightMeasureFM) + (5.003 * heightCmM) - (6.755 * ageM);

        //total daily energy expenditure
        tdeeM = bmrM * activityLevelM;
    }

    document.getElementById("ResultsM").innerHTML =
        "<b>Submitted info: </b>"+
        "<b>Gender:</b> <span>" + genderM + "</span> " +
        "<b>Age:</b> <span>" + ageM + "</span> " +
        "<b>Height: (Feet:</b> <span>" + feetM + "</span> " +
        "<b>Inches:</b> <span>" + inchesM + "<b>)</b></span> " +
        "<b>Weigth:</b> <span>" + weightMeasureM + " " + measureTypeM + "</span>" +
        "<br>" +
        "<p><b>BMR</b> (basal metabolic rate) = " + Math.round(bmrM) +"</p> "+
        "<p><b>TDEE</b> - Daily Calories intake to burn = "+ Math.round(tdeeM) + "</p>" + 
        "<p><b>TDEE</b> = total daily energy expenditure according to the <b>activity level</b></p>";

    document.getElementsByClassName("ResultPaneM")[0].style.display = "block";
    document.getElementById("ResultsM").style.display = "block";            
    return false; //to prevent the form from submitting
};

function hideResultM() {
    document.getElementsByClassName("ResultPaneM")[0].style.display = "none";
    document.getElementById("ResultsM").style.display = "none";
};
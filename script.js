// Common function to take all the inputs 
function getInput(input1){
    const firstInput=document.getElementById(input1);
    const firstInputValue=firstInput.value;
    const inputOne= parseFloat(firstInputValue);
    return inputOne;
}

// common funcction to display outputs 

function displayArea(areaId, areaResult){
    const AreaSpan =document.getElementById(areaId);
    AreaSpan.innerText=areaResult;
}

function triangleCalculate(){
    const base= getInput('triBase');
    const height= getInput('triHeight');
   const area=0.5*base*height;
   displayArea('triAreaId',area);


//     // get the value of base 
//    const triBaseInput=document.getElementById('triBase');
//    const triBaseValue=triBaseInput.value;
//    const base =parseFloat(triBaseValue);

// //    get the value of height 
//    const triHeightInput=document.getElementById('triHeight');
//    const triHeightValue=triHeightInput.value;
//    const height=parseFloat(triHeightValue);

// //    calculating the area 
//    const triArea= 0.5*base*height;
   
// //   displaying the area 
//     const triAreaSpan= document.getElementById('triAreaId');
//     triAreaSpan.innerText=triArea;

}



function rectangleCalculate(){
    const base= getInput('rectWidth');
    const height= getInput('rectHeight');
   const area=base*height;
   displayArea('rectArea',area);

}
function para(){
    const base= getInput('paraBase');
    const height= getInput('paraHeight');
   const area=base*height;
   displayArea('paraArea',area);
}
function rhombus(){
    const base= getInput('rhombusBase');
    const height= getInput('rhombusHeight');
   const area= 0.5*base*height;
   displayArea('rhombusArea',area);
}
function pentagon(){
    const base= getInput('pentaBase');
    const height= getInput('pentaHeight');
   const area=0.5*base*height;
   displayArea('pentaArea',area);
}
function ellipse(){
    const base= getInput('ellipseBase');
    const height= getInput('ellipseHeight');
   const area=3.1416*base*height;
   displayArea('ellipseArea',area);
}


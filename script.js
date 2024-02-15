function triangleCalculate(){

    // get the value of base 
   const triBaseInput=document.getElementById('triBase');
   const triBaseValue=triBaseInput.value;
   const base =parseFloat(triBaseValue);

//    get the value of height 
   const triHeightInput=document.getElementById('triHeight');
   const triHeightValue=triHeightInput.value;
   const height=parseFloat(triHeightValue);

//    calculating the area 
   const triArea= 0.5*base*height;
   
//   displaying the area 
    const triAreaSpan= document.getElementById('triAreaId');
    triAreaSpan.innerText=triArea;

}

function rectangleCalculate(){
    // get the value of width 
    const rectWidth=document.getElementById('rectWidth');
    const rectWidthValue=rectWidth.value;
    const width= parseFloat(rectWidthValue);

    // get the value of height 
    const rectHeight=document.getElementById('rectHeight');
    const rectHeightValue=rectHeight.value;
    const height= parseFloat(rectHeightValue);


    // calculate the area 

    const rectArea= width*height;

    // display the value 
    const rectAreaSpan =document.getElementById('rectArea');
    rectAreaSpan.innerText=rectArea;

}
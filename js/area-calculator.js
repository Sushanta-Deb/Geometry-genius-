function calculateArea(){
    // get base value-----
    const baseField = document.getElementById('base-field')
    const baseFieldValueString = baseField.value;
    const baseFieldValue = parseFloat(baseFieldValueString);
    baseField.value = '';

    console.log(baseFieldValue);
    // get height value-----
    const heightField = document.getElementById('height-field')
    const heightFieldValueString = heightField.value;
    const heightFieldValue = parseFloat(heightFieldValueString);
    heightField.value = '';

    console.log(heightFieldValue);
    const area = 0.5 * baseFieldValue * heightFieldValue;
    console.log(area)
    const areaValue = document.getElementById('area-value');
    areaValue.innerText = area;
}

function calculateRectangleArea(){
    // get width value
    const widthField = document.getElementById('width-field')
    const widthFieldString = widthField.value;
    const width = parseFloat(widthFieldString);
    widthField.value = '';
    
    // get length value
    const lengthField = document.getElementById('length-field');
    const lengthFieldString = lengthField.value;
    const length = parseFloat(lengthFieldString);
    lengthField.value = '';

    const area = width * length;
    const areaValue = document.getElementById('area-rectangle-value')
    areaValue.innerText = area;
}

function calculateParallelogramArea(){
    const base = getInputValue('base-parallelogram-field')
    const height = getInputValue('height-parallelogram-field')
    const area = base * height;
    setInnerTextElement('area-Parallelogram-value', area);
    
}

// Reuseable function------

function getInputValue(inputId){
    const FieldValue = document.getElementById(inputId);
    const FieldValueText = FieldValue.value;
    const inputValue = parseFloat(FieldValueText);
    FieldValue.value = '';
    return inputValue;
}

function setInnerTextElement(elementId, area){
    const element = document.getElementById(elementId)
    element.innerText = area;
}
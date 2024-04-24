const form = document.querySelector("form")


form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height <= 0 || height === '' || isNaN(height)){
        result.innerHTML = "Please give a valid height"
    }
    else if(weight <= 0 || weight === '' || isNaN(weight)){
        result.innerHTML = "Please give a valid weight"
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        let status;

        if (bmi < 18.6) {
            status = "Underweight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            status = "Normal weight";
        } else {
            status = "Overweight";
        }

        result.innerHTML = `Your BMI is ${bmi}. You are ${status}.`;
    }
})
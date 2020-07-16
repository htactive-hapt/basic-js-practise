//khai bai chieu cao can nang cua 2 nguoi
var ToanWeight = 61, MinhWeight = 60;
var ToanHeight = 1.60, MinhHeight = 1.60;

//tinh chi so bmi cua 2 nguoi
var BMIToan = ToanWeight / (ToanHeight * ToanHeight);
var BMIMinh = MinhWeight / (MinhHeight * MinhHeight);

//in ra console
console.log("Minh BMI: ", BMIMinh);
console.log("Toan BMI: ", BMIToan);

//so sanh bmi va in ra ket qua
if (BMIToan === BMIMinh) { //so sanh gia tri va kieu du lieu BMI cua 2 nguoi
    console.log("BMI Toan va BMI Minh bang nhau: ", BMIToan);
}
else if (BMIToan > BMIMinh) {
    console.log("BMI Toan lon hon BMI Minh: ", BMIToan);
}
else{
    console.log("BMI Minh lon hon BMI Toan: ", BMIMinh)
}

var clickFunction = () => {
    alert("You click bậy rồi")
}


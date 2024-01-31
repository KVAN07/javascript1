var age = +prompt('Введите свой возвраст')

if (age > 0 && age < 18) {
    var str = 'вы ещё молоды,вам ещё учиться'
        alert(str)
}else if (age === 0) {
    var str = 'вы ещё молоды,вам ещё учиться'
        alert(str)
}else if (age === 18) {
    var str = 'вы ещё молоды,вам ещё учиться'
        alert(str)
}else if (age > 19 && age < 50) {
    var str1 = 'Вам нужно работать'
        alert(str1)
}else if (age === 19) {
    var str1 = 'Вам нужно работать'
        alert(str1)
}else if (age === 50) {
    var str1 = 'Вам нужно работать'
        alert(str1)
}else if (age > 51 && age < 59) {
    var str2 = 'Вам скоро на пенсию'
        alert(str2)
}else if (age === 51) {
    var str2 = 'Вам скоро на пенсию'
        alert(str2)
}else if (age === 59) {
    var str2 = 'Вам скоро на пенсию'
        alert(str2)
}else if (age > 60 && age < 100) {
    var str3 = 'Вы пенсионер'
        alert(str3)
}else if (age === 60) {
    var str3 = 'Вы пенсионер'
        alert(str3)
}else if (age === 100) {
    var str3 = 'Вы пенсионер'
        alert(str3)
}else{
     var str4 = 'Что-то пошло не так'
        alert(str4)
}

var time = +prompt('Введите время')

switch (time) {
    case 0:
        var t = 'Сейчас 12 часов ночи'
        alert(t)
        break;
        case 1:
        var t1 = 'Сейчас 1 час ночи'
    alert(t1)
        break;
        case 2:
        var t2 = 'Сейчас 2 часа ночи'
    alert(t2)
        break;
        case 3:
        var t3 = 'Сейчас 3 часа ночи'
    alert(t3)
        break;
        case 4:
        var t4 = 'Сейчас 4 часа ночи'
    alert(t4)
        break;
        case 5:
        var t5 = 'Сейчас 5 часов утра'
    alert(t5)
        break;
        case 6:
        var t6 = 'Сейчас 6 часов утра'
    alert(t6)
        break;
        case 7:
        var t7 = 'Сейчас 7 часов утра'
    alert(t7)
        break;
        case 8:
        var t8 = 'Сейчас 8 часов утра'
    alert(t8)
        break;
        case 9:
        var t9 = 'Сейчас 9 часов утра'
    alert(t9)
        break;
        case 10:
        var t10 = 'Сейчас 10 часов утра'
    alert(t10)
        break;
        case 11:
        var t11 = 'Сейчас 11 часов утра'
    alert(t11)
        break;
        case 12:
        var t12 = 'Сейчас 12 часов дня'
    alert(t12)
        break;
        case 13:
        var t13 = 'Сейчас 1 час дня'
    alert(t13)
        break;
        case 14:
        var t14 = 'Сейчас 2 часа дня'
    alert(t14)
        break;
        case 15:
        var t15 = 'Сейчас 3 часа дня'
    alert(t15)
        break;
        case 16:
        var t16 = 'Сейчас 4 часа дня'
    alert(t16)
        break;
    case 17:
        var t17 = "Сейчас 5 часов дня";
        alert(t17)
        break;
    case 18:
        var t18 = 'Сейчас 6 часов вечера'
        alert(t18)
        break;
        case 19:
        var t19 = 'Сейчас 7 часов вечера'
    alert(t19)
        break;
        case 20:
        var t20 = 'Сейчас 8 часов вечера'
    alert(t20)
        break;
        case 21:
        var t21 = 'Сейчас 9 часов ночи'
    alert(t21)
        break;
        case 22:
        var t22 = 'Сейчас 10 часов ночи'
    alert(t22)
        break;
        case 23:
        var t23 = 'Сейчас 11 часов ночи'
    alert(t23)
        break;

    default:
    var tt = 'Что-то пошло не так'
    alert(tt)
        break;
}


var a = +prompt('Введите 1 число');
var b = +prompt('Введите 2 число');
var c = +prompt('Введите 3 число');

var res = a + b + c
alert(res / 3);
// memo
//
// (1)1     variable_inputting = 1  variable_calced = 0 variable_result = 0
//
// (2)+     variable_inputting = 0  variable_calced = 1 variable_result = 0
//
// (3)2     variable_inputting = 2  variable_calced = 1 variable_result = 0
//
// (4)=     variable_inputting = 3  variable_calced = 1 variable_result = 3
//
//多分こうなっているはず。
//要は、
//演算子フラグとイコールフラグが共にfalseの場合は通常状態なので、数字を入力すると次々にvariable_inputtingに格納される。
//演算子ボタン(+-×÷)が押されると、演算子フラグがtrueになり、押された演算子の種類が演算子stateに入り、入力中だった値がvariable_calcedにコピーされ、新たに値を入力する待ち状態に移行する。
//イコールボタンが押されると、イコールフラグがtrueになり、入力中だった値(variable_inputting)とそれまでに格納されている値(variable_calced)が、演算子stateで演算される。
//
// +--------------------+-------------------------+-----------------+-----------------+
// | variable_inputting | 演算子 (operation_state) | variable_calced | variable_result |
// +--------------------+-------------------------+-----------------+-----------------+
// |         1          |   +   (       1       ) |        2        |        3        |
// +--------------------+-------------------------+-----------------+-----------------+
// |         1          |   -   (       2       ) |        2        |       -1        |
// +--------------------+-------------------------+-----------------+-----------------+
// |         1          |   ×   (       3       ) |        2        |        2        |
// +--------------------+-------------------------+-----------------+-----------------+
// |         1          |   ÷   (       4       ) |        2        |       0.5       |
// +--------------------+-------------------------+-----------------+-----------------+

let variable_calced = 0; // 前までの計算結果
let variable_inputting = 0; // 入力中の値
let variable_result = 0; // 計算結果
let operand_flag = false; // 演算子(+-×÷)を押された状態を覚える
let equal_flag = false; // 計算終了の状態(イコールボタンを押された状態)を覚える

function click_num(num){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    i = a.innerText;
    num = parseInt(num);
    if(!(equal_flag)){
        if(!(operand_flag)){
            if(!(a == 0 && num == 0)){
                i = i * 10 + num;
                variable_inputting = i;
                a.innerText = i;
            }
        }else{
            a.innerText = num;
            variable_inputting = num;
            operand_flag = false;
        }
    }else{
        a.innerText = num;
        variable_inputting = num;
        equal_flag = false;
    }
}

function click_C(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    a.innerText = 0;
    b.innerText = "";
    variable_inputting = 0;
    variable_calced = 0;
}

function click_plus(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    b.innerText = variable_inputting + "+";
    variable_calced = variable_inputting;
    operand_flag = true;
}

function click_equal(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    b.innerText = b.innerText + a.innerText + "=";
    variable_result = variable_calced + variable_inputting;
    a.innerText = variable_result;
    variable_inputting = variable_result;
    equal_flag = true;
}

// // 0のボタンにマウスオーバーしたら背景色を変える
const button_0 = document.getElementById("button_0");
//ON
button_0.addEventListener('mouseenter', () => {button_0.style.background = "lightgray";}, false);
//OUT
button_0.addEventListener('mouseleave', () => {button_0.style.background = "";}, false);

// 1のボタンにマウスオーバーしたら背景色を変える
const button_1 = document.getElementById("button_1");
//ON
button_1.addEventListener('mouseenter', () => {button_1.style.background = "lightgray";}, false);
//OUT
button_1.addEventListener('mouseleave', () => {button_1.style.background = "";}, false);

// 2のボタンにマウスオーバーしたら背景色を変える
const button_2 = document.getElementById("button_2");
//ON
button_2.addEventListener('mouseenter', () => {button_2.style.background = "lightgray";}, false);
//OUT
button_2.addEventListener('mouseleave', () => {button_2.style.background = "";}, false);

// 3のボタンにマウスオーバーしたら背景色を変える
const button_3 = document.getElementById("button_3");
//ON
button_3.addEventListener('mouseenter', () => {button_3.style.background = "lightgray";}, false);
//OUT
button_3.addEventListener('mouseleave', () => {button_3.style.background = "";}, false);

// 4のボタンにマウスオーバーしたら背景色を変える
const button_4 = document.getElementById("button_4");
//ON
button_4.addEventListener('mouseenter', () => {button_4.style.background = "lightgray";}, false);
//OUT
button_4.addEventListener('mouseleave', () => {button_4.style.background = "";}, false);

// 5のボタンにマウスオーバーしたら背景色を変える
const button_5 = document.getElementById("button_5");
//ON
button_5.addEventListener('mouseenter', () => {button_5.style.background = "lightgray";}, false);
//OUT
button_5.addEventListener('mouseleave', () => {button_5.style.background = "";}, false);

// 6のボタンにマウスオーバーしたら背景色を変える
const button_6 = document.getElementById("button_6");
//ON
button_6.addEventListener('mouseenter', () => {button_6.style.background = "lightgray";}, false);
//OUT
button_6.addEventListener('mouseleave', () => {button_6.style.background = "";}, false);

// 7のボタンにマウスオーバーしたら背景色を変える
const button_7 = document.getElementById("button_7");
//ON
button_7.addEventListener('mouseenter', () => {button_7.style.background = "lightgray";}, false);
//OUT
button_7.addEventListener('mouseleave', () => {button_7.style.background = "";}, false);

// 8のボタンにマウスオーバーしたら背景色を変える
const button_8 = document.getElementById("button_8");
//ON
button_8.addEventListener('mouseenter', () => {button_8.style.background = "lightgray";}, false);
//OUT
button_8.addEventListener('mouseleave', () => {button_8.style.background = "";}, false);

// 9のボタンにマウスオーバーしたら背景色を変える
const button_9 = document.getElementById("button_9");
//ON
button_9.addEventListener('mouseenter', () => {button_9.style.background = "lightgray";}, false);
//OUT
button_9.addEventListener('mouseleave', () => {button_9.style.background = "";}, false);

// +のボタンにマウスオーバーしたら背景色を変える
const button_plus = document.getElementById("button_plus");
//ON
button_plus.addEventListener('mouseenter', () => {button_plus.style.background = "lightgray";}, false);
//OUT
button_plus.addEventListener('mouseleave', () => {button_plus.style.background = "";}, false);

// -のボタンにマウスオーバーしたら背景色を変える
const button_minus = document.getElementById("button_minus");
//ON
button_minus.addEventListener('mouseenter', () => {button_minus.style.background = "lightgray";}, false);
//OUT
button_minus.addEventListener('mouseleave', () => {button_minus.style.background = "";}, false);

// ×のボタンにマウスオーバーしたら背景色を変える
const button_times = document.getElementById("button_times");
//ON
button_times.addEventListener('mouseenter', () => {button_times.style.background = "lightgray";}, false);
//OUT
button_times.addEventListener('mouseleave', () => {button_times.style.background = "";}, false);

// ÷のボタンにマウスオーバーしたら背景色を変える
const button_div = document.getElementById("button_div");
//ON
button_div.addEventListener('mouseenter', () => {button_div.style.background = "lightgray";}, false);
//OUT
button_div.addEventListener('mouseleave', () => {button_div.style.background = "";}, false);

// ±のボタンにマウスオーバーしたら背景色を変える
const button_plusminus = document.getElementById("button_plusminus");
//ON
button_plusminus.addEventListener('mouseenter', () => {button_plusminus.style.background = "lightgray";}, false);
//OUT
button_plusminus.addEventListener('mouseleave', () => {button_plusminus.style.background = "";}, false);

// .のボタンにマウスオーバーしたら背景色を変える
const button_dot = document.getElementById("button_dot");
//ON
button_dot.addEventListener('mouseenter', () => {button_dot.style.background = "lightgray";}, false);
//OUT
button_dot.addEventListener('mouseleave', () => {button_dot.style.background = "";}, false);

// =のボタンにマウスオーバーしたら背景色を変える
const button_equal = document.getElementById("button_equal");
//ON
button_equal.addEventListener('mouseenter', () => {button_equal.style.background = "lightgray";}, false);
//OUT
button_equal.addEventListener('mouseleave', () => {button_equal.style.background = "";}, false);

// 1/xのボタンにマウスオーバーしたら背景色を変える
const button_div_x = document.getElementById("button_div_x");
//ON
button_div_x.addEventListener('mouseenter', () => {button_div_x.style.background = "lightgray";}, false);
//OUT
button_div_x.addEventListener('mouseleave', () => {button_div_x.style.background = "";}, false);

// x^2のボタンにマウスオーバーしたら背景色を変える
const button_power = document.getElementById("button_power");
//ON
button_power.addEventListener('mouseenter', () => {button_power.style.background = "lightgray";}, false);
//OUT
button_power.addEventListener('mouseleave', () => {button_power.style.background = "";}, false);

// sqrt(x)のボタンにマウスオーバーしたら背景色を変える
const button_sqrt = document.getElementById("button_sqrt");
//ON
button_sqrt.addEventListener('mouseenter', () => {button_sqrt.style.background = "lightgray";}, false);
//OUT
button_sqrt.addEventListener('mouseleave', () => {button_sqrt.style.background = "";}, false);

// %のボタンにマウスオーバーしたら背景色を変える
const button_percent = document.getElementById("button_percent");
//ON
button_percent.addEventListener('mouseenter', () => {button_percent.style.background = "lightgray";}, false);
//OUT
button_percent.addEventListener('mouseleave', () => {button_percent.style.background = "";}, false);

// CEのボタンにマウスオーバーしたら背景色を変える
const button_CE = document.getElementById("button_CE");
//ON
button_CE.addEventListener('mouseenter', () => {button_CE.style.background = "lightgray";}, false);
//OUT
button_CE.addEventListener('mouseleave', () => {button_CE.style.background = "";}, false);

// Cのボタンにマウスオーバーしたら背景色を変える
const button_C = document.getElementById("button_C");
//ON
button_C.addEventListener('mouseenter', () => {button_C.style.background = "lightgray";}, false);
//OUT
button_C.addEventListener('mouseleave', () => {button_C.style.background = "";}, false);

// BSのボタンにマウスオーバーしたら背景色を変える
const button_BS = document.getElementById("button_BS");
//ON
button_BS.addEventListener('mouseenter', () => {button_BS.style.background = "lightgray";}, false);
//OUT
button_BS.addEventListener('mouseleave', () => {button_BS.style.background = "";}, false);
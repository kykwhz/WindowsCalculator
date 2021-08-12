let variable_calced = 0; // 前までの計算結果
let variable_inputting = 0; // 入力中の値
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
        b.innerText = "";
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
    variable_calced += variable_inputting;
    a.innerText = variable_calced;
    variable_inputting = variable_calced;
    equal_flag = true;
}
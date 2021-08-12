let variable = 0;
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
                a.innerText = i;
            }
        }else{
            a.innerText = num;
            operand_flag = false;
        }
    }else{
        a.innerText = num;
        b.innerText = "";
    }
}

function click_C(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    a.innerText = 0;
    b.innerText = "";
    variable = 0;
}

function click_plus(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    b.innerText = a.innerText + "+";
    a = parseInt(a.innerText);
    variable += a;
    operand_flag = true;
}

function click_equal(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    b.innerText = b.innerText + a.innerText + "=";
    a.innerText = variable + parseInt(a.innerText);
    equal_flag = true;
}
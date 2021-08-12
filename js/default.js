// JavaScriptファイルが読み込まれているか確認
// alert('test');

function click_num(num){
    a = document.getElementById("disp_input");
    i = a.innerText;
    num = parseInt(num);
    if(!(a == 0 && num == 0)){
        i = i * 10 + num;
        a.innerText = i;
    }
}

function click_C(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    a.innerText = 0;
    b.innerText = "";
}

function click_plus(){
    a = document.getElementById("disp_input");
    b = document.getElementById("disp_output");
    b.innerText = a.innerText + "+";
}

// 1. Tìm tới thẻ của HTML (DOM)
var usernameELE = document.getElementById("demoUsername");
var passwordELE = document.getElementById("demoPassword");
console.log(usernameELE, passwordELE);

// 2. Làm sao lấy được giá trị từ form (input username, password)
// => lấy từ thuộc tính value
var username = document.getElementById("demoUsername").value;
// var username = usernameELE.value;
var password = document.getElementById("demoPassword").value;
// var password = passwordELE.value;
console.log(username, password);      









/**
 * Demo lấy giá trị từ các form đăng nhập khi người dùng click
 * 
 * khối 1: input
 * username1
 * password1
 * 
 * 
 * khối 2: 
 * B1: tìm tới thẻ inputs 
 * B2: tạo hàm (function)  
 *  - Lấy giá trị từ 2 inputs
 *  - Hiển thị thông báo lên UI (console.log)
 * B3: gắn sự kiện (events) click cho button onclick
 * 
 * 
 * khối 3: output 
 * Hiển thị thông báo giá trị 
 * username1
 * password1
 * 
 */



/**
 * Khái niệm function (hàm)
 */

// Khai báo hàm /Khởi tạo 
// [từ khóa] [tên hàm] () {
    // các chuỗi xử lý          
    // - Lấy giá trị từ 2 inputs            
    // - Hiển thị thông báo lên UI (console.log) 
// }

// tạo hàm
function sum2num () {
    // code xử lý
    var sum = 10 + 6;
    console.log("Sum: ", sum);

}

// gọi hàm /sử dụng hàm
// TH1: chạy hàm /hiển thị kết quả khi vừa load trang web
sum2num(); 















/**
 * gắn sự kiện click
 */

// TH2: chạy hàm /hiển thị kết quả khi có thao tác của người dùng
// C1: function ẩn danh (Anonymous function): function  chỉ có từ khóa, không có tên
// document.getElementById("btnTest").onclick = function(){
//     var sum1= 10 + 6;
//     console.log("Hiện kq khi có click: ", sum1);
// }

// C2: gán 1 hàm vào onclick
// Khi gán vào onclick thi chỉ gán tên và không có dấu ()
// => Nếu có dấu () thi hàm  sẽ chạy ngay sau khi load trang web
document.getElementById("btnTest").onclick = sum2num; 



// code chi tiết cho Login nâng cao
// B1: Tìm tới các thẻ cần xử lý
var useELE = document.getElementById("demoUsername1");
var passELE = document.getElementById("demoPassword1");
var btnLogin = document.getElementById("btnLogin");
console.log(useELE, passELE, btnLogin);

// B2: gắn onclick vào button login
btnLogin.onclick =  function(){
    // chứa code xử lý sau khi người dùng click button
    // Lấy giá trị từ  
    var username2 = useELE.value;
    // username2 = document.getElementById("demoUsername1").value;
    var password2 = passELE.value;
    console.log(username2, password2);

// hiển thị nội dung kq lên UI
    document.getElementById("txtAlert").innerHTML = "Username của bạn: " + username2 + "<br> Password của bạn: " + password2;

}



/**
 * Ôn tập click và  đổi nội dung 
 * Click Me
 */

document.getElementById("btnChangeText").onclick = function(){
    document.getElementById("txtChangeContent").innerHTML = "Nội dung sửa rồi á!";
    document.getElementById("txtChangeContent").style.backgroundColor = "red";
    document.getElementById("txtChangeContent").style.color = "white";
}

// JAVASCRIPT BUỔI 3

/**
 * Demo Disabled
 * 
 */
document.getElementById("btnDisabled1").onclick = function(){

    // C1
    // document.getElementById("inputDisabled").disabled = true;
    // document.getElementById("btnDisabled").disabled = true; 
    
    // C2
    // Hàm thêm thuộc tính cho html
    document.getElementById("inputDisabled").setAttribute("disabled", true);
    document.getElementById("btnDisabled").setAttribute("disabled", true);
}

document.getElementById("btnEnable").onclick = function(){

    // C1
    // document.getElementById("inputDisabled").disabled = false;
    // document.getElementById("btnDisabled").disabled = false; 

    // C2
    // Hàm xóa thuộc tính cho html
    document.getElementById("inputDisabled").removeAttribute("disabled");
    document.getElementById("btnDisabled").removeAttribute("disabled");
}

/**
 * Demo Tắt Đèn  
 */


var imgELE = document.getElementById("btnBull");

// Bật đèn
document.getElementById("btnOn").onclick = function(){
    imgELE.src = "./img/pic_bulbon.gif";
}

// Tắt đèn
document.getElementById("btnOff").onclick = function(){
    imgELE.src = "./img/pic_bulboff.gif";
}               

/**
 * Demo Tắt Đèn dùng ảnh nền
 */

// Thêm CSS băng style
var divELE = document.getElementById("divBull");
// console.log(divELE);
divELE.style.width = "100px";
divELE.style.height = "180px";
divELE.style.backgroundImage = "url(./img/pic_bulboff.gif)";

// Thêm css bang CSSText => gọn code khi can thêm nhieu thuộc tính
// divELE.style.cssText = "width:100px; height:180px; background-image:url(./img/pic_bulboff.gif);";

// Thêm CSS bang className => External css
// divELE.className = "imgBackground";


// Thêm css bang classList => External css
// divELE.classList.add("imgBackground");  

document.getElementById("btnOnBG").onclick = function(){
    // thêm css bang style
    divELE.style.backgroundImage = "url(./img/pic_bulbon.gif)";
}

document.getElementById("btnOffBG").onclick = function(){
    // thêm css bang style
    divELE.style.backgroundImage = "url(./img/pic_bulboff.gif)";
}



/**
 * Demo tính tiền TIP
 * 
 * khối 1: inputs
 * total, percentTip, people
 * 
 * 
 * khối 2: các bước xử lí
 * 
 * B1: tìm thẻ html và lấy giá trị
 * B2: xây dựng công thức tính tổng tiền tip
 *  totalTIP (tổng tiền tip) = (total * percentTip)/100;
 * B3: xây dựng tiền tip moi nguoi phải trả
 *  tip = totalTIP / people;
 * B4: HIển thị lên UI
 * 
 * 
 * khối 3: output
 * tip (tiền tip mỗi người)
 */


// Hàm tính
function calcTIP(){
    
    // Khi lấy giá trị tu form, kiểu dữ liệu nhận được là kiểu String
    var total = document.getElementById("inputTotal").value;
    var percentTip = document.getElementById("selectPercent").value;
    var people = document.getElementById("inputPeople").value;
    console.log(typeof(people));//kiểm tra kiểu dữ liệu

    /**
     * Demo lỗi khi sử dụng dấu +
     + có 2 tính năng: nối chuỗi, cộng 2 số. 
     *, /, %,... : JS nó sẽ tự hiểu và tự ép kiểu (parse) thanh number
    var test = people + 5;//kết quả la 35 do js hiểu la nối chuỗi
    console.log(test);
    solution: ép kiểu dư liệu => chuyển từ string sang num

    var test = parseInt(people) + 5;
    //var test = Number(people) + 5;
    console.log(test);
     */

    console.log(total, percentTip, people);

    // tính tổng tiền tip
    var totalTIP = (total * percentTip)/100;
    console.log(totalTIP);

    // tiền tip moi nguoi phải trả
    var tip = totalTIP / people;
    console.log(tip);

    // hiển thị lên UI
    document.getElementById("txtResult").innerHTML = "TIP AMOUNT <br> <span style='vertical-align: super;'>$</span>"  + tip + "<br> mỗi người";

}

//Gắn sự kiện click cho button tính nào sử dụng code JS
// gọi hàm
// document.getElementById("btnCalc").onclick = calcTIP;











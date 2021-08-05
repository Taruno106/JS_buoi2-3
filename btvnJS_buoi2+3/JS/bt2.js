// bt2: Tính giá trị trung bình

/**
 * khối 1: input
 *  num1, num2, num3, num4, num5: nhập 5 số thực
 * 
 * 
 * khối 2: các bước xử lí
 *  B1: Tạo và gán giá trị
 *  tự nhập vào 5 số thực: num1, ...
 *  
 *  B2: Tính giá trị trung bình  
 *  averageValue = (num1+num2+num3+num4+num5)/5;
 * 
 * 
 * khối 3: output
 *  hiển thị kq ra console
 * giá trị trung bình 5 số thực
 * 
 */




document.getElementById("btnAverage").onclick = function(){
    // tạo biến và lấy giá trị từ form về 
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);

    
    // Tính giá trị trung bình
    var averageValue = (num1+num2+num3+num4+num5)/5;
    
    // hiển thị lên UI
    document.getElementById("txtThongBao2").innerHTML = "Giá trị trung bình của 5 số là: " + averageValue;
}
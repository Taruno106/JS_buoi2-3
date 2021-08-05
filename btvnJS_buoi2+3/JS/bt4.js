// bt4: tính chu vi, diện tích hình chữ nhật

/**
 * khối 1: input
 *  length: chiều dài hcn                 
 *  width: chiều rộng hcn
 * 
 * 
 * khối 2: các bước xử lý
 *  B1: Tạo và gán giá trị
 *  length, width
 * 
 *  B2: tính chu vi, diện tích hcn
 *  C=(length+width)*2; S=length*width;
 *  
 * 
 * khối 3: output
 *  hiển thị kq ra console
 * chu vi, diện tích hcn
 * 
 * 
 */


document.getElementById("btnS").onclick = function(){
    // tạo biến và lấy giá trị từ form về
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    
    // tính diện tích hcn
    var S=length*width;
    
    // hiển thị UI 
    document.getElementById("txtThongBao4").innerHTML = "Diện tích HCN: " + S;
}

document.getElementById("btnC").onclick = function(){
    // tạo biến và lấy giá trị từ form về
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);
    
    // tính chu vi hcn
    var C=(length+width)*2;

    // hiển thị UI 
    document.getElementById("txtThongBao4").innerHTML = "Chu vi HCN: " + C;
}








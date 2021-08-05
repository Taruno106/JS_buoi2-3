// bt5: Tính tổng 2 kí số

/**
 * khối 1: input
 *  num: số có 2 chữ số
 * 
 * 
 * khối 2: các bước xử lý
 *  B1: Tạo và gán giá trị
 *  num, unit(số hàng đơn vị), ten(số hàng chục), sum
 * 
 *  B2: Lấy số hàng chục
 *  ten = Math.floor(num/10);
 * 
 *  B3: Lấy số hàng đơn vị
 *  unit = num %10; 
 * 
 *  B4: Tính tổng
 *  sum = ten + unit;
 * 
 * 
 * khối 3: ouput
 *  hiển thị ra console 
 *  tổng 2 kí số của số vừa nhập 
 * 
 * 
 */

document.getElementById("btnNumber").onclick = function(){
    // tạo biến và lấy giá trị từ form về
    var num = parseFloat(document.getElementById("number").value);

    var ten = Math.floor(num/10);
    var unit = num %10;
    var sum = ten + unit;

    document.getElementById("txtThongBao5").innerHTML = "Tổng 2 kí số: " + sum;

}








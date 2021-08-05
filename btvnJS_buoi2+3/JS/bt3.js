// bt3: quy đổi tiền

/**
 * khối 1: input
 *  usd: số usd nhập vào
 * 
 * 
 * khối 2: các bước xử lí
 *  B1: Tạo và gán giá trị
 *  usd, priceUsd
 * 
 *  B2: tính số tiền quy đổi ra vnd
 *  vnd = usd * priceUsd; 
 * 
 * 
 * khối 3: output
 * hiển thị kq ra console
 * số tiền quy đổi ra vnd
 * 
 * 
 * 
 * 
 * 
 */


document.getElementById("btnUSD").onclick = function(){
    // tạo biến và lấy giá trị từ form về 
    var priceUsd = 23500;
    var usd = document.getElementById("usd").value;

    // tính số tiền quy đổi ra vnd
    var vnd = usd * priceUsd;

    // hiển thị UI
    document.getElementById("txtThongBao3").innerHTML = "số tiền sau quy đổi: " + vnd + " VND";
}






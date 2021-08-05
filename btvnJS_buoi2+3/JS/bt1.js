// bt1: Tính tiền lương nhân viên

/**
 * khối 1: input 
 *  days: số ngày làm          
 * 
 * 
 * khối 2: các bước xử lí 
 *   B1: Tạo và gán giá trị
 *   days, salaryOnceDay
 * 
 *  B2: tính tiền lương 
 *  salary = salaryOnceDay * days;
 * 
 * 
 * 
 * khối 3: output
 * hiển thị kết quả console
 * Tiền lương nhân viên
 * 
 */



const salaryOnceDay = 100000;
document.getElementById("btnSalary").onclick = function(){
    // tạo biến và lấy giá trị tư form về
    var days = document.getElementById("days").value;
    // tính tiền lương
    var salary = salaryOnceDay * days;

    // hiển thị lên UI
    document.getElementById("txtThongBao1").innerHTML = "Tiền lương: " + salary;
}
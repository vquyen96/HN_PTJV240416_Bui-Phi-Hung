let listEmployee = localStorage.getItem("list-employee");
if (listEmployee) {
    listEmployee = JSON.parse(listEmployee)
} else {
    listEmployee = [
        {
            "code" : "A123",
            "name" : "HUng 1",
            "email": "email"
        },
        {
            "code" : "A124",
            "name" : "HUng 2",
            "email": "email"
        },
        {
            "code" : "A125",
            "name" : "HUng 3",
            "email": "email"
        }
    ]
}    
console.log(listEmployee);
gen_table(listEmployee);

function gen_table(listEmployee) {
    let list_employee_html = ""
    for (let i = 0; i < listEmployee.length; i++) {
        let rowContent = "<tr><td>" + (i+1) 
            + "</td><td>" + listEmployee[i]["code"] 
            + "</td><td>" + listEmployee[i]["name"]  
            + "</td><td>" + listEmployee[i]["email"]  
            + "</td><td><button class='btn-edit' onclick='edit_employee("+ i +")'>Sửa</button><button class='btn-del' onclick='delete_employee("+ i +")'>Xoá</button></td></tr>"
        list_employee_html += rowContent
        
    }
    document.getElementById('list-body').innerHTML = list_employee_html

}

function delete_employee(index) {
    if (confirm("Bạn có chắc chắn xoá")) {
        listEmployee.splice(index, 1);
        localStorage.setItem("list-employee", JSON.stringify(listEmployee));
        gen_table(listEmployee);
    }
    
}

function edit_employee(index) {
    let employee = listEmployee[index]
    document.getElementById("code").value = employee["code"];
    document.getElementById("name").value = employee["name"];
    document.getElementById("email").value = employee["email"];

    let button = document.getElementById("submit_button");
    button.setAttribute("onclick", "updateEmployee()");
    document.getElementById("submit_button").html = "Update Employee"
}

function updateEmployee(index) {
    let code=document.getElementById("code").value
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value

    if (code == null || code == "") {
        alert("Mã nhân viên không được để trống");
        return;
    }
    
    if (email == null || email == "") {
        alert("Email không được để trống");
        return;
    }

    let employee = {
        "code" : code,
        "name" : name,
        "email": email
    }
    listEmployee[index] = employee
    localStorage.setItem("list-employee", JSON.stringify(listEmployee));
    gen_table(listEmployee);
}

function addEmployee() {
    let code=document.getElementById("code").value
    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    
    if (code == null || code == "") {
        alert("Mã nhân viên không được để trống");
        return;
    }
    
    if (email == null || email == "") {
        alert("Email không được để trống");
        return;
    }

    let employee = {
        "code" : code,
        "name" : name,
        "email": email
    }
    listEmployee.push(employee);
    localStorage.setItem("list-employee", JSON.stringify(listEmployee));
    gen_table(listEmployee);   

    document.getElementById("code").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

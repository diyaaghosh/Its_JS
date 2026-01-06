let tracker=0;
function add_item(){
    document.getElementById("but").innerText="Add_item";
    let item_name=document.getElementById("name").value;
    let item_amount=document.getElementById("amount").value;
    let item_category=document.getElementById("Category").value;
    let date=document.getElementById("date").value;
    console.log(item_name);
    console.log(item_amount);
    console.log(item_category);
    console.log(date);
    let table=document.getElementById("expense_table").getElementsByTagName("tbody")[0];
    let row=table.insertRow();
    row.insertCell(0).innerText=item_name;
    row.insertCell(1).innerText=item_amount;
    row.insertCell(2).innerText=item_category;
    row.insertCell(3).innerText=date;
    row.insertCell(4).innerHTML = `
        <button onclick="editRow(this)">Edit</button>
        <button onclick="deleteRow(this)">Delete</button>
    `;
    tracker+=(Number)(item_amount);
    document.getElementById("name").value="";
    document.getElementById("amount").value="";
    document.getElementById("Category").value="";
    document.getElementById("date").value="";
    document.getElementById("message").innerText="Total : "+tracker;
}
function editRow(btn){
    document.getElementById("but").innerText="Save";
    let row = btn.parentElement.parentElement;
    item_name=row.cells[0].innerText;
    item_amount=row.cells[1].innerText;
    item_category= row.cells[2].innerText;
    date=row.cells[3].innerText;
    document.getElementById("name").value=item_name;
    document.getElementById("amount").value=item_amount;
    document.getElementById("Category").value=item_category;
    document.getElementById("date").value=date;
    row.remove();
    tracker-=(Number)(item_amount);
    document.getElementById("message").innerText="Total : "+tracker;
}
function deleteRow(btn){
     document.getElementById("but").innerText="Add_item";
    let row = btn.parentElement.parentElement;
    item_amount=row.cells[1].innerText;
    row.remove();
     tracker-=(Number)(item_amount);
     document.getElementById("message").innerText="Total : "+tracker;
}
function total(){
document.getElementById("message").innerText=tracker;
}
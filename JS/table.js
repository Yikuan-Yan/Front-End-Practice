//add
function addRow(){
    var table = document.getElementById('table')
    // console.log(table)
    var length = table.rows.length
    // console.log(length)
    //insert row
    var newRow = table.insertRow(length)
    console.log(newRow)
    //insert row data
    var nameCol = newRow.insertCell(0)
    var contactCol = newRow.insertCell(1)
    var operationCol = newRow.insertCell(2)
    nameCol.innerHTML = 'na name'
    contactCol.innerHTML = 'na contact'
    operationCol.innerHTML = '<button onclick="editRow(this)">edit</button><button onclick="deleteRow(this)">delete</button>'
}

//delete
function deleteRow(button){
    var row = button.parentNode.parentNode
    row.parentNode.removeChild(row)
}

//edit
function editRow(button){
    var row = button.parentNode.parentNode
    var name = row.cells[0]
    var contact = row.cells[1]
    var inputName = prompt('Type Name: ')
    var inputContact = prompt('Type Contact Number: ')

    name.innerHTML = inputName
    contact.innerHTML = inputContact
}
document.getElementById('patientForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const disease = document.getElementById('disease').value;

    addPatient(name, age, disease);

    // Clear input fields
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('disease').value = '';
});

function addPatient(name, age, disease) {
    const table = document.getElementById('patientList');
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);

    cell1.textContent = name;
    cell2.textContent = age;
    cell3.textContent = disease;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function () {
        table.deleteRow(row.rowIndex - 1);
    });
    cell4.appendChild(deleteBtn);
}

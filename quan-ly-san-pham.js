let products = [];
let idProduct = 0;

displayCount();

function addProduct() {
    let addProductElement = document.getElementById("newProduct");

    if (!addProductElement.value) {
        alert('Ban phai nhap ten san pham!');
        return;
    }

    let product = {
        id: ++idProduct,
        name: addProductElement.value
    };
    products.push(product);
    addProductElement.value = '';
    addRow(product);
    displayCount();
}

function displayCount() {
    let countText = '';
    switch (products.length) {
        case 0:
            countText = 'No product';
            break;
        case 1:
            countText = '1 product';
            break;
        default:
            countText = products.length + ' products';
            break;
    }
    document.getElementById('countProduct').innerHTML = countText;
}

function addRow(product) {
    let tbodyElement = document.getElementById('displayProduct');

    // tao dong moi
    let row = document.createElement('tr');
    let cellText = document.createElement('td');
    let cellEdit = document.createElement('td');
    let cellDelete = document.createElement('td');
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    let productName = document.createTextNode(product.name);
    cellText.appendChild(productName);

    editButton.setAttribute('id', 'editButton' + product.id);
    editButton.innerHTML = 'Edit';
    editButton.onclick = function () {
        showEdit(product);
    };
    cellEdit.appendChild(editButton);

    deleteButton.setAttribute('id', 'deleteButton' + product.id);
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        deleteProduct(product.id);
    };
    cellDelete.appendChild(deleteButton);

    row.appendChild(cellText);
    row.appendChild(cellEdit);
    row.appendChild(cellDelete);

    tbodyElement.appendChild(row);
}

function showEdit(product) {
    
}

function deleteProduct(id) {

}
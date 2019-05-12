let products = [];
let idProduct = 0;
let editForm = document.getElementById('showEdit');
let editProduct = document.getElementById('editProduct');
let selectedProductId = document.getElementById('selectedProductId');
let tbodyElement = document.getElementById('displayProduct');

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

    // tao dong moi
    let row = document.createElement('tr');
    let cellText = document.createElement('td');
    let cellEdit = document.createElement('td');
    let cellDelete = document.createElement('td');
    let editButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    row.setAttribute('id', 'row' + product.id);

    cellText.setAttribute('id', 'productName' + product.id);
    cellText.innerHTML = product.name;

    editButton.setAttribute('id', 'editButton' + product.id);
    editButton.innerHTML = 'Edit';
    editButton.onclick = function () {
        showEditForm(product);
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

function showEditForm(product) {
    editForm.style.display = "block";
    editProduct.value = product.name;
    selectedProductId.value = product.id;
}

function hideEditForm() {
    editForm.style.display = "none";
    editProduct.value = "";
    selectedProductId.value = "";
}

function save() {
    let selectedProduct = products.find(function (product) {
        return product.id == selectedProductId.value;
    });
    selectedProduct.name = editProduct.value;
    document.getElementById('productName' + selectedProduct.id).innerHTML = selectedProduct.name;
    hideEditForm();
}

function deleteProduct(id) {
    let productIndex = products.findIndex(function(product) {
        return product.id == id;
    });
    products.splice(productIndex, 1);
    let row = document.getElementById('row' + id);
    tbodyElement.removeChild(row);
}
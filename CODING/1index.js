let inventory = [];

// Function to update the summary (Total Products, Out of Stock, Low Stock)
function updateSummary() {
    let totalProducts = inventory.length;
    let outOfStock = inventory.filter(item => item.stock === 0).length;
    let lowStock = inventory.filter(item => item.stock > 0 && item.stock <= 5).length;

    // Update summary boxes
    document.querySelector('.summary .summary-box:nth-child(1) p').innerText = totalProducts;
    document.querySelector('.summary .summary-box:nth-child(2) p').innerText = outOfStock;
    document.querySelector('.summary .summary-box:nth-child(3) p').innerText = lowStock;
}

// Function to display the inventory list in the table
function displayInventory() {
    const tableContainer = document.getElementById('inventory-tables');
    tableContainer.innerHTML = ''; // Clear previous tables

    // Group inventory by category
    const categories = [...new Set(inventory.map(item => item.category))];

    categories.forEach(category => {
        const categoryTable = document.createElement('div');
        categoryTable.classList.add('category-table');
        
        // Create the category heading
        const categoryHeading = document.createElement('h2');
        categoryHeading.textContent = category;
        categoryTable.appendChild(categoryHeading);

        // Create the table for each category
        const table = document.createElement('table');
        table.innerHTML = `
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
        `;

        // Add rows for products
        inventory.filter(item => item.category === category).forEach(item => {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.stock}</td>
                <td class="${item.stock === 0 ? 'out-of-stock' : item.stock <= 5 ? 'low-stock' : 'in-stock'}">
                    ${item.stock === 0 ? 'Out of Stock' : item.stock <= 5 ? 'Low Stock' : 'In Stock'}
                </td>
                <td>
                    <button class="update-stock-btn" data-id="${item.id}">Update Stock</button>
                    <button class="delete-btn" data-id="${item.id}">Delete</button>
                </td>
            `;
            table.appendChild(row);
        });

        categoryTable.appendChild(table);
        tableContainer.appendChild(categoryTable);
    });

    // Attach event listeners for delete and update stock buttons
    attachEventListeners();
}

// Function to add a new product
function addProduct() {
    const productId = prompt("Enter Product ID:");
    const productName = prompt("Enter Product Name:");
    const productCategory = prompt("Enter Product Category:");
    const productStock = parseInt(prompt("Enter Product Stock:"), 10);

    // Push the new product to the inventory
    inventory.push({ id: productId, name: productName, category: productCategory, stock: productStock });

    // Update the display
    displayInventory();
    updateSummary();
}

// Function to update stock of a product
function updateStock(productId) {
    const product = inventory.find(item => item.id === productId);
    if (product) {
        const newStock = parseInt(prompt(`Enter new stock for ${product.name}:`), 10);
        if (!isNaN(newStock) && newStock >= 0) {
            product.stock = newStock;
            displayInventory();
            updateSummary();
        } else {
            alert("Invalid stock value.");
        }
    } else {
        alert("Product not found.");
    }
}

// Function to delete a product
function deleteProduct(productId) {
    inventory = inventory.filter(item => item.id !== productId);
    displayInventory();
    updateSummary();
}

// Function to attach event listeners for delete and update buttons
function attachEventListeners() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            deleteProduct(productId);
        });
    });

    const updateButtons = document.querySelectorAll('.update-stock-btn');
    updateButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            updateStock(productId);
        });
    });
}

// Event listener to add new product
document.querySelector('.add-item-btn').addEventListener('click', addProduct);

// Initial load of data
window.onload = function() {
    displayInventory();
    updateSummary();
}

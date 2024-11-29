// drop down//
function toggleDropdown(button) {
    // Get the dropdown content element
    const dropdownContent = button.nextElementSibling;

    // Toggle visibility
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        button.querySelector(".arrow").classList.remove("rotate");
    } else {
        // Hide other dropdowns
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.style.display = "none";
            content.previousElementSibling.querySelector(".arrow").classList.remove("rotate");
        });

        // Show current dropdown
        dropdownContent.style.display = "block";
        button.querySelector(".arrow").classList.add("rotate");
    }
}

// Close dropdowns if clicking outside
document.addEventListener("click", (e) => {
    const isDropdown = e.target.matches(".dropbtn, .dropbtn *");
    if (!isDropdown) {
        document.querySelectorAll(".dropdown-content").forEach((content) => {
            content.style.display = "none";
            content.previousElementSibling.querySelector(".arrow").classList.remove("rotate");
        });
    }
});
//price calculator//
const quantityInput = document.getElementById('quantity');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const pricePerItem = 20.00; // Price of a single item
const totalPriceElement = document.getElementById('total-price');

// Function to update the total price
function updateTotalPrice() {
    const quantity = parseInt(quantityInput.value, 10) || 1; // Default to 1 if invalid input
    const totalPrice = quantity * pricePerItem;
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

// Increase quantity
increaseBtn.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value, 10) + 1;
    updateTotalPrice();
});

// Decrease quantity
decreaseBtn.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
        updateTotalPrice();
    }
});

// Update total price when input changes directly
quantityInput.addEventListener('input', updateTotalPrice);
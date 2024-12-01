//menu drop down//
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuToggle.addEventListener('click', function () {
        // Toggle the visibility of the dropdown menu
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Close the menu if the user clicks outside
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
// filter drop down//
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
document.addEventListener("DOMContentLoaded", function () {
    const productPage = document.querySelector(".product-page");

    // Color selection
    const colorBoxes = productPage.querySelectorAll(".color-box");
    const selectedColorSpan = productPage.querySelector("#selected-color");

    colorBoxes.forEach((box) => {
        box.addEventListener("click", () => {
            colorBoxes.forEach((b) => b.classList.remove("active"));
            box.classList.add("active");
            const color = box.getAttribute("data-color");
            selectedColorSpan.textContent = color;
        });
    });

    // Quantity and total price
    const decreaseBtn = productPage.querySelector("#decrease");
    const increaseBtn = productPage.querySelector("#increase");
    const quantityInput = productPage.querySelector("#quantity");
    const totalPriceEl = productPage.querySelector("#total-price");
    const pricePerItem = 50;

    function updateTotal() {
        const quantity = parseInt(quantityInput.value, 10) || 1;
        totalPriceEl.textContent = `Total: $${(pricePerItem * quantity).toFixed(2)}`;
    }

    decreaseBtn.addEventListener("click", function () {
        let quantity = parseInt(quantityInput.value, 10) || 1;
        if (quantity > 1) quantity--;
        quantityInput.value = quantity;
        updateTotal();
    });

    increaseBtn.addEventListener("click", function () {
        let quantity = parseInt(quantityInput.value, 10) || 1;
        quantity++;
        quantityInput.value = quantity;
        updateTotal();
    });

    quantityInput.addEventListener("input", updateTotal);

    // Size selection
    const sizeBoxes = productPage.querySelectorAll(".size-box");
    const selectedSizeEl = productPage.querySelector("#selected-size");

    sizeBoxes.forEach((box) => {
        box.addEventListener("click", function () {
            sizeBoxes.forEach((b) => b.classList.remove("active"));
            this.classList.add("active");
            selectedSizeEl.textContent = `Size: ${this.dataset.size}`;
        });
    });
});
// ============================================
// KODA CAFE - WITH YOUR CUSTOM DRAWINGS!
// ============================================

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const modal = document.getElementById('orderModal');
const closeModalBtn = document.getElementById('closeModal');
const orderBtn = document.getElementById('orderBtn');
const animationOverlay = document.getElementById('animationOverlay');
const successMessage = document.getElementById('successMessage');
const orderSummary = document.getElementById('orderSummary');

// Modal content elements
const modalItemName = document.getElementById('modalItemName');
const modalItemDescription = document.getElementById('modalItemDescription');
const modalImageContainer = document.getElementById('modalImageContainer');
const modalItemImage = document.getElementById('modalItemImage');
const customizationSection = document.getElementById('customizationSection');
const foamOptions = document.getElementById('foamOptions');
const syrupOptions = document.getElementById('syrupOptions');
const foamSelect = document.getElementById('foamSelect');
const syrupSelect = document.getElementById('syrupSelect');

// Current selected item
let currentItem = null;

// NOTE: Cold foam and syrup options are defined in index.html dropdowns.
// Items with hasCustomization: true will show those dropdowns.
// Current foam options: Vanilla Syrup Cold Foam, Brown Sugar Cold Foam,
//   Ube Cold Foam, Pandan Cold Foam, Matcha Cold Foam, Specialty Fruit Cold Foam
// Current syrup options: Banana Syrup, Vanilla Syrup, Brown Sugar Syrup, Specialty Fruit Syrup

const menuItems = [
    {
        id: 1,
        name: "Pour over Coffee",
        description: "Classic slow-drip coffee, smooth and rich",
        price: 4.50,
        category: "coffee",
        image: "images/drip-coffee.png"
    },
    {
        id: 2,
        name: "Espresso Tonic",
        description: "Refreshing espresso with tonic water and ice",
        price: 5.50,
        category: "coffee",
        image: "images/espresso-tonic.png"
    },
    {
        id: 3,
        name: "Iced Latte with Cold Foam",
        description: "Smooth iced latte topped with velvety cold foam",
        price: 6.00,
        category: "coffee",
        hasCustomization: true,
        image: "images/iced-drink.png"  // Your hand-drawn iced drink!
    },
    {
        id: 4,
        name: "Iced Matcha with Cold Foam",
        description: "Premium matcha with silky cold foam on top",
        price: 6.50,
        category: "matcha",
        hasCustomization: true,
        image: "images/matcha-bowl.png"  // Your hand-drawn matcha bowl!
    }
];

// ============================================
// DISPLAY MENU WITH YOUR CUSTOM IMAGES
// ============================================

function displayMenu() {
    menuGrid.innerHTML = '';
    
    menuItems.forEach((item, index) => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-item';
        menuCard.setAttribute('data-item-id', item.id);
        
        // Build the card HTML with your custom image
        menuCard.innerHTML = `
            <span class="item-number">${index + 1}.</span>
            <div class="item-image-container">
                <img src="${item.image}" alt="${item.name}" class="item-image">
            </div>
            <h3 class="item-name">${item.name}</h3>
            <p class="item-description">${item.description}</p>
        `;
        
        // Add click event to open modal
        menuCard.addEventListener('click', () => openOrderModal(item));
        
        menuGrid.appendChild(menuCard);
    });
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function openOrderModal(item) {
    currentItem = item;
    
    // Set modal content
    modalItemName.textContent = item.name;
    modalItemDescription.textContent = item.description;
    
    // Show item image in modal
    modalItemImage.src = item.image;
    modalItemImage.alt = item.name;
    
    // Show/hide customization options based on item
    if (item.hasCustomization) {
        customizationSection.style.display = 'block';
        foamOptions.style.display = 'block';
        syrupOptions.style.display = 'block';
    } else {
        customizationSection.style.display = 'none';
        foamOptions.style.display = 'none';
        syrupOptions.style.display = 'none';
    }
    
    // Reset selections
    foamSelect.value = '';
    syrupSelect.value = '';
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentItem = null;
}

// ============================================
// ORDER PROCESSING
// ============================================

function placeOrder() {
    if (!currentItem) return;
    
    // Disable order button
    orderBtn.disabled = true;
    orderBtn.innerHTML = '<span class="btn-text">Processing...</span>';
    
    // Get customizations
    const customizations = [];
    
    if (foamSelect.value) {
        customizations.push(foamSelect.value);
    }
    
    if (syrupSelect.value) {
        customizations.push(syrupSelect.value);
    }
    
    // Build order summary (no price)
    let summary = `${currentItem.name}`;
    if (customizations.length > 0) {
        summary += `<br><small>+ ${customizations.join(', ')}</small>`;
    }
    
    // Log order to console
    console.log('🐶 ORDER PLACED:', {
        item: currentItem.name,
        price: currentItem.price,
        customizations: customizations.length > 0 ? customizations : 'None',
        timestamp: new Date().toISOString()
    });
    
    // Close modal
    closeOrderModal();
    
    // Show YOUR custom espresso machine animation!
    showBrewingAnimation();
    
    // Wait 2 seconds for animation
    setTimeout(() => {
        // Hide animation
        hideBrewingAnimation();
        
        // Update and show success message
        orderSummary.innerHTML = summary;
        showSuccessMessage();
        
        // Hide success message after 3 seconds
        setTimeout(() => {
            hideSuccessMessage();
            
            // Re-enable order button (no emoji, matching your updated HTML)
            orderBtn.disabled = false;
            orderBtn.innerHTML = '<span class="btn-text">Order Now</span>';
        }, 3000);
    }, 2000);
}

// ============================================
// ANIMATION FUNCTIONS
// ============================================

function showBrewingAnimation() {
    animationOverlay.classList.add('active');
}

function hideBrewingAnimation() {
    animationOverlay.classList.remove('active');
}

function showSuccessMessage() {
    successMessage.classList.add('active');
}

function hideSuccessMessage() {
    successMessage.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

// Close modal button
closeModalBtn.addEventListener('click', closeOrderModal);

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeOrderModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeOrderModal();
    }
});

// Order button
orderBtn.addEventListener('click', placeOrder);

// ============================================
// INITIALIZATION
// ============================================

// Display menu when page loads
document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    
    // Fun console messages
    console.log('%c🐶☕ Welcome to Koda Cafe! ☕🐶', 'font-size: 24px; color: #c74033; font-weight: bold;');
    console.log('%c✨ Featuring YOUR hand-drawn illustrations! ✨', 'font-size: 16px; color: #2c1810; font-weight: bold;');
    console.log('%cAll your beautiful artwork is now integrated into the website!', 'font-size: 14px; color: #666;');
});

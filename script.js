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
        name: "Flat White",
        description: "Velvety microfoam poured over a double ristretto espresso",
        price: 5.50,
        category: "coffee",
        hasCustomization: true,
        customizationType: "flatwhite",
        image: "images/flat-white.png"
    },
    {
        id: 3,
        name: "Latte",
        description: "Smooth espresso with steamed milk and velvety cold foam",
        price: 6.00,
        category: "coffee",
        hasCustomization: true,
        customizationType: "latte",
        image: "images/iced-drink.png"
    },
    {
        id: 4,
        name: "Matcha Latte",
        description: "Premium matcha with steamed milk and silky cold foam on top",
        price: 6.50,
        category: "matcha",
        hasCustomization: true,
        customizationType: "latte",
        image: "images/matcha-bowl.png"
    },
    {
        id: 5,
        name: "Espresso Tonic",
        description: "Refreshing espresso with tonic water and ice",
        price: 5.50,
        category: "coffee",
        hasCustomization: true,
        customizationType: "espressotonic",
        image: "images/espresso-tonic.png"
    },
    {
        id: 6,
        name: "Affogato",
        description: "Velvety vanilla ice cream drowned in a rich, bold shot of espresso",
        price: 7.00,
        category: "coffee",
        hasCustomization: true,
        customizationType: "affogato",
        image: "images/affogato.png"
    },
    {
        id: 7,
        name: "Espresso Martini",
        description: "A silky, bold cocktail shaken with espresso, vodka, and coffee liqueur",
        price: 13.00,
        category: "cocktail",
        hasCustomization: true,
        customizationType: "martini",
        image: "images/espresso-martini.png"
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
    
    // Show/hide customization options based on item type
    if (item.hasCustomization) {
        customizationSection.style.display = 'block';

        if (item.customizationType === 'flatwhite') {
            // Flat White: syrup + milk only (always served hot)
            foamOptions.style.display = 'block';
            foamOptions.querySelector('label').textContent = 'Add a Syrup:';
            foamSelect.innerHTML = `
                <option value="">No Syrup</option>
                <option value="Banana Syrup">Banana Syrup</option>
                <option value="Vanilla Syrup">Vanilla Syrup</option>
                <option value="Brown Sugar Syrup">Brown Sugar Syrup</option>
                <option value="Specialty Fruit Syrup">Specialty Fruit Syrup</option>
            `;
            syrupOptions.style.display = 'block';
            syrupOptions.querySelector('label').textContent = 'Milk Option:';
            syrupSelect.innerHTML = `
                <option value="">Regular Milk</option>
                <option value="Almond Milk">Almond Milk</option>
                <option value="Oat Milk">Oat Milk</option>
            `;

        } else if (item.customizationType === 'espressotonic') {
            // Espresso Tonic: syrup only
            foamOptions.style.display = 'block';
            foamOptions.querySelector('label').textContent = 'Add a Syrup:';
            foamSelect.innerHTML = `
                <option value="">No Syrup</option>
                <option value="Banana Syrup">Banana Syrup</option>
                <option value="Vanilla Syrup">Vanilla Syrup</option>
                <option value="Brown Sugar Syrup">Brown Sugar Syrup</option>
                <option value="Specialty Fruit Syrup">Specialty Fruit Syrup</option>
            `;
            syrupOptions.style.display = 'none';

        } else if (item.customizationType === 'latte') {
            // Latte / Matcha Latte: temperature, milk, cold foam, syrup
            foamOptions.style.display = 'block';
            foamOptions.querySelector('label').textContent = 'Temperature:';
            foamSelect.innerHTML = `
                <option value="">Select temperature</option>
                <option value="Iced">Iced</option>
                <option value="Hot">Hot</option>
            `;
            syrupOptions.style.display = 'block';
            syrupOptions.querySelector('label').textContent = 'Milk Option:';
            syrupSelect.innerHTML = `
                <option value="">Regular Milk</option>
                <option value="Almond Milk">Almond Milk</option>
                <option value="Oat Milk">Oat Milk</option>
            `;
            // Inject cold foam + syrup rows below
            const existing = document.getElementById('latteExtras');
            if (existing) existing.remove();
            const extras = document.createElement('div');
            extras.id = 'latteExtras';
            extras.innerHTML = `
                <div class="option-group" style="margin-top:20px;">
                    <label class="option-label">Choose Your Cold Foam:</label>
                    <select class="option-select" id="coldFoamSelect">
                        <option value="">No Cold Foam</option>
                        <option value="Vanilla Syrup Cold Foam">Vanilla Syrup Cold Foam</option>
                        <option value="Brown Sugar Cold Foam">Brown Sugar Cold Foam</option>
                        <option value="Ube Cold Foam">Ube Cold Foam</option>
                        <option value="Pandan Cold Foam">Pandan Cold Foam</option>
                        <option value="Matcha Cold Foam">Matcha Cold Foam</option>
                        <option value="Specialty Fruit Cold Foam">Specialty Fruit Cold Foam</option>
                    </select>
                </div>
                <div class="option-group" style="margin-top:20px;">
                    <label class="option-label">Add a Syrup:</label>
                    <select class="option-select" id="latteSyrupSelect">
                        <option value="">No Syrup</option>
                        <option value="Banana Syrup">Banana Syrup</option>
                        <option value="Vanilla Syrup">Vanilla Syrup</option>
                        <option value="Brown Sugar Syrup">Brown Sugar Syrup</option>
                        <option value="Specialty Fruit Syrup">Specialty Fruit Syrup</option>
                    </select>
                </div>
            `;
            customizationSection.appendChild(extras);

        } else if (item.customizationType === 'affogato') {
            // Affogato: base choice only
            foamOptions.style.display = 'block';
            foamOptions.querySelector('label').textContent = 'Choose Your Base:';
            foamSelect.innerHTML = `
                <option value="">Select an option</option>
                <option value="Matcha">Matcha</option>
                <option value="Espresso">Espresso</option>
            `;
            syrupOptions.style.display = 'none';

        } else if (item.customizationType === 'martini') {
            // Espresso Martini: espresso type only
            foamOptions.style.display = 'block';
            foamOptions.querySelector('label').textContent = 'Choose Your Espresso:';
            foamSelect.innerHTML = `
                <option value="">Select an option</option>
                <option value="Decaf">Decaf</option>
                <option value="Espresso">Espresso</option>
            `;
            syrupOptions.style.display = 'none';

        } else {
            // Default fallback
            foamOptions.style.display = 'none';
            syrupOptions.style.display = 'none';
        }
    } else {
        customizationSection.style.display = 'none';
        foamOptions.style.display = 'none';
        syrupOptions.style.display = 'none';
    }
    
    // Reset all selections (including any latte extras)
    foamSelect.value = '';
    syrupSelect.value = '';
    const coldFoamEl = document.getElementById('coldFoamSelect');
    const latteSyrupEl = document.getElementById('latteSyrupSelect');
    if (coldFoamEl) coldFoamEl.value = '';
    if (latteSyrupEl) latteSyrupEl.value = '';

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentItem = null;
    // Remove any dynamically added latte extras
    const extras = document.getElementById('latteExtras');
    if (extras) extras.remove();
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

    // Also capture latte-specific cold foam and syrup if present
    const coldFoamSelect = document.getElementById('coldFoamSelect');
    const latteSyrupSelect = document.getElementById('latteSyrupSelect');
    if (coldFoamSelect && coldFoamSelect.value) {
        customizations.push(coldFoamSelect.value);
    }
    if (latteSyrupSelect && latteSyrupSelect.value) {
        customizations.push(latteSyrupSelect.value);
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
        orderSummary.style.display = customizations.length > 0 ? 'block' : 'none';
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

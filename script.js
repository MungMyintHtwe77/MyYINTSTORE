// Product data with Thai Baht pricing
const products = [
    {
        id: 1,
        name: "iPhone 15 Pro",
        category: "smartphones",
        price: 45900,
        image: "https://pixabay.com/get/g56f8604704c8184390afddd8ef02d2e5cda78456bb107f69107e2a72e4a96fac394b4af70915657421b87169d87fd6a2421509d0027b8aac86084daf0dacfd9c_1280.jpg",
        description: "Latest iPhone with A17 Pro chip, titanium design, and advanced camera system.",
        specifications: {
            display: "6.1-inch Super Retina XDR",
            storage: "128GB",
            camera: "48MP Main Camera",
            battery: "Up to 23 hours video playback"
        }
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        category: "smartphones",
        price: 52900,
        image: "https://pixabay.com/get/gf5fe3c3668378ad3b4386aa9c251482ca006e53143a4b7d3651de4cd80b7fbec8124a0381a1b1c2d20a31208abe4a5883359c6c1de020e0de1e4f9cc320bd8f3_1280.jpg",
        description: "Premium Android flagship with S Pen, 200MP camera, and AI features.",
        specifications: {
            display: "6.8-inch Dynamic AMOLED 2X",
            storage: "256GB",
            camera: "200MP Main Camera",
            battery: "5000mAh"
        }
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        category: "smartphones",
        price: 35900,
        image: "https://pixabay.com/get/ge65ec15a16477d0d85ef497d077b2d982aa57860c9b58a2de2bb2a8871039603aab01c5a162684a068fc9a373db360ab4a86198a3f66bcd62d8c6f33bc293966_1280.jpg",
        description: "Google's flagship with Tensor G3 chip, advanced AI photography, and pure Android.",
        specifications: {
            display: "6.7-inch LTPO OLED",
            storage: "128GB",
            camera: "50MP Main Camera",
            battery: "5050mAh"
        }
    },
    {
        id: 4,
        name: "OnePlus 12",
        category: "smartphones",
        price: 28900,
        image: "https://pixabay.com/get/g159113409825311ecf8824a5eb18a60013e730e0540e0310bb3c48dc2605df2f5c8e23074b0a72a58ee829ca0ceccf8b7d5f3d97ee319b58f0e6f262144f8496_1280.jpg",
        description: "Flagship killer with Snapdragon 8 Gen 3, fast charging, and OxygenOS.",
        specifications: {
            display: "6.82-inch LTPO AMOLED",
            storage: "256GB",
            camera: "50MP Main Camera",
            battery: "5400mAh"
        }
    },
    {
        id: 5,
        name: "Xiaomi 14 Ultra",
        category: "smartphones",
        price: 42900,
        image: "https://pixabay.com/get/gad63b5ef06cab6d52bf0b080aaa7d364d2923b765bb93a7de64a91720c3340518990f00fd3ae6f3972c3f6a74d9d51cb25581b3ddada79ef2e394b7f6ac02ce5_1280.jpg",
        description: "Photography-focused flagship with Leica cameras and premium build quality.",
        specifications: {
            display: "6.73-inch LTPO AMOLED",
            storage: "512GB",
            camera: "50MP Leica Camera System",
            battery: "5300mAh"
        }
    },
    {
        id: 6,
        name: "Nothing Phone (2a)",
        category: "smartphones",
        price: 15900,
        image: "https://pixabay.com/get/g874ce2cfd708af6bce7e753926795fba0671f454606b1d811877edb2c44e2c8b62c5b2213aa0b2f69ab36b14fdc03ae75e44ced583e8d5e1f737f15f3264465b_1280.jpg",
        description: "Unique transparent design with Glyph interface and clean software experience.",
        specifications: {
            display: "6.7-inch AMOLED",
            storage: "128GB",
            camera: "50MP Dual Camera",
            battery: "5000mAh"
        }
    },
    {
        id: 7,
        name: "Wireless Charging Pad",
        category: "accessories",
        price: 1299,
        image: "https://pixabay.com/get/g28a910014fb0ee41a9d0378d99e58950a4202e8905c10adda6bb8d753eabdfbe7ee214c059b3acc0d573f7ecf00cc1426a7fe4175ada219ea128c9b4fdabedb5_1280.jpg",
        description: "15W fast wireless charging pad compatible with all Qi-enabled devices.",
        specifications: {
            power: "15W Fast Charging",
            compatibility: "Qi-enabled devices",
            features: "LED indicator, heat protection",
            dimensions: "100mm x 100mm x 8mm"
        }
    },
    {
        id: 8,
        name: "Premium Phone Case",
        category: "accessories",
        price: 899,
        image: "https://pixabay.com/get/g09c79914547b23fefb07f021a2af806936cebf98ac863ae76b726d86019d42117c2987d8f3a70906bb3ddfa51a259eb323f60d98d348d3ff8d3c7bccd812c81c_1280.jpg",
        description: "Premium leather case with card slots and magnetic closure.",
        specifications: {
            material: "Genuine leather",
            features: "Card slots, magnetic closure",
            protection: "360-degree protection",
            colors: "Black, Brown, Blue"
        }
    },
    {
        id: 9,
        name: "Bluetooth Headphones",
        category: "accessories",
        price: 2599,
        image: "https://pixabay.com/get/gf08b77415ac83b06c29b6c608b8a48d8e022c9443434ac9329d93ed6e361e7f82cf9ccf477e4b31c762923d10b2e0b1b0106e4f249e94ef3a055c134ee133d5b_1280.jpg",
        description: "High-quality wireless headphones with active noise cancellation.",
        specifications: {
            connectivity: "Bluetooth 5.0",
            battery: "30-hour playback",
            features: "Active noise cancellation",
            drivers: "40mm dynamic drivers"
        }
    },
    {
        id: 10,
        name: "USB-C Cable",
        category: "accessories",
        price: 299,
        image: "https://pixabay.com/get/g4cce942d1d258fe9a3acea4fc0b2a04df79d731ee3ddceac3d10a5bf3baf17c852fbf245a8d557fb3164fc525b66dfaca4eb6da02318438a6187294ab30b7ac2_1280.jpg",
        description: "High-speed USB-C cable with 100W power delivery and data transfer.",
        specifications: {
            length: "1.5 meters",
            power: "100W Power Delivery",
            speed: "480 Mbps data transfer",
            durability: "10,000+ bend cycles"
        }
    }
];

// Shopping cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM elements
const cartCountElement = document.getElementById('cart-count');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Load featured products on home page
    if (document.getElementById('featured-products')) {
        loadFeaturedProducts();
    }
    
    // Load all products on products page
    if (document.getElementById('products-container')) {
        loadAllProducts();
        setupSearchAndFilter();
    }
    
    // Load cart items on cart page
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }
    
    // Setup mobile menu
    setupMobileMenu();
    
    // Setup animations
    setupAnimations();
});

// Format price in Thai Baht
function formatPrice(price) {
    return new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card fade-in">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                    <button class="btn btn-secondary" onclick="showProductDetails(${product.id})">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Load featured products (first 6 products)
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    const featuredProducts = products.slice(0, 6);
    
    container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Load all products with filtering
function loadAllProducts(filteredProducts = null) {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    const productsToShow = filteredProducts || products;
    
    if (productsToShow.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Trigger animations
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

// Setup search and filter functionality
function setupSearchAndFilter() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    
    if (!searchInput || !categoryFilter || !priceFilter) return;
    
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedPriceRange = priceFilter.value;
        
        let filtered = products.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                                product.description.toLowerCase().includes(searchTerm);
            
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            
            let matchesPrice = true;
            if (selectedPriceRange !== 'all') {
                const [min, max] = selectedPriceRange.split('-').map(Number);
                matchesPrice = product.price >= min && (max ? product.price <= max : true);
            }
            
            return matchesSearch && matchesCategory && matchesPrice;
        });
        
        loadAllProducts(filtered);
    }
    
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show success message
    showNotification('Product added to cart!', 'success');
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (document.getElementById('cart-items')) {
        loadCartItems();
    }
    
    showNotification('Product removed from cart', 'info');
}

// Update quantity in cart
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            
            if (document.getElementById('cart-items')) {
                loadCartItems();
            }
        }
    }
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Load cart items on cart page
function loadCartItems() {
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    if (!container || !totalElement) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Start shopping to add items to your cart</p>
                <a href="products.html" class="btn btn-primary">Shop Now</a>
            </div>
        `;
        totalElement.innerHTML = '';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>Quantity: ${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i> Remove
            </button>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalElement.innerHTML = `
        <h3>Total: ${formatPrice(total)}</h3>
        <button class="checkout-btn" onclick="checkout()">
            <i class="fas fa-credit-card"></i> Proceed to Checkout
        </button>
    `;
}

// Show product details modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: start;">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 10px;">
                <div>
                    <h2>${product.name}</h2>
                    <p style="color: #666; margin: 1rem 0;">${product.description}</p>
                    <div style="font-size: 1.5rem; font-weight: bold; color: #e74c3c; margin: 1rem 0;">
                        ${formatPrice(product.price)}
                    </div>
                    <div style="margin: 2rem 0;">
                        <h4>Specifications:</h4>
                        <ul style="margin: 1rem 0; padding-left: 1.5rem;">
                            ${Object.entries(product.specifications).map(([key, value]) => 
                                `<li style="margin: 0.5rem 0;"><strong>${key}:</strong> ${value}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();" style="width: 100%;">
                        <i class="fas fa-cart-plus"></i> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Checkout functionality
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Simulate checkout process
    if (confirm(`Proceed with checkout for ${formatPrice(total)}?\n\nThis is a demo - no actual payment will be processed.`)) {
        cart = [];
        localStorage.removeItem('cart');
        updateCartCount();
        
        showNotification('Order placed successfully! Thank you for your purchase.', 'success');
        
        // Redirect to home page after successful checkout
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}

// Setup mobile menu
function setupMobileMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Setup scroll animations
function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle"></i>
        ${message}
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Handle URL parameters for category filtering
function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (category && document.getElementById('category-filter')) {
        document.getElementById('category-filter').value = category;
        setTimeout(() => {
            document.getElementById('category-filter').dispatchEvent(new Event('change'));
        }, 100);
    }
}

// Call URL parameter handler on page load
document.addEventListener('DOMContentLoaded', handleUrlParams);

// Product comparison functionality
let compareList = JSON.parse(localStorage.getItem('compareList')) || [];

function addToCompare(productId) {
    if (compareList.length >= 3) {
        showNotification('You can only compare up to 3 products at a time', 'error');
        return;
    }
    
    if (compareList.includes(productId)) {
        showNotification('Product already in comparison list', 'info');
        return;
    }
    
    compareList.push(productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    showNotification('Product added to comparison', 'success');
}

function removeFromCompare(productId) {
    compareList = compareList.filter(id => id !== productId);
    localStorage.setItem('compareList', JSON.stringify(compareList));
    showNotification('Product removed from comparison', 'info');
}

function showComparison() {
    if (compareList.length === 0) {
        showNotification('No products to compare', 'info');
        return;
    }
    
    const compareProducts = compareList.map(id => products.find(p => p.id === id)).filter(Boolean);
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 1000px;">
            <span class="close" onclick="closeModal()">&times;</span>
            <h2>Product Comparison</h2>
            <div style="display: grid; grid-template-columns: repeat(${compareProducts.length}, 1fr); gap: 1rem; margin-top: 2rem;">
                ${compareProducts.map(product => `
                    <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 10px;">
                        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 5px;">
                        <h3>${product.name}</h3>
                        <div style="font-weight: bold; color: #e74c3c; margin: 1rem 0;">${formatPrice(product.price)}</div>
                        <div>
                            <h4>Specifications:</h4>
                            <ul style="list-style: none; padding: 0;">
                                ${Object.entries(product.specifications).map(([key, value]) => 
                                    `<li style="margin: 0.5rem 0; padding: 0.25rem; background: #f8f9fa; border-radius: 3px;">
                                        <strong>${key}:</strong> ${value}
                                    </li>`
                                ).join('')}
                            </ul>
                        </div>
                        <button class="btn btn-primary" onclick="addToCart(${product.id}); closeModal();" style="width: 100%; margin-top: 1rem;">
                            Add to Cart
                        </button>
                    </div>
                `).join('')}
            </div>
            <button onclick="clearComparison(); closeModal();" style="background: #e74c3c; color: white; padding: 0.5rem 1rem; border: none; border-radius: 5px; margin-top: 1rem;">
                Clear Comparison
            </button>
        </div>
    `;
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

function clearComparison() {
    compareList = [];
    localStorage.removeItem('compareList');
    showNotification('Comparison list cleared', 'info');
}

// Main Application Logic

// Check Auth
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const isLoginPage = currentPage === 'index.html';

async function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('auth_token');
    if (!isLoggedIn && !isLoginPage) {
        window.location.href = 'index.html';
    } else if (isLoggedIn && isLoginPage) {
        window.location.href = 'dashboard.html';
    }
}

checkAuth();

// Navigation Builder
function renderSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    const links = [
        { name: 'Dashboard', icon: 'fa-chart-pie', href: 'dashboard.html' },
        { name: 'POS & Billing', icon: 'fa-cash-register', href: 'pos.html' },
        { name: 'Products', icon: 'fa-box', href: 'products.html' },
        { name: 'Shops/Customers', icon: 'fa-store', href: 'shops.html' },
        { name: 'Reports', icon: 'fa-file-invoice-dollar', href: 'reports.html' },
        { name: 'Catalog', icon: 'fa-book-open', href: 'catalog.html' },
        { name: 'Settings', icon: 'fa-cog', href: 'settings.html' },
    ];

    const html = `
        <div class="p-6">
            <h1 class="text-2xl font-bold text-white tracking-wider flex items-center gap-2">
                <i class="fas fa-bolt text-yellow-400"></i> AutoParts
            </h1>
        </div>
        <nav class="mt-4 flex-1">
            <ul class="space-y-2 px-4">
                ${links.map(link => `
                    <li>
                        <a href="${link.href}" class="sidebar-link flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all ${currentPage === link.href ? 'active' : ''}">
                            <i class="fas ${link.icon} w-5"></i>
                            <span class="font-medium">${link.name}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </nav>
        <div class="p-4 border-t border-slate-700">
            <button onclick="logout()" class="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all">
                <i class="fas fa-sign-out-alt"></i> Logout
            </button>
        </div>
    `;

    sidebar.innerHTML = html;
}

// Mobile Bottom Navigation
function renderMobileNav() {
    const navExists = document.getElementById('mobile-bottom-nav');
    if (navExists) return;

    // Only render if we are logged in
    if (!sessionStorage.getItem('auth_token')) return;

    const links = [
        { name: 'Home', icon: 'fa-home', href: 'dashboard.html' },
        { name: 'POS', icon: 'fa-cash-register', href: 'pos.html' },
        { name: 'Items', icon: 'fa-box', href: 'products.html' },
        { name: 'Shops', icon: 'fa-store', href: 'shops.html' },
        { name: 'Reports', icon: 'fa-chart-pie', href: 'reports.html' },
        { name: 'Catalog', icon: 'fa-book-open', href: 'catalog.html' },
    ];

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const nav = document.createElement('nav');
    nav.id = 'mobile-bottom-nav';
    nav.className = 'md:hidden fixed bottom-0 left-0 w-full bg-slate-900 border-t border-slate-700 pb-safe z-50 flex justify-around items-center px-0.5 py-2 shadow-2xl';

    // Safety padding for iOS home indicator
    nav.style.paddingBottom = 'env(safe-area-inset-bottom, 10px)';

    nav.innerHTML = links.map(link => `
        <a href="${link.href}" class="flex flex-col items-center gap-0.5 p-1.5 rounded-xl transition-all ${currentPath === link.href ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}">
            <i class="fas ${link.icon} text-lg mb-0.5"></i>
            <span class="text-[9px] font-medium leading-none tracking-tight">${link.name}</span>
        </a>
    `).join('');

    document.body.appendChild(nav);

    // Add padding to body to prevent content being hidden behind nav
    document.body.classList.add('pb-24'); // Add bottom padding to body
}

function logout() {
    sessionStorage.removeItem('auth_token');
    window.location.href = 'index.html';
}

// Utility: Format Currency (LKR)
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-LK', {
        style: 'currency',
        currency: 'LKR',
        minimumFractionDigits: 2
    }).format(amount);
}

// Format Date
function formatDate(date) {
    return new Date(date).toLocaleDateString('en-GB');
}

// Handle Image Compression/Conversion to Base64
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// Render Header
function renderHeader(title) {
    const header = document.getElementById('header-content');
    if (header) {
        header.innerHTML = `
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-bold text-white">${title}</h2>
                <div class="flex items-center gap-4">
                    <span class="text-slate-400 text-sm">${new Date().toLocaleDateString()}</span>
                    <div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                        A
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    if (!isLoginPage) {
        renderSidebar();
        renderMobileNav();
    }
});

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker Registered'))
            .catch(err => console.log('Service Worker Failed', err));
    });
}

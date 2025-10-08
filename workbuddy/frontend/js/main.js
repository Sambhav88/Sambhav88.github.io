// Common JavaScript functions for WorkBuddy

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to format currency
function formatCurrency(amount) {
    return '₹' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Function to show notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = 'white';
    notification.style.fontWeight = 'bold';
    notification.style.zIndex = '1000';
    notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#2ecc71';
            break;
        case 'error':
            notification.style.backgroundColor = '#e74c3c';
            break;
        case 'warning':
            notification.style.backgroundColor = '#f39c12';
            break;
        default:
            notification.style.backgroundColor = '#3498db';
    }
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Function to validate phone number (Indian format)
function validatePhone(phone) {
    const re = /^[6-9]\d{9}$/;
    return re.test(phone);
}

// Function to set worker availability status
function setWorkerAvailability(isAvailable) {
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    
    if (statusIndicator && statusText) {
        if (isAvailable) {
            statusIndicator.className = 'status-indicator status-active';
            statusText.textContent = 'Active';
        } else {
            statusIndicator.className = 'status-indicator status-inactive';
            statusText.textContent = 'Inactive';
        }
    }
}

// Function to handle worker availability toggle
function initAvailabilityToggle() {
    const availabilityToggle = document.getElementById('availabilityToggle');
    if (availabilityToggle) {
        availabilityToggle.addEventListener('change', function() {
            const isAvailable = this.checked;
            setWorkerAvailability(isAvailable);
            
            // In a real app, this would update the worker's status in the database
            if (isAvailable) {
                showNotification('You are now active and available for work', 'success');
            } else {
                showNotification('You are now inactive. Customers cannot book your services', 'warning');
            }
        });
    }
}

// Function to initialize form validation
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            // Add form validation logic here if needed
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize availability toggle if present
    initAvailabilityToggle();
    
    // Initialize form validation
    initFormValidation();
    
    // Add any other common initialization code here
});

// Export functions for use in other scripts
window.WorkBuddy = {
    getUrlParameter,
    formatCurrency,
    formatDate,
    showNotification,
    validateEmail,
    validatePhone,
    setWorkerAvailability,
    initAvailabilityToggle,
    initFormValidation
};

// Initialize language support if available
if (typeof window.Translations !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Set the language selector to the current language
        const currentLang = window.Translations.getCurrentLanguage();
        const langSelector = document.getElementById('language-selector');
        if (langSelector) {
            langSelector.value = currentLang;
        }
        
        // Translate the page
        window.Translations.translatePage();
    });
}
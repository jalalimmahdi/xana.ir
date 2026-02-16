/**
 * Main JavaScript File
 * General functions and event listeners for all pages
 */

document.addEventListener('DOMContentLoaded', function() {
  // Initialization code here
  console.log('Xana.ir - Page loaded successfully');

  // Add smooth scrolling
  addSmoothScrolling();
});

/**
 * Add smooth scrolling to all internal links
 */
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Show notification or toast message
 * @param {string} message - The message to display
 * @param {string} type - 'success', 'error', 'info'
 */
function showNotification(message, type = 'info') {
  console.log(`[${type.toUpperCase()}] ${message}`);
  // You can enhance this with actual UI notifications later
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
function formatPhoneNumber(phone) {
  return phone.replace(/(\d{4})(\d{3})(\d{4})/, '$1-$2-$3');
}

// Export functions for use in other files
window.app = {
  showNotification,
  formatPhoneNumber
};

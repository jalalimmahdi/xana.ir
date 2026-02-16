/**
 * Utility Functions
 * Helper functions for common tasks
 */

/**
 * Check if element is visible in viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} True if visible
 */
export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get URL parameter value
 * @param {string} paramName - Parameter name
 * @returns {string|null} Parameter value or null
 */
export function getURLParameter(paramName) {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(paramName);
}

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

/**
 * Deep clone an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Cloned object
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Debounce function to limit execution frequency
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

/**
 * Throttle function to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} interval - Interval in milliseconds
 * @returns {Function} Throttled function
 */
export function throttle(func, interval) {
  let lastCallTime = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCallTime >= interval) {
      func(...args);
      lastCallTime = now;
    }
  };
}

/**
 * Add class to element with animation delay
 * @param {HTMLElement} element - Target element
 * @param {string} className - Class name to add
 */
export function addClassWithDelay(element, className, delay = 0) {
  setTimeout(() => {
    element.classList.add(className);
  }, delay);
}

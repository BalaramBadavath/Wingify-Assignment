
// Validation function
function validateForm() {
  var email = document.getElementById('email').value;
  var day = document.getElementById('day').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;
  var department = document.getElementById('department').value;

  var isValid = true;

  

  // Reset all error styles and messages
  document.querySelectorAll('small.error').forEach(function(el) {
    el.style.display = 'none';
  });
  document.querySelectorAll('input, select').forEach(function(el) {
    el.classList.remove('error');
  });

  // Email validation
  if (!validateEmail(email)) {
    showError('email', 'Please add valid email address');
    isValid = false;
  }

  // Date validation
  if (!validateDate(day, month, year)) {
    showError('date', 'Please enter valid date');
    isValid = false;
  }

  // Department validation
  if (department === '') {
    showError('department', 'Please select a field');
    isValid = false;
  }

  return isValid;
}

// Helper functions to show error
function showError(field, message) {
  document.getElementById(field + '-error').textContent = message;
  document.getElementById(field + '-error').style.display = 'block';
  if (field === 'date') {
    document.getElementById('day').classList.add('error');
    document.getElementById('month').classList.add('error');
    document.getElementById('year').classList.add('error');
  } else {
    document.getElementById(field).classList.add('error');
  }
}

// Email validation function
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Date validation function
function validateDate(day, month, year) {
  if (!day || !month || !year || day < 1 || day > 31) return false;
  return true;
}
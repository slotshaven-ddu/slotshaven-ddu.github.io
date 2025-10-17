// Clickable checkboxes
window.onload = function () {
  makeCheckboxesClickable();
}

function makeCheckboxesClickable() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    // remove the disabled attribute; added by kramdown by default
    checkbox.removeAttribute('disabled');
  });
}
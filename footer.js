// Footer Component Initialization
function initializeFooter() {
  const footer = document.getElementById('footer');
  footer.innerHTML = `
    <p>&copy; ${new Date().getFullYear()} Modular Web App. All rights reserved.</p>
  `;
}

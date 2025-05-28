function copyText(text) {
  navigator.clipboard.writeText(text).then(function() {
    showNotification();
  }).catch(function(err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    showNotification();
  });
}

function showNotification() {
  const notification = document.getElementById('copyNotification');
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}

// Add subtle animations on load
document.addEventListener('DOMContentLoaded', function() {
  const card = document.querySelector('.payment-card');
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  
  setTimeout(() => {
    card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 100);
});
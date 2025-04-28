// Simulated inventory data — you should replace this with actual shared data if you have storage
const inventory = [
    ];
  
  // Function to generate notifications
  function loadNotifications() {
    const notificationsList = document.getElementById('notifications-list');
  
    const understockItems = inventory.filter(item => item.stock === 0 || item.stock < item.minStock);
  
    if (understockItems.length === 0) {
      notificationsList.innerHTML = `<p>✅ All inventory levels are good. No alerts!</p>`;
      return;
    }
  
    understockItems.forEach(item => {
      const notif = document.createElement('div');
      notif.classList.add('notification');
      if (item.stock === 0) {
        notif.classList.add('out-of-stock');
        notif.innerHTML = `❌ <strong>${item.name}</strong> is <u>out of stock</u>!`;
      } else {
        notif.innerHTML = `⚠️ <strong>${item.name}</strong> is <u>low in stock</u> (${item.stock} left)`;
      }
      notificationsList.appendChild(notif);
    });
  }
  
  window.onload = loadNotifications;
  
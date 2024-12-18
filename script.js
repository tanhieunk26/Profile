// Function to create snowflakes
function createSnow() {
    const snowContainer = document.getElementById('snow-container');
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement('div');
      snowflake.classList.add('snowflake');
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;  // Random size of snowflakes
      snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;  // Random speed
      snowflake.style.animationDelay = `${Math.random() * 5}s`;  // Random delay
      snowContainer.appendChild(snowflake);
    }
  }
  
  // Call the function to start snow
  createSnow();
  
  // Function to enlarge image on click
  function openImage(src) {
    const modal = document.createElement('div');
    modal.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'bg-opacity-75', 'flex', 'justify-center', 'items-center');
    const img = document.createElement('img');
    img.src = src;
    img.classList.add('max-w-full', 'max-h-full');
    modal.appendChild(img);
    document.body.appendChild(modal);
  
    // Close the modal when clicked
    modal.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

// Xử lý sự kiện tắt thông báo khi click vào bất kỳ đâu trên trang (bao gồm lớp phủ)
document.addEventListener("click", function(event) {
    var notificationOverlay = document.getElementById("notification-overlay");
    var notification = document.getElementById("notification");
    // Kiểm tra nếu người dùng click vào ngoài thông báo
    if (!notification.contains(event.target)) {
      notificationOverlay.style.display = "none"; // Ẩn thông báo khi click ra ngoài
    }
  });
  
  // Xử lý sự kiện click vào nút "Click Để Xem Website" để tắt thông báo
  document.getElementById("close-notification").addEventListener("click", function() {
    document.getElementById("notification-overlay").style.display = "none"; // Ẩn lớp phủ và thông báo
  });
  

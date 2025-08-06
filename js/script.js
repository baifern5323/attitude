/* NavBar */
document.addEventListener("DOMContentLoaded", function () {
  fetch('component/navbar.html')
    .then(response => response.text())
    .then(data => document.getElementById('navbar').innerHTML = data);
});

/* footer */
document.addEventListener("DOMContentLoaded", function () {
  fetch('component/footer.html')
    .then(response => response.text())
    .then(data => document.getElementById('footer').innerHTML = data);
});

/* ปุ่มลอย */
document.addEventListener("DOMContentLoaded", function () {
  fetch('component/contact.html')
    .then(response => response.text())
    .then(data => {
      // 1. นำโค้ด HTML มาใส่ในหน้าเว็บ
      document.getElementById('contact').innerHTML = data;

      // 2. หลังจากใส่ HTML แล้ว ให้หา element ของปุ่มที่เพิ่งสร้างขึ้นมา
      const fabContainer = document.querySelector('.fab-container');
      const fabMainButton = document.getElementById('fab-main');

      // 3. ผูก Event Listener ที่นี่ได้เลย เพราะ element ถูกสร้างแล้ว
      if (fabMainButton) { // ตรวจสอบก่อนว่าหาปุ่มเจอ
        const mainIcon = fabMainButton.querySelector('i');

        fabMainButton.addEventListener('click', () => {
          fabContainer.classList.toggle('active');

          // เปลี่ยนไอคอนเมื่อคลิก
          if (fabContainer.classList.contains('active')) {
            mainIcon.textContent = 'close';
          } else {
            mainIcon.textContent = 'add';
          }
        });
      }
    });
});
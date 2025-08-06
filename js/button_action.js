document.addEventListener('DOMContentLoaded', function() {
    const fabContainer = document.querySelector('.fab-container');
    const fabMainButton = document.getElementById('fab-main');
    const mainIcon = fabMainButton.querySelector('i');

    fabMainButton.addEventListener('click', () => {
        fabContainer.classList.toggle('active');

        // (ตัวเลือกเสริม) เปลี่ยนไอคอนเมื่อคลิก
        if (fabContainer.classList.contains('active')) {
            mainIcon.textContent = 'close';
        } else {
            mainIcon.textContent = 'add';
        }
    });
});
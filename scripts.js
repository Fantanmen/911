document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. РОБОТА ПОПАПУ (КОНСУЛЬТАЦІЯ)
    // ==========================================
    const popup = document.getElementById('callbackPopup');
    const closeBtn = document.getElementById('closePopupBtn');
    const callBtn = document.getElementById('callPopupBtn');

    // Показуємо попап через 3 секунди, якщо користувач його ще не закривав у цій сесії
    if (popup && !localStorage.getItem('popupDismissed')) {
        setTimeout(() => {
            popup.style.display = 'block';
        }, 3000);
    }

    function dismissPopup() {
        if (popup) {
            popup.style.display = 'none';
            localStorage.setItem('popupDismissed', 'true');
        }
    }

    if (closeBtn) closeBtn.addEventListener('click', dismissPopup);
    if (callBtn) callBtn.addEventListener('click', dismissPopup);


    // ==========================================
    // 2. РОБОТА БУРГЕР-МЕНЮ (МОБІЛЬНА НАВІГАЦІЯ)
    // ==========================================
    const burgerBtn = document.getElementById('burgerBtn');
    const navLinks = document.getElementById('navLinks');
    const menuItems = document.querySelectorAll('.nav-links a');

    if (burgerBtn && navLinks) {
        // Відкриття / закриття меню при кліку на бургер
        burgerBtn.addEventListener('click', function() {
            burgerBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll'); // Блокуємо скрол сайту під меню
        });

        // Закриваємо меню, коли клікаємо на будь-яке посилання
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                burgerBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('no-scroll');
            });
        });
    }
});
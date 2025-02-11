// التأكد من أن الكود يعمل فقط على الهواتف
if (window.innerWidth <= 768) {
    // إزالة أي تثبيت سابق للهيدر
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    
    // إعادة تعيين الأنماط الأصلية
    header.style.position = 'absolute';
    main.style.marginTop = '0';
    
    // إزالة أي تأثيرات تمرير سابقة
    window.removeEventListener('scroll', () => {});
}// التحكم في ظهور واختفاء الهيدر عند التمرير
if (window.innerWidth <= 768) {
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // إضافة خلفية داكنة عند التمرير
        if (currentScroll > 50) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
        
        // إخفاء الهيدر عند التمرير لأسفل
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }
        
        lastScroll = currentScroll;
    });

    // تمرير سلس للروابط
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
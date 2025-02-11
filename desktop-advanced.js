 // تأثيرات متقدمة إضافية للديسكتوب
if (window.innerWidth > 768) {
    // تتبع حركة الماوس للخلفية التفاعلية
    document.querySelectorAll('.interactive-bg').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            element.style.setProperty('--mouse-x', `${x}%`);
            element.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    // مؤشر التمرير
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollIndicator.style.transform = `scaleX(${scrolled / 100})`;
    });

    // تأثيرات البطاقات ثلاثية الأبعاد
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateY(0) rotateX(0)';
        });
    });

    // تأثير النص المتحرك
    document.querySelectorAll('.text-animation').forEach(text => {
        text.innerHTML = text.textContent.split('').map(char => 
            `<span style="display: inline-block; transition: transform 0.3s ease">${char}</span>`
        ).join('');

        text.addEventListener('mouseover', () => {
            Array.from(text.children).forEach((span, i) => {
                setTimeout(() => {
                    span.style.transform = 'translateY(-10px)';
                    setTimeout(() => {
                        span.style.transform = 'translateY(0)';
                    }, 200);
                }, i * 30);
            });
        });
    });
}
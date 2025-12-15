// Анимация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    // Плавное появление элементов
    const elements = document.querySelectorAll('.header, .gallery-grid, .footer');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
    });
    
    setTimeout(() => {
        elements.forEach(el => {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 200);
    
    // Интерактивность для картинок
    const imageItems = document.querySelectorAll('.image-item');
    
    imageItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.toggle('active');
            
            const img = this.querySelector('img');
            if (this.classList.contains('active')) {
                img.style.filter = 'grayscale(0%) contrast(1.2) brightness(1.1)';
            } else {
                img.style.filter = 'grayscale(20%) contrast(1.1)';
            }
        });
        
        // Эффект при наведении на мобильных
        item.addEventListener('touchstart', function() {
            this.classList.add('hover');
        });
        
        item.addEventListener('touchend', function() {
            setTimeout(() => {
                this.classList.remove('hover');
            }, 300);
        });
    });
    
    // Консольное сообщение
    console.log('🎨 GALLERY 08 loaded successfully');
    console.log('🖼️ Images count:', imageItems.length);
});

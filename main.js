// Main JavaScript - Handles animations, counters, and interactions
// ================================

// ================================
// LOADER REMOVAL
// ================================

window.addEventListener('load', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 2000);
});

// ================================
// ANIMATED COUNTER FOR STATS
// ================================

function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = current.toFixed(1);
        }
    }, 16);
}

// ================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Animate counters when visible
            if (entry.target.classList.contains('stat-number')) {
                if (entry.target.hasAttribute('data-target')) {
                    animateCounter(entry.target);
                }
            }
            
            // Unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', function() {
    // Observe stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => observer.observe(card));
    
    // Observe chart containers
    const chartContainers = document.querySelectorAll('.chart-container');
    chartContainers.forEach(container => observer.observe(container));
    
    // Observe team cards
    const teamCards = document.querySelectorAll('.team-card');
    teamCards.forEach(card => observer.observe(card));
    
    // Observe news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach(card => observer.observe(card));
});

// ================================
// SMOOTH SCROLL FOR HERO ARROW
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const quickStats = document.querySelector('.quick-stats');
            if (quickStats) {
                quickStats.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// ================================
// NEWS CARD INTERACTION
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');
    
    newsCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a pulse effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // You can add actual navigation or modal here
            console.log('News card clicked:', this.querySelector('h3').textContent);
        });
    });
});

// ================================
// PARALLAX EFFECT FOR HERO
// ================================

window.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    if (heroSection && heroBg) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        heroBg.style.transform = `translateY(${rate}px)`;
    }
});

// ================================
// RESPONSIVE NAVIGATION HELPER
// ================================

// Detect if user is on mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Adjust chart sizes on resize
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Charts will auto-resize thanks to Chart.js responsive option
        console.log('Window resized, charts auto-adjusted');
    }, 250);
});

// ================================
// KEYBOARD NAVIGATION
// ================================

document.addEventListener('DOMContentLoaded', function() {
    const newsCards = document.querySelectorAll('.news-card');
    
    // Make news cards keyboard accessible
    newsCards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'article');
        
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});

// ================================
// PERFORMANCE OPTIMIZATION
// ================================

// Lazy load images (if any are added)
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => imageObserver.observe(img));
    }
});

// ================================
// CONSOLE MESSAGE
// ================================

console.log('%c⚽ Botola vs Champions League', 'color: #C1272D; font-size: 24px; font-weight: bold;');
console.log('%cMade with ❤️ by El Mehdi', 'color: #034694; font-size: 14px;');
console.log('%cGitHub: https://github.com/mehdipecko/botola-vs-champions', 'color: #b0b0b0; font-size: 12px;');

// ================================
// ACCESSIBILITY - Skip to Content
// ================================

document.addEventListener('DOMContentLoaded', function() {
    // Add skip to content link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'تخطي إلى المحتوى الرئيسي';
    skipLink.className = 'skip-to-content';
    skipLink.style.cssText = `
        position: absolute;
        top: -100px;
        left: 0;
        background: #C1272D;
        color: white;
        padding: 10px 20px;
        z-index: 10000;
        text-decoration: none;
        border-radius: 0 0 5px 0;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '0';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-100px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main-content id to quick-stats section
    const quickStats = document.querySelector('.quick-stats');
    if (quickStats) {
        quickStats.id = 'main-content';
    }
});

// ================================
// ERROR HANDLING FOR CHARTS
// ================================

window.addEventListener('error', function(e) {
    if (e.message.includes('Chart')) {
        console.error('Chart.js error detected. Please ensure Chart.js is loaded correctly.');
        
        // Show fallback message
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            const canvas = container.querySelector('canvas');
            if (canvas && !canvas.chart) {
                const fallback = document.createElement('div');
                fallback.style.cssText = `
                    text-align: center;
                    padding: 40px;
                    color: #b0b0b0;
                `;
                fallback.innerHTML = `
                    <p>⚠️ تعذر تحميل الرسم البياني</p>
                    <p style="font-size: 0.9rem; margin-top: 10px;">يرجى تحديث الصفحة</p>
                `;
                canvas.parentNode.replaceChild(fallback, canvas);
            }
        });
    }
}, true);

// ================================
// THEME DETECTION (Future Enhancement)
// ================================

// Detect system theme preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    console.log('User prefers light theme (site currently uses dark theme)');
}

// Listen for theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newColorScheme = e.matches ? 'dark' : 'light';
    console.log('Theme changed to:', newColorScheme);
});

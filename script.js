// Smooth scrolling pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.problem-card, .step, .tech-feature');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Gestion des boutons CTA
document.addEventListener('DOMContentLoaded', () => {
    // Bouton Démo MVP
    const demoBtn = document.querySelector('.hero-buttons .btn-primary');
    if (demoBtn) {
        demoBtn.addEventListener('click', () => {
            // Remplacer par l'URL de votre démo
            window.open('https://demo.proofbox.com', '_blank');
        });
    }

    // Bouton Dossier Investisseur
    const investorBtn = document.querySelector('.hero-buttons .btn-secondary');
    if (investorBtn) {
        investorBtn.addEventListener('click', () => {
            // Remplacer par le lien de téléchargement du dossier
            window.open('https://proofbox.com/investor-deck.pdf', '_blank');
        });
    }

    // CTA final : Deck investissement
    const finalDeckBtn = document.querySelector('.final-cta .btn-primary');
    if (finalDeckBtn) {
        finalDeckBtn.addEventListener('click', () => {
            window.open('https://proofbox.com/investor-deck.pdf', '_blank');
        });
    }

    // CTA final : Démo MVP
    const finalDemoBtn = document.querySelector('.final-cta .btn-secondary');
    if (finalDemoBtn) {
        finalDemoBtn.addEventListener('click', () => {
            window.open('https://demo.proofbox.com', '_blank');
        });
    }
});

// Animation du code dynamique
document.addEventListener('DOMContentLoaded', () => {
    const dynamicCode = document.querySelector('.dynamic-code');
    if (dynamicCode) {
        const codes = ['PBX-2024', 'PBX-7891', 'PBX-3456', 'PBX-9012'];
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % codes.length;
            dynamicCode.textContent = `CODE: ${codes[currentIndex]}`;
        }, 3000);
    }
});

// Parallax désactivé (trop jittery sur mobile)

// Statistiques animées
const animateStats = () => {
    const statElement = document.querySelector('.stat');
    if (statElement && statElement.textContent.includes('15%')) {
        let current = 0;
        const target = 15;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            statElement.innerHTML = statElement.innerHTML.replace(/\d+%/, Math.round(current) + '%');
        }, 50);
    }
};

// Observer pour déclencher l'animation des stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const statElement = document.querySelector('.stat');
    if (statElement) {
        statsObserver.observe(statElement);
    }
});
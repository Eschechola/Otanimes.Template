/* ============================================
   OTANIMES - MAIN.JS
   Funções utilitárias e interações globais
   HTML/CSS/JS Puro - Sem Dependências
   ============================================ */

// ============================================
// NAVEGAÇÃO & LINKS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Ativar link de navegação atual
    const currentLocation = location.pathname;
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        if (link.getAttribute('href') === currentLocation) {
            link.style.color = 'var(--neon-cyan)';
            link.style.textShadow = '0 0 10px rgba(0, 217, 255, 0.6)';
        }
    });

    // Animações de entrada
    animateOnScroll();
});

// ============================================
// ANIMAÇÕES AO SCROLL
// ============================================

function animateOnScroll() {
    const elements = document.querySelectorAll('[data-animate]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `${entry.target.dataset.animate} 0.6s ease forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// ============================================
// FORMULÁRIOS
// ============================================

function setupFormHandlers() {
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    console.log('Formulário de contato enviado:', formData);

    // Mostrar mensagem de sucesso
    const successMessage = document.getElementById('successMessage');
    if (successMessage) {
        successMessage.classList.add('show');
        
        // Esconder após 5 segundos
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }

    // Limpar formulário
    this.reset();
}

function handleNewsletterForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    console.log('Inscrição na newsletter:', { name, email });
    
    // Mostrar mensagem de sucesso
    alert(`✓ Obrigado por se inscrever, ${name}! Verifique seu email para confirmar a inscrição.`);
    
    // Limpar formulário
    this.reset();
}

// ============================================
// UTILITÁRIOS
// ============================================

// Scroll suave para elementos
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle de classes
function toggleClass(element, className) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    element.classList.toggle(className);
}

// Adicionar classe
function addClass(element, className) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    element.classList.add(className);
}

// Remover classe
function removeClass(element, className) {
    if (typeof element === 'string') {
        element = document.querySelector(element);
    }
    element.classList.remove(className);
}

// ============================================
// INICIALIZAÇÃO
// ============================================

setupFormHandlers();

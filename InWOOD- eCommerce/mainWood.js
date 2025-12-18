document.addEventListener('DOMContentLoaded', () => {

    /* Mobile Menu */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('#main-nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            nav.classList.toggle('is-open');

            const icon = mobileToggle.querySelector('img');
            if (icon) {
                icon.src = !isExpanded ? 'assets/header-icon/close.svg' : 'assets/header-icon/hamburger.svg';
            }
        });
    }

    /* Category Tags Active State */
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
        });
    });

    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.transition = 'opacity 0.6s ease';
                    img.style.opacity = 1;
                    observer.unobserve(img);
                }
            });
        });
        images.forEach(img => {
            // img.style.opacity = 0; // Uncomment if you want fade-in effect on load
            imageObserver.observe(img);
        });
    }

    /* Category Details Logic */
    const detailSection = document.getElementById('category-details');
    const categoryBtns = document.querySelectorAll('.category-btn');
    const allCategoriesBtn = document.getElementById('all-categories-btn');

    const detailsData = {
        'Bedroom': {
            image: 'assets/category/BedRoom.jpg',
            description: 'Transform your bedroom into a sanctuary of comfort and style with our curated furniture collection.',
            prices: { hour: '$15/hr', day: '$65/day', month: '$450/mo' }
        },
        'Dining Room': {
            image: 'assets/category/DiningRoom.jpg',
            description: 'Create memorable moments with family and friends in a dining room designed for elegance and warmth.',
            prices: { hour: '$12/hr', day: '$55/day', month: '$380/mo' }
        },
        'Meeting Room': {
            image: 'assets/category/MeetingRoom.jpg',
            description: 'Professional and stylish meeting rooms set the right tone for collaboration and success.',
            prices: { hour: '$25/hr', day: '$120/day', month: '$800/mo' }
        },
        'Workspace': {
            image: 'assets/category/WorkSpace.jpg',
            description: 'Boost your productivity with ergonomic and modern workspace solutions tailored for focus.',
            prices: { hour: '$10/hr', day: '$45/day', month: '$300/mo' }
        },
        'Living Room': {
            image: 'assets/category/LivingRoom.jpg',
            description: 'The heart of your home deserves a premium touch. Explore our comfortable yet chic living room sets.',
            prices: { hour: '$18/hr', day: '$80/day', month: '$550/mo' }
        },
        'Kitchen': {
            image: 'assets/category/Kitchen.jpg',
            description: 'Modern kitchen designs that blend functionality with aesthetic appeal for the modern home chef.',
            prices: { hour: '$15/hr', day: '$70/day', month: '$480/mo' }
        },
        'Living Space': {
            image: 'assets/category/LivingSpace.jpg',
            description: 'Flexible and stylish living space solutions that adapt to your lifestyle and aesthetic preferences.',
            prices: { hour: '$20/hr', day: '$90/day', month: '$600/mo' }
        }
    };

    function updateDetails(category) {
        const data = detailsData[category] || detailsData['Bedroom'];
        document.getElementById('details-title').textContent = `${category} - Full Details`;
        document.getElementById('details-category-name').textContent = `${category} Collection`;
        document.getElementById('details-description').textContent = data.description;
        document.getElementById('details-image').style.backgroundImage = `url('${data.image}')`;
        document.getElementById('price-hour').textContent = data.prices.hour;
        document.getElementById('price-day').textContent = data.prices.day;
        document.getElementById('price-month').textContent = data.prices.month;

        detailSection.style.display = 'block';
        detailSection.scrollIntoView({ behavior: 'smooth' });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const category = btn.getAttribute('data-category');
            updateDetails(category);
        });
    });

    if (allCategoriesBtn) {
        allCategoriesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            // Default to Bedroom or a summary view if clicked "All Categories"
            updateDetails('Bedroom');
        });
    }

    /* Simple Form Handler */
    const form = document.getElementById('newsletterForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            form.reset();
        });
    }
});

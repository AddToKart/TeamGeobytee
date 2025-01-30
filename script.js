const jobListings = [
    {
        title: "Senior Software Engineer",
        company: "TechCorp Solutions",
        location: "Manila, Philippines",
        salary: "Salary Undisclosed",
        type: "Full time",
        workMode: "Hybrid",
        postedDate: "5 days ago",
        deadline: "Apply before 28 Feb",
        level: "Mid-Senior Level / Manager",
        logo: "assets/company-logos/techcorp.svg",
        isFavorite: false
    },
    {
        title: "Product Designer",
        company: "Creative Studios",
        location: "Remote",
        salary: "₱80,000 - ₱120,000",
        type: "Full time",
        workMode: "Remote",
        postedDate: "2 days ago",
        deadline: "Apply before 15 Mar",
        level: "Mid-Senior Level",
        logo: "assets/company-logos/innovateph.svg",
        isFavorite: false
    },
    {
        title: "Frontend Developer",
        company: "GlobalTech",
        location: "Makati, Philippines",
        salary: "₱60,000 - ₱90,000",
        type: "Full time",
        workMode: "Hybrid",
        postedDate: "1 day ago",
        deadline: "Apply before 20 Mar",
        level: "Mid Level",
        logo: "assets/company-logos/globaltech.svg",
        isFavorite: false
    },
    {
        title: "Data Scientist",
        company: "DataPH Analytics",
        location: "BGC, Taguig",
        salary: "₱100,000 - ₱150,000",
        type: "Full time",
        workMode: "On-site",
        postedDate: "3 days ago",
        deadline: "Apply before 10 Mar",
        level: "Senior Level",
        logo: "assets/company-logos/dataph.svg",
        isFavorite: false
    },
    {
        title: "Junior Web Developer",
        company: "StartupHub",
        location: "Cebu, Philippines",
        salary: "₱30,000 - ₱45,000",
        type: "Full time",
        workMode: "Remote",
        postedDate: "Just now",
        deadline: "Apply before 25 Mar",
        level: "Entry Level",
        logo: "assets/company-logos/startuphub.svg",
        isFavorite: false
    },
    {
        title: "UX Research Intern",
        company: "DesignLabs",
        location: "Remote",
        salary: "₱18,000 - ₱25,000",
        type: "Internship",
        workMode: "Remote",
        postedDate: "4 days ago",
        deadline: "Apply before 1 Mar",
        level: "Entry Level",
        logo: "assets/company-logos/designlabs.svg",
        isFavorite: false
    },
    {
        title: "DevOps Engineer",
        company: "CloudTech Solutions",
        location: "Manila, Philippines",
        salary: "₱120,000 - ₱180,000",
        type: "Full time",
        workMode: "Hybrid",
        postedDate: "2 days ago",
        deadline: "Apply before 18 Mar",
        level: "Senior Level",
        logo: "assets/company-logos/cloudtech.svg",
        isFavorite: false
    },
    {
        title: "Mobile App Developer",
        company: "AppWorks",
        location: "Quezon City",
        salary: "₱50,000 - ₱80,000",
        type: "Full time",
        workMode: "On-site",
        postedDate: "1 week ago",
        deadline: "Apply before 5 Mar",
        level: "Mid Level",
        logo: "assets/company-logos/appworks.svg",
        isFavorite: false
    },
    {
        title: "Digital Marketing Specialist",
        company: "MarketPro",
        location: "Remote",
        salary: "₱40,000 - ₱60,000",
        type: "Full time",
        workMode: "Remote",
        postedDate: "3 days ago",
        deadline: "Apply before 22 Mar",
        level: "Mid Level",
        logo: "assets/company-logos/marketpro.svg",
        isFavorite: false
    },
    {
        title: "IT Support Specialist",
        company: "TechSupport Co",
        location: "Makati, Philippines",
        salary: "₱25,000 - ₱35,000",
        type: "Full time",
        workMode: "On-site",
        postedDate: "5 days ago",
        deadline: "Apply before 12 Mar",
        level: "Entry Level",
        logo: "assets/company-logos/techsupport.svg",
        isFavorite: false
    }
];

const featuredCompanies = [
    {
        name: "TechCorp",
        description: "Software Solutions",
        logo: "assets/company-logos/techcorp.svg",
        color: "#0052cc"
    },
    {
        name: "InnovatePH",
        description: "Digital Innovation",
        logo: "assets/company-logos/innovateph.svg",
        color: "#47a3ff"
    },
    {
        name: "GlobalTech",
        description: "Enterprise Solutions",
        logo: "assets/company-logos/globaltech.svg",
        color: "#2563eb"
    },
    {
        name: "DataPH",
        description: "Data Analytics",
        logo: "assets/company-logos/dataph.svg",
        color: "#7c3aed"
    },
    {
        name: "CloudTech",
        description: "Cloud Services",
        logo: "assets/company-logos/cloudtech.svg",
        color: "#0ea5e9"
    },
    {
        name: "DesignLabs",
        description: "UX/UI Design",
        logo: "assets/company-logos/designlabs.svg",
        color: "#ec4899"
    },
    {
        name: "SecureNet",
        description: "Cybersecurity",
        logo: "assets/company-logos/securenet.svg",
        color: "#64748b"
    },
    {
        name: "FinTechPro",
        description: "Financial Technology",
        logo: "assets/company-logos/fintechpro.svg",
        color: "#059669"
    },
    {
        name: "AICore",
        description: "Artificial Intelligence",
        logo: "assets/company-logos/aicore.svg",
        color: "#6366f1"
    },
    {
        name: "DevHub",
        description: "Developer Platform",
        logo: "assets/company-logos/devhub.svg",
        color: "#dc2626"
    },
    {
        name: "EduTech",
        description: "E-Learning Solutions",
        logo: "assets/company-logos/edutech.svg",
        color: "#2dd4bf"
    },
    {
        name: "GameStudio",
        description: "Game Development",
        logo: "assets/company-logos/gamestudio.svg",
        color: "#8b5cf6"
    }
];

function createJobCard(job) {
    const jobCard = document.createElement('div');
    jobCard.className = 'job-card';

    const jobHeader = document.createElement('div');
    jobHeader.className = 'job-header';

    const companyInfo = document.createElement('div');
    companyInfo.className = 'company-info';

    // Create logo container
    const logoContainer = document.createElement('div');
    logoContainer.className = 'company-logo';
    
    // Create and handle logo image
    const companyLogo = document.createElement('img');
    companyLogo.src = job.logo;
    companyLogo.alt = job.company;
    // Add error handling for logo
    companyLogo.onerror = function() {
        // If logo fails to load, show company initials instead
        this.style.display = 'none';
        logoContainer.innerHTML = `<span>${job.company.charAt(0)}</span>`;
        logoContainer.style.backgroundColor = '#f3f4f6';
        logoContainer.style.display = 'flex';
        logoContainer.style.alignItems = 'center';
        logoContainer.style.justifyContent = 'center';
    };
    
    logoContainer.appendChild(companyLogo);

    // Create title and company container
    const titleAndCompany = document.createElement('div');
    titleAndCompany.className = 'title-company-container';

    const jobTitle = document.createElement('h3');
    jobTitle.textContent = job.title;

    const companyName = document.createElement('p');
    companyName.className = 'company-name';
    companyName.textContent = job.company;

    titleAndCompany.appendChild(jobTitle);
    titleAndCompany.appendChild(companyName);

    // Append to company info
    companyInfo.appendChild(logoContainer);
    companyInfo.appendChild(titleAndCompany);

    const favoriteBtn = document.createElement('button');
    favoriteBtn.className = 'favorite-btn';
    favoriteBtn.setAttribute('data-favorite', job.isFavorite);
    favoriteBtn.textContent = job.isFavorite ? '❤️' : '🤍';

    jobHeader.appendChild(companyInfo);
    jobHeader.appendChild(favoriteBtn);

    const jobDetails = document.createElement('div');
    jobDetails.className = 'job-details';

    // Location
    const locationP = document.createElement('p');
    const locationIcon = document.createElement('i');
    locationIcon.className = 'fas fa-map-marker-alt';
    locationP.appendChild(locationIcon);
    locationP.appendChild(document.createTextNode(` ${job.location}`));

    // Salary
    const salaryP = document.createElement('p');
    const salaryIcon = document.createElement('i');
    salaryIcon.className = 'fas fa-money-bill-wave';
    salaryP.appendChild(salaryIcon);
    salaryP.appendChild(document.createTextNode(` ${job.salary}`));

    // Job Type
    const typeP = document.createElement('p');
    const briefcaseIcon = document.createElement('i');
    briefcaseIcon.className = 'fas fa-briefcase';
    typeP.appendChild(briefcaseIcon);
    typeP.appendChild(document.createTextNode(` ${job.type} `));
    
    const workModeBadge = document.createElement('span');
    workModeBadge.className = `job-type-badge ${job.workMode.toLowerCase().replace('-', '')}`;
    workModeBadge.textContent = job.workMode;
    typeP.appendChild(workModeBadge);

    // Posted Date
    const dateP = document.createElement('p');
    const clockIcon = document.createElement('i');
    clockIcon.className = 'fas fa-clock';
    dateP.appendChild(clockIcon);
    dateP.appendChild(document.createTextNode(` Posted ${job.postedDate}`));

    jobDetails.appendChild(locationP);
    jobDetails.appendChild(salaryP);
    jobDetails.appendChild(typeP);
    jobDetails.appendChild(dateP);

    const jobFooter = document.createElement('div');
    jobFooter.className = 'job-footer';

    const deadline = document.createElement('span');
    deadline.className = 'deadline';
    deadline.textContent = job.deadline;

    const levelBadge = document.createElement('span');
    levelBadge.className = 'level-badge';
    levelBadge.textContent = job.level;

    jobFooter.appendChild(deadline);
    jobFooter.appendChild(levelBadge);

    const applyBtn = document.createElement('button');
    applyBtn.className = 'apply-btn';
    applyBtn.textContent = 'Apply Now';

    jobCard.appendChild(jobHeader);
    jobCard.appendChild(jobDetails);
    jobCard.appendChild(jobFooter);
    jobCard.appendChild(applyBtn);

    return jobCard;
}

function renderJobListings() {
    const jobListingsContainer = document.querySelector('.job-listings');
    // Clear the container first
    jobListingsContainer.innerHTML = '';
    
    // Create and append each job card
    jobListings.forEach((job, index) => {
        const jobCard = createJobCard(job);
        jobListingsContainer.appendChild(jobCard);
    });
    
    // Add event listeners to favorite buttons
    document.querySelectorAll('.favorite-btn').forEach((btn, index) => {
        btn.addEventListener('click', () => toggleFavorite(index));
    });
}

function toggleFavorite(index) {
    jobListings[index].isFavorite = !jobListings[index].isFavorite;
    renderJobListings();
}

// Add category filter functionality
document.addEventListener('DOMContentLoaded', () => {
    renderJobListings();
    renderFeaturedCompanies();
    animateStats();
    animateJobCards();
    
    // Add hover effect to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
    
    // Add search functionality
    const searchInput = document.querySelector('.search-bar input');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredJobs = jobListings.filter(job => 
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm)
        );
        renderFilteredJobs(filteredJobs);
    });
});

function renderFilteredJobs(filteredJobs) {
    const jobListingsContainer = document.querySelector('.job-listings');
    // Clear the container first
    jobListingsContainer.innerHTML = '';
    
    // Create and append each filtered job card
    filteredJobs.forEach(job => {
        const jobCard = createJobCard(job);
        jobListingsContainer.appendChild(jobCard);
    });
}

function renderFeaturedCompanies() {
    const container = document.querySelector('.company-logos');
    container.innerHTML = featuredCompanies.map(company => `
        <div class="featured-company-card">
            <div class="featured-company-logo">
                <img src="${company.logo}" alt="${company.name}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span>${company.name.slice(0, 2)}</span>';">
            </div>
            <div class="featured-company-info">
                <h3>${company.name}</h3>
                <p>${company.description}</p>
                <button class="view-jobs-btn">View Jobs</button>
            </div>
        </div>
    `).join('');
}

// Animate stats on scroll
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                animateValue(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
}

function animateValue(element, start, end, duration) {
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = `${current}+`;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Add smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add stagger animation to job cards
function animateJobCards() {
    const cards = document.querySelectorAll('.job-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

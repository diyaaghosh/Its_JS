document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggle = document.getElementById('themeToggle');
    
   
    if (themeToggle) {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
       
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.body.classList.add('dark-mode');
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
          
            document.body.classList.remove('dark-mode');
        }
        
        themeToggle.addEventListener('click', function() {
            
            document.body.style.transition = 'background-color 0.8s, color 0.8s';
            
            if (document.body.classList.contains('dark-mode')) {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            } else {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
            
           
            setTimeout(() => {
                document.body.style.transition = '';
            }, 800);
        });
    }
    
    
    const showMoreBtn = document.getElementById('showMoreBtn');
    const moreProjectsContainer = document.getElementById('moreProjects');
    
    if (showMoreBtn && moreProjectsContainer) {
        let isShowingMore = false;
        
       
        const hiddenProjectsCount = moreProjectsContainer.querySelectorAll('.project-card').length;
        if (hiddenProjectsCount > 0) {
            showMoreBtn.textContent = `Show More Projects (${hiddenProjectsCount}+)`;
        }
        
        showMoreBtn.addEventListener('click', function() {
            if (!isShowingMore) {
                showMoreProjects();
            } else {
                hideMoreProjects();
            }
        });
        
        function showMoreProjects() {
            isShowingMore = true;
            
         
            showMoreBtn.textContent = 'Loading...';
            showMoreBtn.disabled = true;
            
          
            moreProjectsContainer.classList.remove('hidden');
           
            const projectCards = moreProjectsContainer.querySelectorAll('.project-card');
            
      
            projectCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'none';
            });
            
           
            void moreProjectsContainer.offsetHeight;
            
           
            projectCards.forEach(card => {
                card.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            });
            
            
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            
            setTimeout(() => {
                showMoreBtn.textContent = 'Show Less';
                showMoreBtn.disabled = false;
                showMoreBtn.classList.add('showing-more');
                
             
                moreProjectsContainer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, projectCards.length * 100 + 300);
        }
        
        function hideMoreProjects() {
            isShowingMore = false;
            
       
            showMoreBtn.textContent = 'Hiding...';
            showMoreBtn.disabled = true;
            
           
            const projectCards = moreProjectsContainer.querySelectorAll('.project-card');
            const cardsArray = Array.from(projectCards).reverse();
           
            cardsArray.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                }, index * 50);
            });
            
          
            setTimeout(() => {
                moreProjectsContainer.classList.add('hidden');
                showMoreBtn.textContent = `Show More Projects (${projectCards.length}+)`;
                showMoreBtn.disabled = false;
                showMoreBtn.classList.remove('showing-more');
                
               
                projectCards.forEach(card => {
                    card.style.opacity = '';
                    card.style.transform = '';
                    card.style.transition = '';
                });
                
              
                showMoreBtn.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, cardsArray.length * 50 + 300);
        }
        
        showMoreBtn.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            }
        });
        
        showMoreBtn.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = '';
            }
        });
    }
    
  
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const parent = entry.target.parentNode;
                if (parent) {
                    const siblings = Array.from(parent.children);
                    const delay = siblings.indexOf(entry.target) * 0.1;
                    entry.target.style.animationDelay = `${delay}s`;
                }
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    
    document.querySelectorAll('.project-card').forEach(el => {
       
        if (!el.closest('.hidden')) {
            observer.observe(el);
        }
    });
});
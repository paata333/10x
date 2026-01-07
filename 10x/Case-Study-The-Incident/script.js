document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Snowfall Logic (თავიდან გაჩერებულია) ---
    const snowContainer = document.getElementById('snow-container');
    const snowSymbol = '•'; 
    let snowInterval = null; // ეს ცვლადი აკონტროლებს თოვას

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = snowSymbol;
        
        snowflake.style.left = Math.random() * 100 + 'vw';
        const size = Math.random() * 10 + 5;
        snowflake.style.fontSize = size + 'px'; 
        snowflake.style.opacity = Math.random() * 0.4 + 0.1; 
        
        const duration = Math.random() * 10 + 5; 
        snowflake.style.animationDuration = duration + 's';

        if(size < 8) {
            snowflake.style.filter = 'blur(1px)';
        }

        snowContainer.appendChild(snowflake);

        setTimeout(() => {
            snowflake.remove();
        }, duration * 1000);
    }

    // --- 2. Key Press "Easter Egg" ---
    document.addEventListener('keydown', (event) => {
        // ვამოწმებთ, დააჭირა თუ არა მომხმარებელმა "S" ღილაკს (დიდს ან პატარას)
        if (event.key === 's' || event.key === 'S') {
            
            if (snowInterval) {
                // თუ უკვე თოვს -> გავაჩეროთ
                clearInterval(snowInterval);
                snowInterval = null;
                console.log("Snow stopped"); // კონსოლში რომ დაინახო
            } else {
                // თუ არ თოვს -> დავიწყოთ
                snowInterval = setInterval(createSnowflake, 100);
                console.log("Let it snow!"); // კონსოლში რომ დაინახო
            }
        }
    });


    // --- 3. Accordion Logic (უცვლელი) ---
    const triggers = document.querySelectorAll('.message.analysis');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.classList.toggle('active');
            const wrapper = trigger.closest('.content-wrapper');
            const panel = wrapper.querySelector('.analysis-panel');

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // --- 4. Simple slow smooth-scroll for fragment links (no data attributes needed) ---
    const SCROLL_DURATION = 1200; // ms, change to taste

    function smoothScrollTo(element, duration = SCROLL_DURATION, callback) {
        const startY = window.scrollY || window.pageYOffset;
        const targetRect = element.getBoundingClientRect();
        const targetY = startY + targetRect.top;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const destination = Math.min(targetY, maxScroll);
        const startTime = performance.now();

        function easeInOutQuad(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; }

        function step(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeInOutQuad(progress);
            window.scrollTo(0, Math.round(startY + (destination - startY) * eased));
            if (progress < 1) {
                requestAnimationFrame(step);
            } else if (typeof callback === 'function') {
                callback();
            }
        }

        requestAnimationFrame(step);
    }

    // Intercept anchor links that jump to phases (e.g. href="#phase-2") and do a slow scroll instead
    document.querySelectorAll('a[href^="#phase"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (!href || href.charAt(0) !== '#') return;
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (!el) return; // allow default for non-existing targets

            // Respect users who prefer reduced motion
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                // let the browser jump to the anchor; it's okay
                return;
            }

            // Prevent instant jump and perform slow scroll
            e.preventDefault();
            smoothScrollTo(el, SCROLL_DURATION, () => {
                // update URL without causing another jump
                history.pushState(null, document.title, '#' + id);

                // optional: briefly focus the target for accessibility
                el.setAttribute('tabindex', '-1');
                el.focus({preventScroll:true});
                setTimeout(() => el.removeAttribute('tabindex'), 1500);
            });
        });
    });
});
// Hero load-in, nav brand, mobile menu, contact panel, timeline fill, reveals,
// project filter, phone reveal. No dependencies; the page works without it.
(() => {
    const body = document.body;
    const hero = document.querySelector('.hero');

    // Start the hero animation once the photo has loaded (fallback after 2.5s).
    const start = () => hero.classList.add('is-ready');
    const photo = hero.querySelector('img');
    if (photo.complete) start();
    photo.addEventListener('load', start, { once: true });
    photo.addEventListener('error', start, { once: true });
    setTimeout(start, 2500);

    // Mobile menu.
    const toggle = document.querySelector('.nav-toggle');
    const setMenu = open => {
        toggle.setAttribute('aria-expanded', String(open));
        body.classList.toggle('menu-open', open);
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    document.querySelectorAll('.topnav-links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && body.classList.contains('menu-open')) { setMenu(false); toggle.focus(); }
    });

    // Contact panel: native popover (Escape / outside click close it and focus returns
    // to the button); we mirror its state in aria-expanded and move focus into it.
    const pop = document.getElementById('contact-pop');
    const popBtn = document.querySelector('.contact-btn');
    pop.addEventListener('toggle', e => {
        const open = e.newState === 'open';
        popBtn.setAttribute('aria-expanded', String(open));
        if (open) pop.querySelector('a').focus();
    });

    const reveals = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        reveals.forEach(el => el.classList.add('in'));
        body.classList.add('hero-gone');
    } else {
        // Show the name in the nav only once the hero (which already shows it) is gone.
        new IntersectionObserver(([entry]) => {
            body.classList.toggle('hero-gone', !entry.isIntersecting);
        }, { rootMargin: '-56px 0px 0px 0px' }).observe(hero);

        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -8% 0px' });
        reveals.forEach(el => io.observe(el));
    }

    // Timeline fill follows a line 60% down the viewport.
    const timeline = document.querySelector('.timeline');
    const fill = timeline.querySelector('.timeline-fill');
    const jobs = timeline.querySelectorAll('.job');
    let ticking = false;
    const update = () => {
        ticking = false;
        const anchor = window.innerHeight * 0.6;
        const rect = timeline.getBoundingClientRect();
        fill.style.setProperty('--progress', Math.min(1, Math.max(0, (anchor - rect.top) / rect.height)).toFixed(4));
        jobs.forEach(job => job.classList.toggle('passed', job.getBoundingClientRect().top + 14 <= anchor));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    // Project filter (all projects show without JS).
    const filterBar = document.querySelector('.filters');
    const projects = document.querySelectorAll('.project');
    filterBar.hidden = false;
    filterBar.addEventListener('click', e => {
        const btn = e.target.closest('.filter');
        if (!btn) return;
        const tag = btn.dataset.filter;
        filterBar.querySelectorAll('.filter').forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        projects.forEach(p => {
            const show = tag === 'all' || p.dataset.tags.split(' ').includes(tag);
            p.hidden = !show;
            if (show) p.classList.add('in');
        });
    });

    // Phone number is XOR-obfuscated so it never appears as plain text in the HTML.
    const phonePayload = {
        key: 23,
        chars: [60, 36, 38, 55, 33, 55, 37, 39, 32, 46, 35, 34, 38, 34]
    };
    document.querySelectorAll('.phone-reveal').forEach(button => {
        button.addEventListener('click', () => {
            const number = phonePayload.chars.map(c => String.fromCharCode(c ^ phonePayload.key)).join('');
            const link = document.createElement('a');
            link.href = 'tel:' + number.replace(/\s/g, '');
            link.textContent = number;
            button.replaceWith(link);
            link.focus();
        }, { once: true });
    });
})();

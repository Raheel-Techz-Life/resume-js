const fs = require('fs');

const allHtmls = ['projects.html', 'experience.html', 'achievements.html', 'work.html', 'contact.html'];
let extraCss = '\n/* --- EXTRA PAGE STYLES --- */\n';

allHtmls.forEach(file => {
    if (fs.existsSync('old_html/' + file)) {
        const content = fs.readFileSync('old_html/' + file, 'utf8');
        const match = content.match(/<style>([\s\S]*?)<\/style>/i);
        if (match) {
            let css = match[1];
            
            // Remove common parts to prevent huge duplicate bloat
            css = css.replace(/:root\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\*\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/html\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/body\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/#cursor\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/#cursor-ring\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/body:has\([^)]+\)\s*#cursor\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/body::before\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/body::after\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/nav\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-logo\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-logo span\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-links\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-links a\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-links a::after\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-links a:hover\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-links a:hover::after\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-links a\.active\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-toggle\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-toggle span\s*\{[\s\S]*?\}/g, '');
            css = css.replace(/\.nav-toggle\.active span:nth-child\(\d\)\s*\{[\s\S]*?\}/g, '');

            extraCss += `\n/* --- ${file} --- */\n` + css.trim() + '\n';
        }
    }
});

fs.appendFileSync('app/globals.css', extraCss);
console.log('Appended extra CSS.');

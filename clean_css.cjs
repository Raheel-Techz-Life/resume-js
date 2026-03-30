const fs = require('fs');

const indexHtml = fs.readFileSync('old_html/index.html', 'utf8');
const indexCssMatch = indexHtml.match(/<style>([\s\S]*?)<\/style>/i);
if (!indexCssMatch) process.exit(1);

const indexCss = indexCssMatch[1];
const baseCss = indexCss;

// Write index CSS as the base
fs.writeFileSync('app/globals.css', baseCss + '\n\n/* --- PAGE SPECIFIC CSS --- */\n');

// We know the problematic duplicate selectors are exactly these:
const ignoreSelectors = [
    ':root', '*', 'html', 'body', '#cursor', '#cursor-ring',
    'body:has(a:hover) #cursor, body:has(button:hover) #cursor, body:has(.card:hover) #cursor',
    'body::before', 'body::after',
    'nav', '.nav-logo', '.nav-logo span', '.nav-links', '.nav-links a', 
    '.nav-links a::after', '.nav-links a:hover', '.nav-links a:hover::after', 
    '.nav-links a.active', '.nav-toggle', '.nav-toggle span',
    '.nav-toggle.active span:nth-child(1)', '.nav-toggle.active span:nth-child(2)', 
    '.nav-toggle.active span:nth-child(3)',
    'footer', '.footer-left', '.footer-right', '.footer-right span'
];

const allHtmls = ['projects.html', 'experience.html', 'achievements.html', 'work.html', 'contact.html'];

allHtmls.forEach(file => {
    if (fs.existsSync('old_html/' + file)) {
        const content = fs.readFileSync('old_html/' + file, 'utf8');
        const match = content.match(/<style>([\s\S]*?)<\/style>/i);
        if (match) {
            let css = match[1];
            // Poor man's CSS parser
            // Just remove the known identical blocks safely
            ignoreSelectors.forEach(sel => {
                // Escape regex
                const escapedSel = sel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Regex for rule: selector { ... }
                const regex = new RegExp(escapedSel + '\\s*\\{[^}]*\\}', 'g');
                css = css.replace(regex, '');
            });
            
            // Also need to clean up media queries that are exactly the duplicates
            // We can just strip the @media blocks of nav/footer
            const mqRegex = /@media[^{]+\{([\s\S]*?)\n\}/g; 
            // Wait, nested braces in media queries are hard for regex!
            // I'll just remove "nav { ... }" from the entire file first, ignoring where it is.
            // Oh wait, my regex above `[^{]*` doesn't care if it's in a media query! 
            // `sel \s* \{ [^}]* \}` will match ANYWHERE, even inside media queries!
            
            fs.appendFileSync('app/globals.css', `\n/* --- ${file} --- */\n` + css.trim() + '\n');
        }
    }
});
console.log('Done');

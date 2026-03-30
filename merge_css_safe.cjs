const fs = require('fs');

const allHtmls = ['projects.html', 'experience.html', 'achievements.html', 'work.html', 'contact.html'];
let extraCss = '\n\n/* --- EXTRA PAGE STYLES --- */\n';

allHtmls.forEach(file => {
    if (fs.existsSync('old_html/' + file)) {
        const content = fs.readFileSync('old_html/' + file, 'utf8');
        const match = content.match(/<style>([\s\S]*?)<\/style>/i);
        if (match) {
            let css = match[1];
            // Instead of regex hacking, let's just remove the first 50 lines that we know contain the duplicate setup
            // Or better yet, we can use a simpler approach: just append it all, but wrap it in a pseudo-scope? No, we don't need to wrap it.
            // Let's just remove the exact string or just leave it. Leaving it is 100% safer for parsing. 
            // The cascade will apply the last one, which is identically the same values.
            extraCss += `\n/* --- ${file} --- */\n` + css + '\n';
        }
    }
});

fs.appendFileSync('app/globals.css', extraCss);
console.log('Appended clean CSS.');

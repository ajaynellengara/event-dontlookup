const fs = require('fs');

async function go() {
    const t = await fetch('https://dontlookup.fashion/').then(r => r.text());
    const links = [...t.matchAll(/href=\"([^\"]+\.css[^\"]*)\"/g)].map(m => m[1]);
    const cssBlocks = await Promise.all(links.map(l => {
        const url = l.startsWith('http') ? l : (l.startsWith('/') ? 'https://dontlookup.fashion' + l : 'https://dontlookup.fashion/' + l);
        return fetch(url).then(r => r.text()).catch(() => '');
    }));
    const all = cssBlocks.join('\n');
    const nav = all.match(/\.nav-but-wrap[^}]*}/g) || [];
    const menu = all.match(/\.menu-icon[^}]*}/g) || [];
    fs.writeFileSync('temp.css', nav.join('\n') + '\n' + menu.join('\n'));
}

go();

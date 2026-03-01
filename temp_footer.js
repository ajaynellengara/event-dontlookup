const fs = require('fs');

async function go() {
    const t = await fetch('https://dontlookup.fashion/').then(r => r.text());
    const match = t.match(/<footer[^>]*>([\s\S]*?)<\/footer>/i);
    let result = "no footer match";
    if (match) {
        const links = [...match[1].matchAll(/<a[^>]*href=\"([^\"]*)\"[^>]*>([\s\S]*?)<\/a>/gi)];
        result = links.map(l => ({
            href: l[1],
            text: l[2].replace(/<[^>]*>?/gm, '').trim()
        }));
    }
    fs.writeFileSync('temp_footer.json', JSON.stringify(result, null, 2));
}

go();

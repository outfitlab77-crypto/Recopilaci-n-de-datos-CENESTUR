const fs = require('fs');
let content = fs.readFileSync('g:/VINCULACIÓN 2/index.html', 'utf8');

// We will use regex to find all <select> elements in step-2, step-3, step-4
// A <select> usually looks like <select id="..." class="...">\n <option value="1">Text</option>
// We want to insert <option value="" disabled selected hidden>Ej. Text</option> right after the <select ...> opening tag.

let modified = content;

const selectRegex = /<select\s+id="([^"]+)"([^>]*)>\s*<option\s+value="([^"]+)">([^<]+)<\/option>/g;

modified = modified.replace(selectRegex, (match, id, attrs, firstVal, firstText) => {
    // Skip the ones in step 1 or filter
    if (id === 'business-sector' || id === 'filter-sector') return match;
    
    // Add 'required' to the select attributes if not there
    let newAttrs = attrs;
    if (!newAttrs.includes('required')) {
        newAttrs += ' required';
    }
    
    // Create the placeholder option
    const placeholder = `\\n                                <option value="" disabled selected hidden class="text-slate-400">Ej. ${firstText.trim()}</option>`;
    
    return `<select id="${id}"${newAttrs}>${placeholder}\\n                                <option value="${firstVal}">${firstText}</option>`;
});

// To make the select text gray when showing placeholder and dark when selected, we can add a small JS snippet or just add text-slate-500. 
// But a CSS trick is required. Let's just add text-slate-500 to the select classes by default. 
// Wait, text-slate-500 makes the selected option gray too. That's fine, it matches the design.
modified = modified.replace(/class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none"/g, 
'class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm text-slate-600 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none"');

fs.writeFileSync('g:/VINCULACIÓN 2/index.html', modified, 'utf8');
console.log('Successfully added placeholder options');

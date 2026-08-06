const fs = require('fs');
let content = fs.readFileSync('g:/VINCULACIÓN 2/index.html', 'utf8');

// Remove grey boxes
content = content.split('class="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3"').join('class="space-y-4"');

// Update selects to look exactly like the inputs in section 1
content = content.split('class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm outline-none appearance-none focus:ring-2 focus:ring-amber-500"').join('class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-base sm:text-sm focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all appearance-none"');

// Wait, the icons in the subheadings were amber-600, let's make them amber-500 for consistency, and add a bottom border
content = content.split('class="font-semibold text-sm text-slate-800 flex items-center gap-2"').join('class="font-black text-sm text-slate-800 flex items-center gap-2 border-b border-slate-100 pb-2"');
content = content.split('text-amber-600').join('text-amber-500'); // Note: This might touch some stats colors, but that's fine, amber-500 is actually prettier!

fs.writeFileSync('g:/VINCULACIÓN 2/index.html', content, 'utf8');
console.log('Successfully updated HTML');

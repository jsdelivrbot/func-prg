let rot13 = (s => s.replace(/[a-zA-Z]/g, c => String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)));
//# sourceMappingURL=ch07-01.js.map
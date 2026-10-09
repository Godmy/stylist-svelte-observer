/** Lightweight display highlighting; all source text is escaped before becoming HTML. */
export function highlightCode(code: string, language = 'svelte'): string {
	const escape = (text: string) =>
		text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	const colors: Record<string, string> = {
		comment: '#8b949e',
		tag: '#7ee787',
		attribute: '#79c0ff',
		string: '#a5d6ff',
		keyword: '#ff7b72',
		number: '#79c0ff'
	};
	const token = (text: string, kind: string) =>
		`<span style="color:var(--code-${kind},${colors[kind]})">${escape(text)}</span>`;
	const keywords = new Set([
		'const',
		'let',
		'var',
		'function',
		'return',
		'if',
		'else',
		'each',
		'as',
		'await',
		'async',
		'import',
		'from',
		'export',
		'default',
		'type',
		'interface',
		'extends',
		'new',
		'true',
		'false',
		'null',
		'undefined',
		'class',
		'throw',
		'try',
		'catch',
		'finally',
		'for',
		'of',
		'in',
		'while',
		'switch',
		'case',
		'break',
		'typeof',
		'instanceof',
		'key',
		'snippet',
		'render',
		'html',
		'then',
		'debug',
		'attach'
	]);
	// Keep braces inside strings and comments from ending a Svelte expression.
	const expressionEnd = (start: number, source = code) => {
		let depth = 0;
		let quote = '';
		for (let index = start; index < source.length; index++) {
			const char = source[index];
			if (quote) {
				if (char === '\\') index++;
				else if (char === quote) quote = '';
			} else if ('"\'`'.includes(char)) quote = char;
			else if (source.startsWith('/*', index)) {
				const end = source.indexOf('*/', index + 2);
				if (end < 0) return source.length;
				index = end + 1;
			} else if (source.startsWith('//', index)) {
				const end = source.indexOf('\n', index + 2);
				if (end < 0) return source.length;
				index = end;
			} else if (char === '{') depth++;
			else if (char === '}' && --depth === 0) return index + 1;
		}
		return source.length;
	};
	const renderTokens = (text: string, mode: 'script' | 'css' | 'tag'): string => {
		const pattern =
			mode === 'tag'
				? /"[^"]*"|'[^']*'|[A-Za-z_$][\w$:.-]*|\{/g
				: /\/\*[\s\S]*?(?:\*\/|$)|\/\/[^\r\n]*|"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|`(?:\\[\s\S]|[^`\\])*`|#[\da-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:[a-zA-Z%]+)?|[$A-Za-z_][\w$-]*/g;
		let result = '';
		let offset = 0;
		for (const match of text.matchAll(
			mode === 'css'
				? new RegExp(pattern.source.replace(String.raw`\/\/[^\r\n]*|`, ''), 'g')
				: pattern
		)) {
			if (match.index < offset) continue;
			const value = match[0];
			result += escape(text.slice(offset, match.index));
			if (mode === 'tag' && value === '{' && language.toLowerCase() === 'svelte') {
				const end = expressionEnd(match.index, text);
				result += renderTokens(text.slice(match.index, end), 'script');
				offset = end;
				continue;
			}
			let kind = '';
			if (value.startsWith('/*') || (mode === 'script' && value.startsWith('//'))) kind = 'comment';
			else if (/^["'`]/.test(value)) kind = 'string';
			else if (mode === 'tag')
				kind = /^<\/?\s*$/.test(text.slice(0, match.index)) ? 'tag' : 'attribute';
			else if (/^(?:\d|#[\da-fA-F])/.test(value)) kind = 'number';
			else if (mode === 'css' && /^\s*:/.test(text.slice(match.index + value.length)))
				kind = 'attribute';
			else if (mode === 'script' && (keywords.has(value) || value.startsWith('$')))
				kind = 'keyword';
			result += kind ? token(value, kind) : escape(value);
			offset = match.index + value.length;
		}
		return result + escape(text.slice(offset));
	};
	if (language.toLowerCase() === 'css') return renderTokens(code, 'css');
	if (!['svelte', 'html'].includes(language.toLowerCase())) return escape(code);

	let result = '';
	let index = 0;
	while (index < code.length) {
		if (code.startsWith('<!--', index)) {
			const closing = code.indexOf('-->', index + 4);
			const end = closing < 0 ? code.length : closing + 3;
			result += token(code.slice(index, end), 'comment');
			index = end;
		} else if (code[index] === '<' && /^<\/?[A-Za-z!]/.test(code.slice(index, index + 3))) {
			const start = index++;
			let quote = '';
			while (index < code.length) {
				const char = code[index++];
				if (quote) {
					if (char === quote) quote = '';
				} else if (char === '"' || char === "'") quote = char;
				else if (char === '{' && language.toLowerCase() === 'svelte')
					index = expressionEnd(index - 1);
				else if (char === '>') break;
			}
			const tag = code.slice(start, index);
			result += renderTokens(tag, 'tag');
			const rawTag = /^<(script|style)\b/i.exec(tag)?.[1].toLowerCase();
			if (rawTag && !tag.endsWith('/>')) {
				const closing = new RegExp(`</${rawTag}\\s*>`, 'ig');
				closing.lastIndex = index;
				const end = closing.exec(code)?.index ?? code.length;
				result += renderTokens(code.slice(index, end), rawTag === 'style' ? 'css' : 'script');
				index = end;
			}
		} else if (code[index] === '{' && language.toLowerCase() === 'svelte') {
			const end = expressionEnd(index);
			result += renderTokens(code.slice(index, end), 'script');
			index = end;
		} else {
			const start = index++;
			while (index < code.length && code[index] !== '<' && code[index] !== '{') index++;
			result += escape(code.slice(start, index));
		}
	}
	return result;
}

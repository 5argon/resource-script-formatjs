import {
	Token,
	Ast,
	isCustomType,
	isGroup,
	isText,
	isTextTemplated,
	ValueNode,
	isNamedTuple,
} from 'resource-script'
import { beginning, innerShell, outerShell, terminalFunction, terminalSimple } from './pieces'

function trueKey(k: string[]): string {
	return k[k.length - 1]
}

function concatKeys(k: string[]): string {
	return k.join('.')
}

export function astProcess(a: Ast): string {
	return beginning(trueKey(a.keys), a.comment, firstContent(a.children))
}

function firstContent(a: ValueNode[]): string {
	return a
		.map<string>((x) => {
			const name = trueKey(x.keys)
			if (isGroup(x)) {
				return outerShell(name, x.comment, innerContent(x.children), true)
			} else {
				return outerShell(name, x.comment, makeTerminal(x), false)
			}
		})
		.join('')
}

function innerContent(a: ValueNode[]): string {
	return a
		.map<string>((x) => {
			const name = trueKey(x.keys)
			if (isGroup(x)) {
				return innerShell(name, x.comment, innerContent(x.children), true)
			} else {
				return innerShell(name, x.comment, makeTerminal(x), false)
			}
		})
		.join(',')
}

function makeTerminal(x: ValueNode): string {
	if (isTextTemplated(x)) {
		const par = x.params
			.map<string>((y) => {
				if (isCustomType(y.type)) {
					return y.text + ': ' + y.type.custom
				}
				return y.text + ': ' + y.type
			})
			.join(',')
		const par2 = x.params
			.map<string>((y) => {
				return y.text + ': ' + y.text
			})
			.join(',')
		return terminalFunction(
			par,
			par2,
			concatKeys(x.keys),
			x.comment ?? '',
			defaultMessageFromTokens(x.tokens),
		)
	} else if (isText(x)) {
		return terminalSimple(concatKeys(x.keys), x.comment ?? '', x.text)
	}
	throw new Error('Only expecting value as string or templated string (arrow function).')
}

function defaultMessageFromTokens(tokens: Token[]): string {
	return tokens
		.map<string>((x) => {
			if (typeof x === 'string') {
				return x
			}
			if (isText(x)) {
				// This also counts the identifier.
				return '{' + x.text + '}'
			}
			if (isNamedTuple(x)) {
				// TODO: Don't ignore params and make ICU helpers here.
				return x.tupleName
			}
			throw new Error('Tokens should be either string, identifier, or named tuple.')
		})
		.join('')
}

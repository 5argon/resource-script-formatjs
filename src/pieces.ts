export function commentLine(comment: string) {
	return '/** ' + comment + ' */'
}

export function beginning(cls: string, cm: string, content: string) {
	return `
${commentLine(cm)}
export default class ${cls} {
		private intl: IntlShape
		constructor(i: IntlShape) {
			this.intl = i
		}
		${content}
}
`
}

export function outerShell(n: string, cm: string, content: string) {
	return `
	${commentLine(cm)}
	get ${n}() {
		return {
			${content}
		}
	}
`
}

export function innerShell(n: string, cm: string, content: string) {
	return `
	${commentLine(cm)}
	${n}: {
		${content}
	},
`
}

export function terminalSimple(n: string, cm: string, id: string, desc: string, mes: string) {
	return `
	${commentLine(cm)}
	${n}: this.intl.formatMessage({
		id: ${id},
		description: ${desc},
		mes: ${mes},
	}),
`
}

export function terminalFunction(
	n: string,
	cm: string,
	par: string,
	par2: string,
	id: string,
	desc: string,
	mes: string,
) {
	return `
	${commentLine(cm)}
	${n}: (${par}) =>
	this.intl.formatMessage(
		{
			id: ${id},
			description: ${desc},
			mes: ${mes},
		},
		{
			${par2}
		}
	),
`
}

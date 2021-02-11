export function commentLine(comment: string | undefined) {
	return comment ? '/** ' + comment + ' */' : ''
}

export function beginning(cls: string, cm: string | undefined, content: string) {
	return `
import { IntlShape } from "react-intl"

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

export function outerShell(
	n: string,
	cm: string | undefined,
	content: string,
	innerObject: boolean,
): string {
	if (!innerObject) {
		return `
  ${commentLine(cm)}
  get ${n}() {
    return ${content}
  }
`
	} else {
		return `
  ${commentLine(cm)}
  get ${n}() {
    return {
      ${content}
    }
  }
`
	}
}

export function innerShell(
	n: string,
	cm: string | undefined,
	content: string,
	innerObject: boolean,
): string {
	if (!innerObject) {
		return `
  ${commentLine(cm)}
  ${n}: ${content}
  `
	} else {
		return `
  ${commentLine(cm)}
  ${n}: {
    ${content}
  }
`
	}
}

export function terminalSimple(id: string, desc: string, mes: string) {
	return `this.intl.formatMessage({
    id: "${id}",
    description: "${desc}",
    defaultMessage: "${mes}",
  })
`
}

export function terminalFunction(par: string, par2: string, id: string, desc: string, mes: string) {
	return `(${par}) =>
  this.intl.formatMessage(
  {
    id: "${id}",
    description: "${desc}",
    defaultMessage: "${mes}",
  },
  {
    ${par2}
  }
)
`
}

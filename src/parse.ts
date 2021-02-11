import { parseFile as rsParse } from 'resource-script'

import { astProcess } from './ast-process'

export function parse(file: string): string {
	const ast = rsParse(file)
	return astProcess(ast)
}

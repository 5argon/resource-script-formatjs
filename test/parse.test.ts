import { parse } from '../src'

function parseAst(): string {
	const p = parse('./test/fixture/fixture.ts')
	if (p === undefined) {
		fail('Parsing failed.')
	}
	return p
}

test('Outer', () => {
	const ast = parseAst()
	console.log(ast)
})

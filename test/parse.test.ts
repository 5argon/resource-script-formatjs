import { parse } from '../src'
import { out } from './fixture/out'

test('Parsing', () => {
	const ast = parse('./test/fixture/fixture.ts')
	expect(ast).toBe(out)
})

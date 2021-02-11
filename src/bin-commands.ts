import fs from 'fs'
import path from 'path'
import { exit } from 'process'
import yargs from 'yargs'
import { parse } from './parse'

function transformName(file: string, extension: string) {
	const basename = path.basename(file, path.extname(file))
	return path.join(path.dirname(file), basename + '.acc' + extension)
}

const argv = yargs(process.argv.slice(2))
	.scriptName('rs-to-formatjs')
	.command(
		'to-json',
		'Converts Resource Script files into JSON files.',
		(yargs) => {
			return yargs
		},
		(argv) => {},
	).argv

if (argv._.length < 1) {
	console.error('Must provide one or more Resource Script file.')
	exit()
}

argv._.forEach((x) => {
	console.log(x)
	if (typeof x === 'string') {
		const parsed = parse(x)
		fs.writeFileSync(transformName(x, '.ts'), parsed)
	}
})

console.log('Finished converting Resource Script file(s) to Format.JS accessor class file.')

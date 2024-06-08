import path from 'path'
import yargs from 'yargs'
import { getPackageName } from './name'
import { marked } from 'marked'
import { readMarkdownFileSync, writeHtmlFileSync } from './file'

const { name, file, out } = yargs
  .option('name', {
    describe: 'show cli name',
    type: 'boolean',
    default: false,
  })
  .option('file', {
    describe: 'file path to Markdown file',
    type: 'string',
  })
  .option('out', { describe: 'output file path', type: 'string' })
  .parseSync()

if (name) {
  console.log(getPackageName())
  process.exit(0)
} else if (file) {
  const markdownStr = readMarkdownFileSync(path.resolve(process.cwd(), file))
  const html = marked(markdownStr, { async: false }).toString()
  if (out) {
    writeHtmlFileSync(path.resolve(process.cwd(), out), html)
  } else {
    console.log(html)
  }
}

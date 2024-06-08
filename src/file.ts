import { readFileSync, writeFileSync } from 'fs'

export const readMarkdownFileSync = (path: string) => {
  return readFileSync(path, 'utf-8')
}

export const writeHtmlFileSync = (path: string, html: string) => {
  return writeFileSync(path, html, 'utf-8')
}

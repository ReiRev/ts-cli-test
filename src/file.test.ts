import { readMarkdownFileSync } from './file'
import path from 'path'

describe('readMarkdownFileSync', () => {
  it('should read markdown file', () => {
    const markdownStr = readMarkdownFileSync(
      path.resolve(__dirname, './fixtures/test.md'),
    )
    expect(markdownStr).toBe('**bold**')
  })
})

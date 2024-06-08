import path from 'path'
import fs from 'fs'

export const getPackageName = () => {
  const packageStr = fs.readFileSync(
    path.join(__dirname, '../package.json'),
    'utf-8',
  )
  return JSON.parse(packageStr).name
}

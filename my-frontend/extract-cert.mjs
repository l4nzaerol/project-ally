import fs from 'node:fs'

const p = 'C:/Users/CYDAO/.cursor/browser-logs/cdp-response-Runtime.evaluate-2026-11-24T06-04-53-804Z.json'
const j = JSON.parse(fs.readFileSync(p, 'utf8'))

function find(o) {
  if (!o || typeof o !== 'object') return null
  if (typeof o.value === 'string' && o.value.startsWith('data:image')) return o.value
  for (const key of Object.keys(o)) {
    const found = find(o[key])
    if (found) return found
  }
  return null
}

const value = find(j)
if (!value) {
  console.log(Object.keys(j))
  process.exit(1)
}
fs.writeFileSync('cert-preview-check.jpg', Buffer.from(value.split(',')[1], 'base64'))
console.log('wrote', value.length)

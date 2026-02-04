import fs from 'node:fs/promises'
import path from 'node:path'

const CANDIDATE_INPUTS = [
  'public/profile.png',
  'public/profile.jpg',
  'public/profile.jpeg',
  'public/profile.webp',
]

const MIME_BY_EXT = new Map([
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
])

function usage() {
  return [
    'Usage:',
    '  node scripts/make-profile-svg.mjs [inputImage] [outputSvg]',
    '',
    'Defaults:',
    `  inputImage: first existing of ${CANDIDATE_INPUTS.join(', ')}`,
    '  outputSvg: public/profile.svg',
  ].join('\n')
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

function toPosix(p) {
  return p.split(path.sep).join('/')
}

function buildSvg({ base64, mimeType }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800" height="800" viewBox="0 0 512 512">
  <image x="0" y="0" width="512" height="512" preserveAspectRatio="xMidYMid slice"
    href="data:${mimeType};base64,${base64}"
    xlink:href="data:${mimeType};base64,${base64}" />
</svg>
`
}

async function main() {
  const [, , inputArg, outputArg] = process.argv

  const outputSvg = outputArg || 'public/profile.svg'
  let inputImage = inputArg
  if (!inputImage) {
    for (const candidate of CANDIDATE_INPUTS) {
      if (await fileExists(candidate)) {
        inputImage = candidate
        break
      }
    }
  }

  if (!inputImage) {
    console.error('No input image found.')
    console.error(usage())
    process.exit(1)
  }

  const ext = path.extname(inputImage).toLowerCase()
  const mimeType = MIME_BY_EXT.get(ext)
  if (!mimeType) {
    console.error(`Unsupported input type: ${ext || '(no extension)'}`)
    console.error('Supported: .png, .jpg, .jpeg, .webp')
    process.exit(1)
  }

  const imageBytes = await fs.readFile(inputImage)
  const base64 = imageBytes.toString('base64')
  const svg = buildSvg({ base64, mimeType })

  await fs.mkdir(path.dirname(outputSvg), { recursive: true })
  await fs.writeFile(outputSvg, svg, 'utf8')

  console.log(`Wrote: ${toPosix(outputSvg)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

import '@testing-library/jest-dom'
import { TextEncoder } from 'util'
import { defineCustomElements } from '@emdgroup-liquid/liquid/dist/loader'

// Prevent display of error message from JSDom CSS parser.
// See https://github.com/jsdom/jsdom/issues/2177#issuecomment-376139329
const originalConsoleError = console.error
console.error = function (msg) {
  if (msg.toString().startsWith('Error: Could not parse CSS stylesheet')) return
  originalConsoleError(msg)
}

// @ts-ignore
global.__LD_ASSET_PATH__ = '/'
defineCustomElements()

global.TextEncoder = TextEncoder
global.requestAnimationFrame = (cb) => setTimeout(cb)
global.fetch = () =>
  Promise.resolve({
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(''),
  } as Response)

import crypto from 'crypto'
import { curry } from '../../../../../adt/dist/combinators'

const sign = curry((options, input, credentials) => {
  const s = crypto.createSign(options.algorithm)
  s.update(input)
  return s.sign(credentials, options.encoding)
})

export default sign

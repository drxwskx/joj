import crypto from 'crypto'
import { curry } from '../../../../../adt/dist/combinators'

const verify = curry((options, pem, sign, input) => {
  const v = crypto.createVerify(options.algorithm)
  v.update(input)
  return v.verify(pem, sign, options.encoding)
})

export default verify

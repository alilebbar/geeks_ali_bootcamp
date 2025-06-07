//const nom = require('./greeting')
import {greet} from './greeting.js'
import { coloree } from './colorful-message.js'
import { readFileR } from './files/read-file.js'
coloree(greet('ali'))
readFileR()
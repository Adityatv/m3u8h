import {writeFileSync} from "fs"
const {log} = console

let loc : string
loc=`public/CNAME`

log(`[task] update cname in ${loc}`)
writeFileSync(loc,'')
log(`[info] out: ${loc}`)

// npx tsx scripts/put-cname.ts
// pnpm add -D tsx
// node_modules/.bin/tsx scripts/put-cname.ts
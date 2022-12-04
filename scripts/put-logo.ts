import {copyFileSync,rmSync,existsSync} from "fs"
const {log} = console

let loc : string
function safeRmSync(loc:string):void{
    if(existsSync(loc)){
        rmSync(loc)
    }
}

log(`[task] update logo`)

loc='src/assets/img/logo.png'
copyFileSync(`../cdn/data/2022-11-29/favicon-256X256.PNG`,loc)
log(`[info] out: ${loc}`)


// npx tsx scripts/put-logo.ts
// pnpm add -D tsx
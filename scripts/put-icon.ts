import {copyFileSync,rmSync,existsSync} from "fs"
const {log} = console

let loc : string
function safeRmSync(loc:string):void{
    if(existsSync(loc)){
        rmSync(loc)
    }
}

log(`[task] update icon`)
loc=`public/favicon.png`
copyFileSync(`../cdn/data/2022-11-29/favicon-32X32.PNG`,loc)
log(`[info] out: ${loc}`)

let list:string[]|number[]
list=[64,128,256,512]
list.forEach(size=>{
    loc=`public/img/${size}x${size}.png`
    copyFileSync(`../cdn/data/2022-11-29/favicon-${size}X${size}.PNG`,loc)
    log(`[info] out: ${loc}`)

    // safeRmSync(`public/${size}x${size}.png`)
})

// npx tsx scripts/put-icon.ts
// pnpm add -D tsx
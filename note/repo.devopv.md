## clone repo
- [x] clone repo
```bash
# clone repo
# repo="https://github.com/ymc-github/fr-player-web.git" ;
repo ="https://github.com/Hunlongyu/ZY-Player-Web.git"
git clone "$repo" ../fr-player-web;
code ../fr-player-web;
```

## install
- [x] install deps `pnpm install`

## update
- [x] init git repo `rm -rf .git; git init;`
- [x] update icon `cp src/assets/img/logo.png`
- [x] del/update cname `rm -rf CNAME`
- [x] update name,author,email in pacakge.json
- [x] clean build `rm -rf yarn.lock package-lock.json`
- [x] run dev `pnpm run dev`
- [x] run build `pnpm run build`
- [x] run preview `pnpm run serve`
- [x] update note feat 
- [x] update note screenshopt
- [x] update note shields
- [x] update output in vite.config.ts
- [x] update manifest name and short name in vite.config.ts
- [x] update home page title `index.html`
- [x] update remote url `git remote -v`
- [x] update name,email,date in license


## code commit standard

- [x] feat - add new features
- [x] fix - fix issues/bugs
- [x] style - code style correlation does not affect the running results
- [x] perf - optimization/performance boosts
- [x] refactor - refactor code
- [x] revert - undo modifications
- [x] test - test related
- [x] docs - documentation/comments
- [x] build - modifications were made to the build system or external dependencies
- [x] chore - dependency updates/scaffolding configuration modifications, etc
- [x] workflow - workflow improvements
- [x] ci - continuous integration
- [x] types - type files updating
- [x] wip - in developing

## feat

- [x] page adaptation supports both desktop browsers and mobile browsers
- [x] support playback recording function, automatically jump to the historical playback progress
- [x] support favorites function
- [x] multi language (Chinese, English)
- [x] picture-in-picture mode

# vue-ref-issue

## What's the issue?

Build fails with error:

```bash
error during build:
[vite:dts] Internal Error: Unable to follow symbol for "nextTick"

You have encountered a software defect. Please consider reporting the issue to the maintainers of this application.
    at AstSymbolTable._analyzeChildTree (C:\Development\Apps\vue-ref-issue\node_modules\@microsoft\api-extractor\lib\analyzer\AstSymbolTable.js:338:43)
```

## What is the source of the error?

Exporting a parent component which has a template ref to a child component that has a (default) slot.  
The trigger seems to be the Vite DTS setting `rollupTypes: true` together with the `staticImport: true`.

## Possible fix!

Removing the `staticImport` settings solves the issue. Which is strange because that feature is enabled by default when using `rollupTypes`. So it was unnecessary to add it.

## How to run this repo's issue?

Install all packages:

```sh
npm install
```

Build the project and watch for errors during build.

```sh
npm run build
```

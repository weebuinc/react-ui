async function findPaths(fileName: string, searchPaths: Array<string>) {
  const { resolve: r } = await import('path');
  const { existsSync } = await import('fs');

  for (const path of [...searchPaths, r(__dirname, '../styles')]) {
    if (existsSync(r(path, fileName))) {
      return r(path, fileName);
    }
  }

  throw Error(`${fileName} was not found in the following paths: ${searchPaths.join(',')}`);
}

function getHighestParent(el: HTMLElement) {
  return el.parentElement ? getHighestParent(el.parentElement) : el;
}

export async function applyScss(el: HTMLElement, scssFileName: string, searchPaths: Array<string>) {
  const { resolve: r, basename } = await import('path');
  const { readFile } = await import('fs/promises');
  const {
    default: { compileStringAsync }
  } = await import('sass');

  const scss = await readFile(await findPaths(scssFileName, searchPaths), 'utf-8');

  const { css } = await compileStringAsync(scss, {
    loadPaths: [],
    importer: {
      async canonicalize(url, opts) {
        const basePath = basename(url);
        const filePath = await findPaths(basePath, searchPaths);
        return new URL('file://' + filePath);
      },
      async load(url) {
        return {
          contents: await readFile(url.toString().replace('file://', ''), 'utf-8'),
          syntax: 'scss'
        };
      }
    }
  });

  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  const parentEl = getHighestParent(el);
  parentEl.firstChild ? parentEl.insertBefore(style, parentEl.firstChild) : parentEl.appendChild(style);
}

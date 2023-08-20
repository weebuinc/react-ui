declare module '*flex.module.scss' {
  type Key =
    | 'alignAround'
    | 'alignBetween'
    | 'alignBottom'
    | 'alignEvenly'
    | 'alignMiddle'
    | 'alignTop'
    | 'column'
    | 'fullHeight'
    | 'fullWidth'
    | 'grow'
    | 'justifyAround'
    | 'justifyBetween'
    | 'justifyCenter'
    | 'justifyEvenly'
    | 'justifyLeft'
    | 'justifyRight'
    | 'noWrap'
    | 'reverse'
    | 'root'
    | 'row'
    | 'wrap';
  const record: Record<Key, string>;
  export default record;
}

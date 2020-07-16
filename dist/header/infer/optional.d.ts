declare type Optional<Header extends Record<string, string> | undefined> = Header extends Record<string, string> ? Header : {};
export default Optional;

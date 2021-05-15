export const hasPrivilege = (privileges: string[] = [], privilageKey) =>
  privileges.includes(privilageKey);

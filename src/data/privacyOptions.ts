export const visibilityOptions = ['Everyone', 'My Contacts', 'Nobody'] as const;
export type VisibilityOption = (typeof visibilityOptions)[number];
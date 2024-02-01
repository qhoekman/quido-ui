const PREFIX_SELECTOR = 'q';
export const createSelector = (id: string) => `${PREFIX_SELECTOR}-${id}`;

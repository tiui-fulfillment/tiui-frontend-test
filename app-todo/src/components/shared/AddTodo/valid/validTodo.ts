export const validTodo = (firstLoad: number, todo: string): string[] => {
  let errors: string[] = [];

  if (todo === '' && firstLoad === 1) {
    errors.push('you cant create an empty task');
  } else {
    errors = [];
  }

  return errors;
};

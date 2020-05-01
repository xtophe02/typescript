export const stringToDate = (dateString: string): Date => {
  const arrayDate = dateString.split("/");
  return new Date(
    parseInt(arrayDate[0]),
    parseInt(arrayDate[1]) - 1,
    parseInt(arrayDate[2])
  );
};

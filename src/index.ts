export const checkRoutine = () => {
  const currentHour = new Date().getHours();

  if (currentHour === 7) {
    return "Read and study";
  }

  return "Do Exercise";
}
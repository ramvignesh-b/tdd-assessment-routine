export const checkRoutine = () => {
  const currentHour = new Date().getHours();
  
  if (currentHour >= 7 && currentHour < 8) {
    return "Read and study";
  }

  return "Do Exercise";
}
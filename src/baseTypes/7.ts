/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  mondayon = 'monday',
  tue = 'tuesday',
  wednesdayed = 'wednesday',
  thu = 'thursday',
  fri = 'friday',
  sat = 'saturday',
  sun ='sunday',
};

function isWeekend(day: Day): boolean {
  return day === Day.sat || day ===  Day.sun 
};
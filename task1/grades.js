// ============================================================
// Завдання 2 — Калькулятор успішності
// ============================================================
// Реалізуйте 5 функцій. Перевірте у Console (відкрийте grades.html).
// ============================================================

const grades = [78, 92, 45, 88, 67, 39, 95, 71, 82, 58, 90, 64];
/**
 * Повертає середній бал, округлений до 1 знаку після коми.
 * average([5, 10, 15]) // 10.0
 */
function average(grades) {
  const sum = grades.reduce((total, current) => total + current, 0);
  const avg = sum / grades.length;
  return avg.toFixed(1);
}
/**
 * Повертає найвищу оцінку.
 * Обмеження: НЕ використовувати Math.max(...grades) напряму.
 */


function highest(grades) {
  let previousHigh = grades[0];
  for(const grade of grades ){
    if(previousHigh < grade){
      previousHigh = grade;
    }
  }
  return previousHigh;
}
/**
 * Повертає найнижчу оцінку.
 * Обмеження: НЕ використовувати Math.min(...grades) напряму.
 */
function lowest(grades) {
  let previousLow = grades[0];
  for(const grade of grades ){
    if(previousLow > grade){
      previousLow = grade;
    }
  }
  return previousLow;
}
/**
 * Повертає відсоток оцінок >= threshold.
 * passRate([60, 50, 70], 60) // 66.7
 */
function passRate(grades, threshold = 60) {
  const passingGrades = grades.filter(grade => grade >= threshold);
  const rate = (passingGrades.length / grades.length) * 100;
  return rate.toFixed(1);
}

/**
 * Повертає об'єкт з кількістю оцінок у діапазонах:
 * { "<60": 2, "60-69": 2, "70-79": 2, "80-89": 3, "90-100": 3 }
 */
function distribution(grades) {
  const ranges ={ "<60": 0, "60-69": 0, "70-79": 0, "80-89": 0, "90-100": 0 }
  for (const grade of grades){
    if(grade < 60){
      ranges["<60"]++;
    }else if(grade>59&& grade<70){
      ranges["60-69"]++;
    }else if(grade>69&& grade < 80){
      ranges["70-79"]++;
    }else if(grade>79&&grade <90){
      ranges["80-89"]++;
    }else if(grade>89){
      ranges["90-100"]++;
    }
  }
  return ranges;
}

// ============================================================
// Тестування — розкоментуйте після реалізації
// ============================================================
console.log("Середнє:    ", average(grades));
console.log("Найвища:    ", highest(grades));
console.log("Найнижча:   ", lowest(grades));
console.log("Pass rate:  ", passRate(grades), "%");
console.log("Distribution:", distribution(grades));

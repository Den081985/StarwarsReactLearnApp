//функция изменения css переменных
/**
Интерфейс CSSStyleDeclaration.setProperty()метода устанавливает новое значение свойства в 
объекте объявления стиля CSS.
 */
export const getCssVars = (theme) => {
  //в переменной сохраняется ссылка на root-объект css,в котором находятся переменные
  const root = document.querySelector(":root");
  //   console.log(root.style);
  //   root.style.setProperty(
  //     `--theme-default-header`,
  //     `var(--theme-${theme}-header)`
  //   );
  //   root.style.setProperty(
  //     `--theme-default-bgimage`,
  //     `var(--theme-${theme}-bgimage)`
  //   );

  const cssVariables = ["header", "bgimage"];

  cssVariables.forEach((element) => {
    root.style.setProperty(
      `--theme-default-${element}`,
      `var(--theme-${theme}-${element})`
    );
  });
};

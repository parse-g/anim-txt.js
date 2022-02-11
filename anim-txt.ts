'use strict';
// интерфесы / типы
interface Default {
  time: number;
  text: string;
  point: number | string;
  construct: {
    replace: boolean,
    backReplace: {
      value: boolean,
      point: string
    },
    time: {
      mode: 'full' | 'half' | 'third',
      ms: number
    },
    text: string
  };
}
// экспорт класс анимаций
export default class AnimateTxT {
  [key: string]: any;
  // Задание стандартных настроек
  static default: Default = {
    time: 1500,
    text: 'Hello, world!',
    point: '.',
    construct: {
      replace: false,
      backReplace: {
        value: true,
        point: '.',
      },
      time: {
        mode: 'half',
        ms: 1500,
      },
      text: 'AnimateTxT!',
    },
  };

  // конструктор анимаций
  constructor({
    replace = AnimateTxT.default.construct.replace,
    time = AnimateTxT.default.construct.time,
    text = AnimateTxT.default.construct.text,
    backReplace = AnimateTxT.default.construct.backReplace,
  } = {}) {
    this.settings = {
      replace,
      time,
      text,
      backReplace,
    };

    this.play = async (text = this.settings.text, all_time = this.settings.time.ms) => {
      let time = 0;

      // расчет времени в зависимости от длины текста и режима времени
      if (this.settings.time.mode === 'full') {
        time = Math.floor(all_time) / text.length;
      } else if (this.settings.time.mode === 'half') {
        time = Math.floor(all_time / 2) / text.length;
      } else if (this.settings.time.mode === 'third') {
        time = Math.floor(all_time / 3) / text.length;
      }

      // печать текста
      for (let key = 0; key < text.length; key++) {
        if (this.settings.replace === true) {
          process.stdout.write('\r' + text[key]); // печать текущей буквы с заменой
        } else {
          process.stdout.write(text[key]); // печать текущей буквы
        }

        await AnimateTxT.sleep(time); // ждать расчитаное время
      }

      if (this.settings.backReplace.value === true) {
        // замена текста точками
        for (let key = 0; key < text.length + 1; key++) {
          let point = '';
          point = point.padEnd(key, this.settings.backReplace.point); // создание переменной для записи точек

          process.stdout.write('\r' + point); // запись точки c заменой

          await AnimateTxT.sleep(time); // ждать расчитаное время
        }
      }
      await AnimateTxT.sleep(all_time); // ждать все время
    };
  }

  // задержка
  static sleep(ms = 2000): Promise<void> {
    return new Promise(end => setTimeout(end, ms));
  }

  // точечная анимация
  static async point({
    text = AnimateTxT.default.text,
    point = AnimateTxT.default.point,
    all_time = AnimateTxT.default.time,
  } = {}) {
    const time = Math.floor(all_time / 2) / text.length; // расчет времени в зависимости от длины  текста

    // печать текста
    for (let key = 0; key < text.length; key++) {
      process.stdout.write(text[key]); // печать буквы без перехода на новую строку

      await AnimateTxT.sleep(time); // ждать расчитаное время
    }

    // замена текста точками
    for (let key = 0; key < text.length + 1; key++) {
      let point = '';
      point = point.padEnd(key, '.'); // создание переменной для записи точек

      process.stdout.write('\r' + point); // запись точки c заменой

      await AnimateTxT.sleep(time); // ждать расчитаное время
    }
  }

  // анимация печати
  static async print({ text = AnimateTxT.default.text, all_time = AnimateTxT.default.time } = {}) {
    let time = all_time / text.length; // расчет времени в зависимости от длины текста

    for (let key: number = 0; key < text.length; key++) {
      process.stdout.write(text[key]); // печать текущей буквы

      await AnimateTxT.sleep(time); // ждать расчитаное время
    }

    await AnimateTxT.sleep(all_time); // ждать все время
  }

  // волнистая анимация
  static async wawe({ text = AnimateTxT.default.text, all_time = AnimateTxT.default.time } = {}) {
    const time = all_time / text.length; // расчет времени в зависимости от длины текста

    process.stdout.write('\r' + text); // печать текста

    for (let key: number = 0; key < text.length; key++) {
      process.stdout.write(
        '\r' +
          text.slice(0, key).toLowerCase() +
          text[key].toUpperCase() +
          text.slice(key + 1).toLowerCase()
      ); // печать текущей буквы
      await AnimateTxT.sleep(time); // ждать расчитаное время
    }

    await AnimateTxT.sleep(all_time); // ждать все время
  }

  // анимация линейного прокручивания
  static async line({ text = AnimateTxT.default.text, all_time = AnimateTxT.default.time } = {}) {
    const time = all_time / text.length; // расчет времени в зависимости от длины текста

    for (let key: number = 0; key < text.length; key++) {
      process.stdout.write('\r' + text.slice(key + 1) + text.slice(0, key) + text[key]); // печать текущей буквы

      await AnimateTxT.sleep(time); // ждать расчитанное время
    }

    await AnimateTxT.sleep(all_time); // ждать все время
  }
}

// by «parse-g»

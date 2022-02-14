'use strict';
class AnimateTxT {
  static default = {
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
      if (this.settings.time.mode === 'full') {
        time = Math.floor(all_time) / text.length;
      } else if (this.settings.time.mode === 'half') {
        time = Math.floor(all_time / 2) / text.length;
      } else if (this.settings.time.mode === 'third') {
        time = Math.floor(all_time / 3) / text.length;
      }
      for (let key = 0; key < text.length; key++) {
        if (this.settings.replace === true) {
          // @ts-ignore
          process.stdout.write('\r' + text[key]);
        } else {
          // @ts-ignore
          process.stdout.write(text[key]);
        }
        await AnimateTxT.sleep(time);
      }
      if (this.settings.backReplace.value === true) {
        for (let key = 0; key < text.length + 1; key++) {
          let point = '';
          point = point.padEnd(key, this.settings.backReplace.point);
          // @ts-ignore
          process.stdout.write('\r' + point);
          await AnimateTxT.sleep(time);
        }
      }
      await AnimateTxT.sleep(all_time);
    };
  }
  static sleep(ms = 2000) {
    return new Promise(end => setTimeout(end, ms));
  }
  // @ts-ignore
  static async point({
    text = AnimateTxT.default.text,
    point = AnimateTxT.default.point,
    all_time = AnimateTxT.default.time,
  } = {}) {
    const time = Math.floor(all_time / 2) / text.length;
    for (let key = 0; key < text.length; key++) {
      // @ts-ignore
      process.stdout.write(text[key]);
      await AnimateTxT.sleep(time);
    }
    for (let key = 0; key < text.length + 1; key++) {
      let point = '';
      point = point.padEnd(key, '.');
      // @ts-ignore
      process.stdout.write('\r' + point);
      await AnimateTxT.sleep(time);
    }
  }
  static async print({ text = AnimateTxT.default.text, all_time = AnimateTxT.default.time } = {}) {
    let time = all_time / text.length;
    for (let key = 0; key < text.length; key++) {
      // @ts-ignore
      process.stdout.write(text[key]);
      await AnimateTxT.sleep(time);
    }
    await AnimateTxT.sleep(all_time);
  }
  static async wawe({ text = AnimateTxT.default.text, all_time = AnimateTxT.default.time } = {}) {
    const time = all_time / text.length;
    // @ts-ignore
    process.stdout.write('\r' + text);
    for (let key = 0; key < text.length; key++) {
      // @ts-ignore
      process.stdout.write(
        '\r' +
          text.slice(0, key).toLowerCase() +
          text[key].toUpperCase() +
          text.slice(key + 1).toLowerCase(),
      );
      await AnimateTxT.sleep(time);
    }
    await AnimateTxT.sleep(all_time);
  }
  static async line({ text = AnimateTxT.default.text, all_time = AnimateTxT.default.time } = {}) {
    const time = all_time / text.length;
    for (let key = 0; key < text.length; key++) {
      // @ts-ignore
      process.stdout.write('\r' + text.slice(key + 1) + text.slice(0, key) + text[key]);
      await AnimateTxT.sleep(time);
    }
    await AnimateTxT.sleep(all_time);
  }
}
export { AnimateTxT };

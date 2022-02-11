'use strict';
export class Animate {
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
            text: 'Animate!',
        },
    };
    constructor({ replace = Animate.default.construct.replace, time = Animate.default.construct.time, text = Animate.default.construct.text, backReplace = Animate.default.construct.backReplace, } = {}) {
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
            }
            else if (this.settings.time.mode === 'half') {
                time = Math.floor(all_time / 2) / text.length;
            }
            else if (this.settings.time.mode === 'third') {
                time = Math.floor(all_time / 3) / text.length;
            }
            for (let key = 0; key < text.length; key++) {
                if (this.settings.replace === true) {
                    process.stdout.write('\r' + text[key]);
                }
                else {
                    process.stdout.write(text[key]);
                }
                await Animate.sleep(time);
            }
            if (this.settings.backReplace.value === true) {
                for (let key = 0; key < text.length + 1; key++) {
                    let point = '';
                    point = point.padEnd(key, this.settings.backReplace.point);
                    process.stdout.write('\r' + point);
                    await Animate.sleep(time);
                }
            }
            await Animate.sleep(all_time);
        };
    }
    static sleep(ms = 2000) {
        return new Promise(end => setTimeout(end, ms));
    }
    static async point({ text = Animate.default.text, point = Animate.default.point, all_time = Animate.default.time, } = {}) {
        const time = Math.floor(all_time / 2) / text.length;
        for (let key = 0; key < text.length; key++) {
            process.stdout.write(text[key]);
            await Animate.sleep(time);
        }
        for (let key = 0; key < text.length + 1; key++) {
            let point = '';
            point = point.padEnd(key, '.');
            process.stdout.write('\r' + point);
            await Animate.sleep(time);
        }
    }
    static async print({ text = Animate.default.text, all_time = Animate.default.time } = {}) {
        let time = all_time / text.length;
        for (let key = 0; key < text.length; key++) {
            process.stdout.write(text[key]);
            await Animate.sleep(time);
        }
        await Animate.sleep(all_time);
    }
    static async wawe({ text = Animate.default.text, all_time = Animate.default.time } = {}) {
        const time = all_time / text.length;
        process.stdout.write('\r' + text);
        for (let key = 0; key < text.length; key++) {
            process.stdout.write('\r' +
                text.slice(0, key).toLowerCase() +
                text[key].toUpperCase() +
                text.slice(key + 1).toLowerCase());
            await Animate.sleep(time);
        }
        await Animate.sleep(all_time);
    }
    static async line({ text = Animate.default.text, all_time = Animate.default.time } = {}) {
        const time = all_time / text.length;
        for (let key = 0; key < text.length; key++) {
            process.stdout.write('\r' + text.slice(key + 1) + text.slice(0, key) + text[key]);
            await Animate.sleep(time);
        }
        await Animate.sleep(all_time);
    }
}

// by parse-g
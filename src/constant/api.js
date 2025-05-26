const ENV = {
  local: "localhost",
  dev: "development",
  production: "production",
};

function getEnv() {
  return import.meta.env.VITE_MODE || ENV.production;
}

const mediaSeedingApi = {
  [ENV.local]: import.meta.env.VITE_BASE_URL || "https://xapi-dev.lenovo.com/martech/bms",
  [ENV.dev]: import.meta.env.VITE_BASE_URL || "https://xapi-dev.lenovo.com/martech/bms",
  [ENV.production]: import.meta.env.VITE_BASE_URL || "https://xapi.lenovo.com/martech/bms",
};

const MediaSeeding_Api = {
  ENV,
  getEnv: getEnv(),
  api: mediaSeedingApi[getEnv()],
};

export { MediaSeeding_Api }

/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *
 *
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *            佛祖保佑     永无BUG
 */



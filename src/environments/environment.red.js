import { baseEnvironment } from "./environment.base";

export const whiteLabeledEnvironment = {
  baseColor: '#ff0000',
};

export const environment = Object.assign({}, baseEnvironment, whiteLabeledEnvironment);

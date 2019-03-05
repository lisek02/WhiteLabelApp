import { baseEnvironment } from "./environment.base";

export const whiteLabeledEnvironment = {
  baseColor: '#000000',
};

export const environment = Object.assign({}, baseEnvironment, whiteLabeledEnvironment);

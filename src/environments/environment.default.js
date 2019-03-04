import { baseEnvironment } from "./environment.base";

export const whiteLabeledEnvironment = {
  baseColor: '#ffffff',
};

export const environment = Object.assign({}, baseEnvironment, whiteLabeledEnvironment);

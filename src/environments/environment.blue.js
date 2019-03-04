import { baseEnvironment } from "./environment.base";

export const whiteLabeledEnvironment = {
  baseColor: '#0000ff',
};

export const environment = Object.assign({}, baseEnvironment, whiteLabeledEnvironment);

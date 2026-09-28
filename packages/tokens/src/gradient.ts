import { color } from './color';

/** Named gradients as ordered color-stop arrays, built from color.ts. */
export const gradient = {
  burst: [color.gold[500], color.orange[500], color.red[500]],
  cosmic: [color.blue[700], color.purple[500]],
} as const;

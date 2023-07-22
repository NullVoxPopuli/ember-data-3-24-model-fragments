import { setupWorker } from 'msw';

import { handlers } from './handlers';

export async function setup() {
  const worker = setupWorker(...handlers);
  await worker.start();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
}

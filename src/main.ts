import setup from './setup';

async function start() {
   try {
      await setup();
   } catch (err) {
      console.error(err);
      process.exit(1);
   }
}

start();

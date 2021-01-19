const handler = require('./index');

handler({type: `info`, msg: `Crhis is awesome!`});
handler({type: `error`, msg: `Something went wrong!`});
handler({type: `warning`, msg: `cli-handlers are cool!`});
handler({type: `success`, msg: `Everything finished!`});
handler({type: `success`, msg: `Everything finished!`, name: `DONE`});
handler();

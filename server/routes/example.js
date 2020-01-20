export default function (server) {

  server.route({
    path: '/api/ueba/example',
    method: 'GET',
    handler() {
      return { time: (new Date()).toISOString() };
    }
  });

}

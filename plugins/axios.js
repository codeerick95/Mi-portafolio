export default function ({ $axios, store }) {
  $axios.onRequest(() => {
    config.headers.common["access-token"] =
      store.state.user.headers.access_token;
  });
}

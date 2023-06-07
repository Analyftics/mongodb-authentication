async function main() {
  // Initialize app
  const app = new Realm.App({ id: 'application-analyftics-cezuu' });

  // Get required queries
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  const tokenId = urlParams.get('tokenId');

  // Config user
  await app.emailPasswordAuth.confirmUser({
    token,
    tokenId,
  });
}

main();

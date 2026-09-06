(function() {
  const iframe = document.createElement('iframe');
  document.body.appendChild(iframe);
  const token = iframe.contentWindow.localStorage.token || iframe.contentWindow.sessionStorage.token;
  iframe.remove();
  
  if (token) {
    const cleanToken = token.replace(/"/g, '');
    alert("あなたのトークン:\n\n" + cleanToken);
    console.log(cleanToken);
  } else {
    alert("トークンが見つかりませんでした。ログインしているか、PC版サイトで開いているか確認してください。");
  }
})();

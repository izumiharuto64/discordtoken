var t = (window.webpackChunkdiscord_app ? window.webpackChunkdiscord_app.push([[Math.random()], {}, (e) => {for (const r in e.c) if (e.c[r].exports && e.c[r].exports.default && e.c[r].exports.default.getToken) return e.c[r].exports.default.getToken;}]) : "Discordのページを開いてください");

if (t && t !== "Discordのページを開いてください") {
    // 画面の一番上に直接テキストを表示させる
    var d = document.createElement("div");
    d.style = "position:fixed;top:0;left:0;width:100%;background:white;color:black;z-index:9999;padding:20px;font-size:16px;word-break:break-all;border-bottom:5px solid red;";
    d.innerHTML = "<strong>【取得したトークン】</strong><br><br>" + t + "<br><br><button onclick='this.parentElement.remove()' style='padding:10px;background:#ccc;border:none;border-radius:5px;'>閉じる</button>";
    document.body.appendChild(d);
} else {
    alert("トークンを取得できませんでした。ログインしているか確認してください。");
}
completion(t);

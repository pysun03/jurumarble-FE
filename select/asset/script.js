function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

document.addEventListener("DOMContentLoaded", function() {
  const savedCount = getCookie("userCount");
  if (savedCount !== "") {
    howmany(userCount);
  }
});


function howmany(n) {
  const container = document.querySelector(".container");
  let str = "";
  for (let i = 1; i < n + 1; i++) {
    // const div = document.createElement("div");

    // const img = document.createElement("img");
    // img.src = `./static/cap_${i}.png`;

    // const input = document.createElement("input");
    // input.type = "text";

    // div.appendChild(img);
    // div.appendChild(input);

    // container.appendChild(div);

    str += `
        <div class="user">
            <img src="./static/cap_${i}.png" />
            <input type="text" placeholder="플레이어명(팀명)"/>
        </div>
    `;
  }
  container.innerHTML =
    str + `<button id="btn" onclick="seletcion()">설정</button>`;
}

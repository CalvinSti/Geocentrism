
 /* let text = document.getElementById("planets");
  let current_speed = 0;
  let animation;
  let angle = 0;
  let video = false;

  function animate() {
    angle += current_speed
    text.style.transform = `rotate(${angle}deg)`;
     text.style.transform = `rotateZ(${angle}deg)`;
      if (Math.abs(current_speed) > 0.01) {
    animation = requestAnimationFrame(animate);
    current_speed *= 0.99995;
      }
      if (current_speed > 0.5 && !video) {
        video = true;
        let vid = document.createElement("iframe");
        vid.src="https://www.youtube.com/embed/iDLmYZ5HqgM?si=jKkFL6KqkPK8MXpV&autoplay=1&mute=0";
        vid.style.height = "50";
        vid.style.width = "50";
        vid.style.position = "absolute";
        vid.style.top = "50%";
        vid.style.display = "none";
        document.body.appendChild(vid);
      }
    }
  text.addEventListener('click', () => { 
    current_speed += 0.0090
    animate();
  });
*/
  function stars() {
    for (let i = 0; i < 1500; i++) {
      let container = document.querySelector("body")
      let star = document.createElement("div");
      star.className = "star";
      star.style.top = Math.random() * 200 + "%";
      star.style.left = Math.random() * 100 + "%"
      container.appendChild(star);
    }
  }
stars();

!function(a, b) {
    "use strict";
    function F() {
        var b = {};
        e.fillStyle = "rgba(0, 0, 0, 1)",
        e.fillRect(0, 0, i, j),
        e.strokeRect(0, 0, i, j),
        b = {
            x: l.x - m[2] * w(n[2] * r),
            y: l.y - m[2] * x(n[2] * r)
        },
        I(b),
        s && e.drawImage(d, 0, 0),
        G(),
        H(b),
        r += .009,
        a.requestAnimationFrame(F)
    }
    function G() {
        e.fillStyle = "#ffffff",
        e.fillText("Heliocentrism", i / 4, j / 17),
        e.fillText("Geocentrism", .75 * i, j / 17)
    }
    function H(a) {
        var b, c = m.length;
        for (e.fillStyle = "rgb(243, 179, 63)",
        e.beginPath(),
        e.arc(k.x, k.y, o[0], 0, 2 * y),
        e.arc(a.x, a.y, o[0], 0, 2 * y),
        e.fill(),
        e.closePath(),
        e.fillStyle = "rgb(211, 61, 54)",
        b = 0; b < c; b++)
            2 !== b && (e.beginPath(),
            e.arc(a.x + m[b] * w(n[b] * r), a.y + m[b] * x(n[b] * r), o[b + 1], 0, 2 * y),
            e.fill(),
            e.closePath());
        for (e.fillStyle = "rgb(75, 131, 198)",
        e.beginPath(),
        e.arc(l.x, l.y, o[3], 0, 2 * y),
        e.fill(),
        e.closePath(),
        b = 0; b < c; b++)
            e.fillStyle = 2 === b ? "rgb(75, 131, 198)" : "rgb(211, 61, 54)",
            e.beginPath(),
            e.arc(k.x + m[b] * w(n[b] * r), k.y + m[b] * x(n[b] * r), o[b + 1], 0, 2 * y),
            e.fill(),
            e.closePath()
    }
    function I(a) {
        var b;
        for (f.fillStyle = "rgba(255, 204, 0, 1)",
        f.beginPath(),
        f.arc(a.x, a.y, p, 0, 2 * y),
        f.fill(),
        f.closePath(),
        f.fillStyle = "rgba(211, 62, 54, 1)",
        b = 0; b < m.length; b++)
            2 !== b && (f.beginPath(),
            f.arc(a.x + m[b] * w(n[b] * r), a.y + m[b] * x(n[b] * r), p, 0, 2 * y),
            f.fill(),
            f.closePath());
        for (b = 0; b < m.length; b++)
            f.fillStyle = 2 === b ? "rgba(75, 131, 198, 0.3)" : "rgba(211, 62, 54, 1)",
            f.beginPath(),
            f.arc(k.x + m[b] * w(n[b] * r), k.y + m[b] * x(n[b] * r), p, 0, 2 * y),
            f.fill(),
            f.closePath()
    }
    function J() {
        var a;
        a = c.parentNode.offsetWidth,
        a !== c.width && a < g && (c.width = a,
        c.height = A(a * h / g),
        d.width = a,
        d.height = A(a * h / g),
        i = c.width,
        j = c.height),
        e = c.getContext("2d"),
        f = d.getContext("2d"),
        e.font = i / 25 + "px Arial",
        e.textBaseline = "middle",
        e.textAlign = "center",
        K()
    }
    function K() {
        var a, b = m.length;
        for (k = {
            x: i / 4 - j / 50,
            y: j / 2
        },
        l = {
            x: .75 * i - j / 50,
            y: j / 2
        },
        q = .2 * i,
        a = 0; a < b; a += 1)
            m[a] = (a + 1) * q / b
    }
    function L() {
        s = !s,
        d.width = i
    }
    function M() {
        var f, e = b.getElementById("canvasContainer");
        for (n = [15, 10, 7, 5.5, 4.5, 3.5, 2.5, 1.5],
        o = [11, 3, 3, 5, 3, 7, 7, 5, 5],
        f = 0; f < 8; f += 1)
            m[f] = 0;
        c = b.createElement("canvas"),
        d = b.createElement("canvas"),
        c.width = g,
        c.height = h,
        d.width = g,
        d.height = h,
        i = c.width,
        j = c.height,
        e.appendChild(c),
        J(),
        a.addEventListener("resize", J, !1),
        c.addEventListener("touchstart", function(a) {
            a.preventDefault(),
            a.stopPropagation(),
            L(a.changedTouches[0])
        }, !1),
        a.requestAnimationFrame(F)
    }
    var c, d, e, f, i, j, q, g = 650, h = 500, k = {}, l = {}, m = [], n = [], o = [], p = 1, r = 0, s = !0, w = (a.console,
    Math.atan2,
    Math.sqrt,
    Math.cos), x = Math.sin, y = Math.PI, A = (Math.random,
    Math.floor);
    Math.round,
    Math.max,
    Math.min,
    Math.abs;
    M()
}(this, this.document);

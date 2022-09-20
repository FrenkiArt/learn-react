setTimeout(() => {
  !(function () {
    var t = document.createElement("script")
    ;(t.type = "text/javascript"),
      (t.async = !0),
      (t.src = "https://vk.com/js/api/openapi.js?169"),
      (t.onload = function () {
        VK.Retargeting.Init("VK-RTRG-1540716-exLO2"), VK.Retargeting.Hit()
      }),
      document.head.appendChild(t)
  })()
}, 5000)

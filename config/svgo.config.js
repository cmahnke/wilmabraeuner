module.exports = {
  multipass: true,
  plugins: [
    "removeEditorsNSData",
    {name: "removeAttrs",
      params: { "attrs": "(font-weight|font-size|font-family)" }
    }
  ]
}

module.exports = {
  multipass: true,
  plugins: [
    "removeEditorsNSData",
    {name: "removeAttrs",
      params: { "attrs": "(style|font-weight|font-size|font-family)" }
    }
  ]
}

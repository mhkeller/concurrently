// Check if we have an ipc channel
if (process.send) {
  setTimeout(function () {
    process.send(0)
  }, 1000)
}
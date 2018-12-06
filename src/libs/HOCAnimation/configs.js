const groupInit = {
  enter: {
    y: 0,
    opacity: 1,
    delay: 200,
    transition: {
      y: { type: "spring", stiffness: 800, damping: 10 },
      default: { duration: 800 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 350 },
  },
}
const fadeInit = {
  enter: {
    x: -50,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    x: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
}


export {
  groupInit,
  fadeInit
}
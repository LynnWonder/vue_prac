export function getPosition(el) {
  if (!el) {
    return undefined
  }
  const rect = el.getBoundingClientRect()
  const gap = 10
  return {
    left: rect.left - gap / 2,
    top: rect.top - gap / 2,
    width: el.offsetWidth + gap,
    height: el.offsetHeight + gap,
  }
}

import 'aframe'

AFRAME.registerComponent('limited-wasd-controls', {
  schema: {
    minX: { type: 'number', default: -1 },
    maxX: { type: 'number', default: 1 },
    minY: { type: 'number', default: 0 },
    maxY: { type: 'number', default: 1 },
    minZ: { type: 'number', default: -1 },
    maxZ: { type: 'number', default: 1 },
  },

  init: function () {},

  tick: function () {
    this.checkLimits()
  },

  checkLimits: function () {
    const position = this.el.getAttribute('position')
    const { minX, maxX, minY, maxY, minZ, maxZ } = this.data

    if (position.x < minX) position.x = minX
    if (position.x > maxX) position.x = maxX
    if (position.y < minY) position.y = minY
    if (position.y > maxY) position.y = maxY
    if (position.z < minZ) position.z = minZ
    if (position.z > maxZ) position.z = maxZ

    this.el.setAttribute('position', position)
  },
})

function Link() {
  Component.call(this, "a")

  this.addClass("Link")
  this.setUrl("")
}

Link.prototype = Object.create(Component.prototype)
Link.prototype.constructor = Link

Link.prototype.setUrl = function (url) {
  this.container.href = url
}
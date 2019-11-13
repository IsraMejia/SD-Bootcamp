const rex= {
  nombre: 'Rex',
  raza: 'pitbull',
  edad: 5,
  getNombre: function(){
     return ` ${this.nombre}  ${this.raza} `
  },
  hablar: function(){
    return  `${this.getNombre()}, tengo ${this.edad} años.`
  },

  amigos: [
    {
      nombre: "coco",
      raza: "chihuahua",
    },
    {
      nombre: "golis",
      raza: "san Bernando",
    }
  ]

};

document.body.querySelector('#resultado').append(JSON.stringify(rex));


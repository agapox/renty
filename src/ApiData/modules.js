const modules = [
  {
    name: 'Propiedades',
    singularName: 'Propiedad',
    icon: 'fas fa-home',
    description: 'Maneja tus propiedades ya registradas en el módulo propiedades, Descarga, modifica el tipo de moneda, actualiza la información.',
    features: [
      'Agregar', 'Modificar', 'Buscar', 'Eliminar', 'Descargar', 'Estadísticas'
    ],
    price: '4.000',
    currencyCode: 'CLP',
    currencyName: 'Pesos Chilenos',
    currencySymbol: '$',
    paymentAccepted: [
      {name: 'Red Compra', logo: 'https://www.blogredcompra.cl/wp-content/themes/blogredcompra/img/img/redcompra.png'},
      {name: 'Visa', logo: 'https://www.blogredcompra.cl/wp-content/themes/blogredcompra/img/img/redcompra.png'},
      {name: 'MasterCard', logo: 'https://www.blogredcompra.cl/wp-content/themes/blogredcompra/img/img/redcompra.png'}
    ]
  },
  {
    name: 'Contratos',
    singularName: 'Contrato',
    icon: 'far fa-calendar',
    description: 'Maneja contratos de tus propiedades ya registradas en el módulo propiedades, Descarga contratos, modifica el tipo de moneda, actualiza plazos de arriendo.',
    features: [
      'Agregar', 'Modificar', 'Buscar', 'Eliminar', 'Descargar', 'Estadísticas'
    ],
    price: '4.000',
    currencyCode: 'CLP',
    currencyName: 'Pesos Chilenos',
    currencySymbol: '$',
    paymentAccepted: [
      {name: 'Red Compra', logo: 'https://www.blogredcompra.cl/wp-content/themes/blogredcompra/img/img/redcompra.png'},
      {name: 'Visa', logo: 'https://www.blogredcompra.cl/wp-content/themes/blogredcompra/img/img/redcompra.png'},
      {name: 'MasterCard', logo: 'https://www.blogredcompra.cl/wp-content/themes/blogredcompra/img/img/redcompra.png'}
    ]
  }
]

export default modules
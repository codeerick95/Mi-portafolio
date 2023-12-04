const posts = [
	{
		titulo: 'Captura de pantalla con Javascript',
		descripcionCorta: 'En este tutorial veremos como utilizar la librería html2canvas para generar una captura a un elemento o sección en específico.',
		imagenPrincipal: 'https://res.cloudinary.com/ehldev/image/upload/v1641169013/portafolio-ehldev/portada-post-1_pcy6r0.png',
		keywords: ['Capturas con Js', 'html2canvas', 'Tutorial captura de pantalla con html2canvas'],
		destacado: true
	},
	{
		titulo: 'Tomar capturas y generar imagen descargable con Javascript 2',
		descripcionCorta: 'En este tutorial veremos como utilizar la librería html2canvas para generar una captura a un elemento o sección en específico.',
		imagenPrincipal: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/GNOME_Screenshot_icon_2018.svg/1200px-GNOME_Screenshot_icon_2018.svg.png',
		destacado: false
	},
  {
		titulo: 'Tomar capturas y generar imagen descargable con Javascript 3',
		descripcionCorta: 'En este tutorial veremos como utilizar la librería html2canvas para generar una captura a un elemento o sección en específico.',
		imagenPrincipal: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/GNOME_Screenshot_icon_2018.svg/1200px-GNOME_Screenshot_icon_2018.svg.png',
		destacado: false
	}
]

// Asignar Id
let id = 1
posts.forEach(item => item.id = id++)

// generar slug
function slugify(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

posts.forEach(item => item.slug = slugify(item.titulo))

export { posts }

const cloudinaryConfig = {
  cloudName: "ehldev",
  uploadPreset: "web_personal",
  language: "es",
  text: {
    es: {
      queue: {
        title: "Archivos a subir",
        title_uploading_with_counter: "Uploading {{num}} files",
      },
      crop: {
        title: "Crop your image",
      },
      local: {
        browse: "Explorar",
        dd_title_multi: "Arrastre o suelte un archivo aquí",
      },
    },
  },
};

module.exports = cloudinaryConfig;

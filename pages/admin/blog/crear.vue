<template>
  <div>
    Create

    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: 'auth',
  methods: {
    uploadImage() {
      var myWidget = cloudinary.createUploadWidget(
        {
          cloudName: "ehldev",
          uploadPreset: "web_personal",
          language: "es",
          text: {
            "es": {
                "queue": {
                    "title": "Archivos a subir",
                    "title_uploading_with_counter": "Uploading {{num}} files"
                },
                "crop": {
                    "title": "Crop your image"
                },
                "local": {
                  "browse": 'Explorar',
                  "dd_title_multi": 'Arrastre o suelte un archivo aquí'
                }
            }
          }
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
          }
        }
      );

      myWidget.open()
    },
  },
};
</script>

<style></style>

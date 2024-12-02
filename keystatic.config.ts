import { config, fields, collection, singleton } from "@keystatic/core";
import { defaultTitle, keyStaticProject } from "./config";
import React from "react";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: { project: keyStaticProject},
  ui: {
    brand: {
      name: defaultTitle,
      mark: () => {
        return React.createElement("img", {
          src: "/favicon/favicon.svg",
          width: 35,
        });
      },
    },
    navigation: {
      Blog: ["blog", "categorie"],
      Home: ["primavera", "autunno", "inverno", "caroselloHome"],
      Impostazioni: ["navbarHeader"],
    },
  },

  collections: {
    blog: collection({
      label: "📰 Blog",
      slugField: "title",
      path: "src/content/blog/*",
      columns: ["title", "date"],
      format: { contentField: "body" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Titolo",
            validation: {
              isRequired: true,
              length: { max: 60 },
            },
          },
        }),
        excerpt: fields.text({
          label: "Breve descrizione",
          description: "Inserisci una breve descrizione per il tuo articolo",
          multiline: true,
          validation: { length: { max: 160 }, isRequired: true },
        }),
        date: fields.datetime({
          label: "Data di pubblicazione",
          validation: { isRequired: true },
          defaultValue: { kind: "now" },
        }),
        thumbnail: fields.image({
          label: "Immagine in evidenza",
          directory: "src/assets/img/cms/blog",
          publicPath: "/src/assets/img/cms/blog",
          validation: { isRequired: true },
        }),

        body: fields.markdoc({
          label: "Scrivi il tuo articolo",
          extension: "md",
          options: {
            image: {
              directory: "public/img/blogEntry",
              publicPath: "/img/blogEntry",
            },
          },
        }),
        categoria: fields.array(
          fields.relationship({
            label: "Categorie",
            validation: { isRequired: true },
            description: "Lista delle categorie di questo articolo",
            collection: "categorie",
          }),
          {
            label: "Categorie",
            itemLabel: (item) => item.value || "Seleziona una categoria",
          }
        ),

        galleria: fields.array(
          fields.object({
            src: fields.image({
              label: "Source",
              directory: "src/assets/img/cms/blog",
              publicPath: "/src/assets/img/cms/blog",
            }),
            alt: fields.text({ label: "Alt Text" }),
          }),
          {
            label: "Galleria di Immagini",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      },
    }),

    categorie: collection({
      label: "📑 Categorie Blog",
      slugField: "title",
      path: "src/content/categorie/*",
      columns: ["title", "icon"],
      format: { contentField: "emptyContent" },
      schema: {
        emptyContent: fields.emptyContent({ extension: "md" }),
        title: fields.slug({
          name: {
            label: "Titolo",
            description:
              "ATTENZIONE! se volete rimuovere una categoria assicuratevi prima di rimuoverla da tutti gli articoli",
            validation: {
              isRequired: true,
            },
          },
        }),
        description: fields.text({
          label: "Breve descrizione",
          description: "Inserisci una breve descrizione per la categoria",
          multiline: true,
          validation:{isRequired: true},
        }),

        icon: fields.text({
          label: "Icona categoria",
          validation: { isRequired: true },
          description:
            "Puoi trovare le icone qui https://icon-sets.iconify.design/mdi/ ",
          defaultValue: "mdi:mountain-outline",
        }),
      },
    }),
  },
  singletons: {
    caroselloHome: singleton({
      label: "🎠 Carosello Attività Home",
      path: "src/content/carousel/caroselloattivita",
      format: { data: "json" },
      schema: {
        slide: fields.array(
          fields.object({
            title: fields.text({
              label: "Titolo",
              validation: { isRequired: true },
            }),
            link: fields.url({
              label: "Link",
              validation: { isRequired: true },
            }),
            image: fields.image({
              label: "Immagine",
              directory: "src/assets/img/cms/carosello",
              publicPath: "/src/assets/img/cms/carosello",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Slide carosello attività",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
    navbarHeader: singleton({
      label: "🛠️ Navbar",
      path: "src/content/navbar/navbarHeader",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            label: fields.text({
              label: "Etichetta",
              validation: { isRequired: true },
            }),
            path: fields.text({
              label: "Percorso",
              validation: { isRequired: true },
            }),
            icon: fields.text({
              label: "Icona",
              description:
                "Puoi trovare le icone qui https://icon-sets.iconify.design/mdi/ es. mdi:mountain-outline",
            }),
            externalLink: fields.checkbox({
              label: "Link esterno",
            }),
            children: fields.array(
              fields.object({
                label: fields.text({
                  label: "Etichetta",
                  validation: { isRequired: true },
                }),
                path: fields.text({
                  label: "Percorso",
                  validation: { isRequired: true },
                }),
              }),
              {
                label: "Sottomenu",
                itemLabel: (props) => props.fields.label.value,
              }
            ),
          }),
          {
            label: "Voci della Navbar Header",
            itemLabel: (props) => props.fields.label.value,
          }
        ),
      },
    }),
    autunno: singleton({
      label: "🍂 Autunno",
      path: "src/content/homeHero/autunno",
      format: { data: "json" },
      schema: {
        Immagini: fields.array(
          fields.object({
            src: fields.image({
              label: "Immagini",
              directory: "src/assets/img/cms/heroSlide/autunno",
              publicPath: "/src/assets/img/cms/heroSlide/autunno",
              validation: { isRequired: true },
            }),
            alt: fields.text({
              label: "Alt Text",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Immagini per la stagione autunnale",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      },
    }),
    inverno: singleton({
      label: "❄️ Inverno",
      path: "src/content/homeHero/inverno",
      format: { data: "json" },
      schema: {
        Immagini: fields.array(
          fields.object({
            src: fields.image({
              label: "Immagini",
              directory: "src/assets/img/cms/heroSlide/inverno",
              publicPath: "/src/assets/img/cms/heroSlide/inverno",
              validation: { isRequired: true },
            }),
            alt: fields.text({
              label: "Alt Text",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Immagini per la stagione invernale",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      },
    }),
    primavera: singleton({
      label: "🌻 Primavera",
      path: "src/content/homeHero/primavera",
      format: { data: "json" },
      schema: {
        Immagini: fields.array(
          fields.object({
            src: fields.image({
              label: "Immagini",
              directory: "src/assets/img/cms/heroSlide/primavera",
              publicPath: "/src/assets/img/cms/heroSlide/primavera",
              validation: { isRequired: true },
            }),
            alt: fields.text({
              label: "Alt Text",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Immagini per la stagione primaverile",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      },
    }),
  },
});

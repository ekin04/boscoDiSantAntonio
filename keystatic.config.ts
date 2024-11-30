import { config, fields, collection, singleton } from "@keystatic/core";
import { defaultTitle, keyStaticProject } from "./config";
import React from "react";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: { project: keyStaticProject },
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
      Blog: ["escursioni", "categorieBlog"],
      Home:["primavera","autunno", "inverno","caroselloHome"],
      Impostazioni: ["navbarHeader"],
      
    },
  },

  collections: {
    escursioni: collection({
      label: "📰 Blog",
      slugField: "title",
      path: "src/content/blog/*",
      columns: ["title", "thumbnail", "date"],
      format: { contentField: "body" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Titolo" } }),
        excerpt: fields.text({
          label: "Breve descrizione",
          description: "Inserisci una breve descrizione per il tuo articolo",
          multiline: true,
          validation: { length: { max: 160 }, isRequired: true },
        }),
        date: fields.date({
          label: "Data di pubblicazione",
          validation: { isRequired: true },
        }),
        thumbnail: fields.image({
          label: "Immagine in evidenza",
          directory: "src/assets/img/cms/blog",
          publicPath: "@cmsImg/blog",
          validation: { isRequired: true },
        }),

        body: fields.mdx({
          label: "Scrivi il tuo articolo",
          options: {
            image: {
              directory: "src/assets/img/cms/blog",
              publicPath: "@cmsImg/blog",
            },
          },
        }),
        categoria: fields.relationship({
          label: "Categoria",
          collection: "categorieBlog",
        }),
        galleria: fields.array(
          fields.object({
            src: fields.image({
              label: "Source",
              directory: "src/assets/img/cms/blog",
              publicPath: "@cmsImg/blog",
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
    categorieBlog: collection({
      label: "📑 Categorie Blog",
      slugField: "title",
      path: "src/content/blog/*",
      columns: ["title", "thumbnail", "date"],
      format: { contentField: "body" },
      entryLayout: "content",
      schema: {
        title: fields.slug({ name: { label: "Titolo" } }),
        excerpt: fields.text({
          label: "Breve descrizione",
          description: "Inserisci una breve descrizione per il tuo articolo",
          multiline: true,
          validation: { length: { max: 160 }, isRequired: true },
        }),
        date: fields.date({
          label: "Data di pubblicazione",
          validation: { isRequired: true },
        }),
        thumbnail: fields.image({
          label: "Immagine in evidenza",
          directory: "src/assets/img/cms/blog",
          publicPath: "@cmsImg/blog",
          validation: { isRequired: true },
        }),

        body: fields.mdx({
          label: "Scrivi il tuo articolo",
          options: {
            image: {
              directory: "src/assets/img/cms/blog",
              publicPath: "@cmsImg/blog",
            },
          },
        }),
        categoria: fields.relationship({
          label: "Categoria",
          collection: "categorieBlog",
        }),
        galleria: fields.array(
          fields.object({
            src: fields.image({
              label: "Source",
              directory: "src/assets/img/cms/blog",
              publicPath: "@cmsImg/blog",
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
              directory: "src/assets/img/cms/heroSlide",
              publicPath: "/src/assets/img/cms/heroSlide",
              validation: { isRequired: true },
            }),
            alt: fields.text({ label: "Alt Text", validation: { isRequired: true } }),
            
          }),
          {
            label: "Immagini per la stagione autunnale",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      }
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
              directory: "src/assets/img/cms/heroSlide",
              publicPath: "/src/assets/img/cms/heroSlide",
              validation: { isRequired: true },
            }),
            alt: fields.text({ label: "Alt Text", validation: { isRequired: true } }),
          }),
          {
            label: "Immagini per la stagione invernale",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      }
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
              directory: "src/assets/img/cms/heroSlide",
              publicPath: "/src/assets/img/cms/heroSlide",
              validation: { isRequired: true },
            }),
            alt: fields.text({ label: "Alt Text", validation: { isRequired: true } }),
          }),
          {
            label: "Immagini per la stagione primaverile",
            itemLabel: (props) => props.fields.alt.value,
          }
        ),
      }
    }),
  },
});

import { config, fields, collection, singleton } from "@keystatic/core";
import { siteName, keyStaticProject } from "./const";
import React from "react";

export default config({
  storage: import.meta.env.DEV === true ? { kind: "local" } : { kind: "cloud" },
  cloud: { project: keyStaticProject },
  ui: {
    brand: {
      name: siteName,
      mark: () => {
        return React.createElement("img", {
          src: "/favicon/favicon.svg",
          width: 35,
        });
      },
    },
    navigation: {
      Pagine: ["escursioni"],
      Impostazioni: ["caroselloHome", "categorieBlog"],
    },
  },

  collections: {
    escursioni: collection({
      label: "📑 Blog",
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
      label: "🎠 Carosello Home",
      path: "src/content/carosello-home",
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
              directory: "src/assets/img/cms",
              publicPath: "/src/assets/img/cms",
              validation: { isRequired: true },
            }),
          }),
          {
            label: "Slide galleria",
            itemLabel: (props) => props.fields.title.value,
          }
        ),
      },
    }),
  },
});

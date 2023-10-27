import {defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'fontCategory',
  fields: [
    {
      type: 'string',
      name: 'fontName',
      title: 'Font name',
      validation: (Rule: any) => Rule.required(),
    },
    {
      type: 'string',
      name: 'fontType',
      title: 'Font type',
      description:
        'Select a font type (will be used to display a fallback stystem font while loading the font assets).',
      options: {
        list: [
          {
            title: 'Serif',
            value: 'serif',
          },
          {
            title: 'Sans-serif',
            value: 'sans-serif',
          },
        ],
        layout: 'radio',
      },
      initialValue: 'sans-serif',
    },
    {
      type: 'boolean',
      name: 'antialiased',
      title: 'Antialiasing',
      description: 'Enable antialiasing to smooth the font.',
    },
    {
      type: 'array',
      name: 'fontAssets',
      title: 'Font assets',
      of: [{type: 'fontAsset'}],
      validation: (Rule: any) =>
        Rule.custom((value: any) => value?.length > 0 || 'At least one font asset is required.'),
    },
  ],
})

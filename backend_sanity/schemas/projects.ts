export default {
    name: 'projects',
    title: 'Projects',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'tags'}]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspots: true
            }
        },
        {
            name: 'website_link',
            title: 'Website Link',
            type: 'string'
        },
        {
            name: 'source_code_link',
            title: 'Source Code Link',
            type: 'string'
        }
    ]
}
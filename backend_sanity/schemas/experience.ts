export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'company_name',
            title: 'Company Name',
            type: 'string'
        },
        {
            name: 'icon',
            title: 'Image',
            type: 'image',
            options: {
                hotspots: true
            }
        },
        {
            name: 'icon_bg',
            title: 'Icon Background',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of:[{ type: 'points'}]
        }
    ]
}
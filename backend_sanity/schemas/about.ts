export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'imageUrl',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
}
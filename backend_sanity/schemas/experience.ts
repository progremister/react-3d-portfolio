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
            name: 'startDate',
            title: 'Start Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
                calendarTodayLabel: 'Present'
            }
        },
        {
            name: 'endDate',
            title: 'End Date',
            type: 'date',
            options: {
                dateFormat: 'YYYY-MM',
                calendarTodayLabel: 'Present'
            }
        },
        {
            name: 'points',
            title: 'Points',
            type: 'array',
            of:[{ type: 'points'}]
        }
    ]
}
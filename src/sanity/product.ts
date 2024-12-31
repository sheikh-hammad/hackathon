import {
    defineType,
    defineField
} from "sanity";

export const product = defineType({
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
    
        defineField({
            name: 'name',
            type: 'string',
            title: 'Name'
        }),
        defineField({
            name: 'desc',
            type: 'string',
            title: 'Description'
        }),
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image'
        }), defineField({
            name: 'price',
            type: 'string',
            title: 'Price'
        }), defineField({
            name: 'tag',
            type: 'string',
            title: 'Tag'
        }),defineField({
            name: 'discountedPrice',
            type: 'string',
            title: 'Discounted Price'
        })
    ]
})
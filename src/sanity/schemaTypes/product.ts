import { kMaxLength } from "buffer"
import { defineType } from "sanity"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            validation: (rule) => rule.required(),
            type: "string",
        },
       {
          name: "slug",
          title: "slug",
          type: "slug",
          options :{
               source : "title",
               MaxLength : 200,
          }
       },

        {
            name:"description",
            type:"text",
            validation: (rule) => rule.required(),
            title:"Description",
        },
        {
            name: "productImage",
            type: "image",
            validation: (rule) => rule.required(),
            title: "Product Image"
        },
        {
            name: "price",
            type: "number",
            validation: (rule) => rule.required(),
            title: "Price",
        },
        {
            name: "tags",
            type: "array",
            title: "Tags",
            of: [{ type: "string" }]
        },
        {
            name:"dicountPercentage",
            type:"number",
            title:"Discount Percentage",
        },
       // {
// name: "Inventory",
// type: "Inventory",
// title: "number",
//         },
        {
            name:"isNew",
            type:"boolean",
            title:"New Badge",
        }
    ]
})
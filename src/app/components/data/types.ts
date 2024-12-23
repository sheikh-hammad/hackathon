import {
    JSX
} from "react/jsx-runtime";
import {
    CiHeart
} from "react-icons/ci";

import {
    RiDeleteBin6Line
} from "react-icons/ri";

type navLinks = {
    path: string,
    name: string
}

export const Links: navLinks[] = [{
        name: "Home",
        path: "/"
    },
    {
        name: "Shop",
        path: "/shop"
    },
    {
        name: "Products",
        path: "/products"
    },
    {
        name: "Pages",
        path: "/pages"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Contact",
        path: "/contact"
    },
];

type featuresObjects = {
    src: string,
    heading: string
    text: string
}

export const Features: featuresObjects[] = [{
    src: '/asset/Vector (17).png',
    heading: 'High Quality',
    text: 'crafted from top materials'
}, {
    src: '/asset/Vector (15).png',
    heading: 'Warranty Protection',
    text: 'Over 2 years'
}, {
    src: '/asset/Vector (16).png',
    heading: '24 / 7 Support',
    text: 'Dedicated support'
}]

type featuresBlocks = {
    image: string
    blockHeading: string
    text: string
}

export const Blocks: featuresBlocks[] = [{
        image: '/asset/Vector (8).png',
        blockHeading: 'Next day as standard',
        text: 'Order before 3pm and get your order the next day as standard'
    },
    {
        image: '/asset/Vector (9).png',
        blockHeading: 'Made by true artisans',
        text: 'Handmade crafted goods made with real passion and craftmanship'
    },
    {
        image: "/asset/Vector (10).png",
        blockHeading: 'Unbeatable price',
        text: 'For our materials and quality you won’t find better prices anywhere'
    },
    {
        image: "/asset/Vector (11).png",
        blockHeading: "Recycled packaging",
        text: "We use 100% recycled to ensure our footprint is more manageable"
    }
]

type popularProducts = {
    image: string
    mainText: string
    subText: string
}


export const PopProducts: popularProducts[] = [{
        image: '/asset/Photo.png',
        mainText: 'The Dandy chair',
        subText: '$99.00'
    },
    {
        image: '/asset/Photo (1).png',
        mainText: 'The Dandy chair',
        subText: '$99.00'
    }
]

type cartItems = {
    src: string
    subText: string
    name: string
    size: string
    sizeNumber: string
    quantity: string
    quantityNumber: string
    icon1: React.ComponentType
    icon2: React.ComponentType
    price: string
}

export const Cart: cartItems[] = [{
    src: '/asset/Frame.png',
    name: 'Library Stool Chair',
    subText: 'Ashen Slate/Cobalt Bliss',
    size: 'Size',
    sizeNumber: 'L',
    quantity: 'Quantity',
    quantityNumber: '1',
    icon1: CiHeart,
    icon2: RiDeleteBin6Line,
    price: 'MRP: $99'
}, {
    src: '/asset/Frame.png',
    name: 'Library Stool Chair',
    subText: 'Ashen Slate/Cobalt Bliss',
    size: 'Size',
    sizeNumber: 'L',
    quantity: 'Quantity',
    quantityNumber: '1',
    icon1: CiHeart,
    icon2: RiDeleteBin6Line,
    price: 'MRP: $99'

}]

type faqType = {
    ques: string
    icon: string
    ans: string
}

export const Faq: faqType[] = [{
    ques: 'What types of chairs do you offer?',
    icon: '/asset/Plus.png',
    ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'
}, {
    ques: 'What types of chairs do you offer?',
    icon: '/asset/Plus.png',
    ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'
}, {
    ques: 'What types of chairs do you offer?',
    icon: '/asset/Plus.png',
    ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'
}, {
    ques: 'What types of chairs do you offer?',
    icon: '/asset/Plus.png',
    ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'
}, {
    ques: 'What types of chairs do you offer?',
    icon: '/asset/Plus.png',
    ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'
}, {
    ques: 'What types of chairs do you offer?',
    icon: '/asset/Plus.png',
    ans: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?'
}, ]


export type productProps = {
    src: string
    name: string
    price ? : string
    discountedPrice: string
    tag ? : string
    tagClass ? : string
    cartClass ? : string
    priceClass ? : string
    nameClass ? : string
}

export type Product = {
    id: string
    src: string
    name: string
    price: string
    desc: string
}

export const product: Product[] = [{
    id: "1",
    src: "/asset/Image.png",
    name: "Library School Chair",
    price: "$39",
    desc: "Lorem ipsum donor"
}, {
    id: "2",
    src: "/asset/Image.png",
    name: "Library School Chair",
    price: "$39",
    desc: "Lorem ipsum donor"
}, {
    id: "3",
    src: "/asset/Image.png",
    name: "Library School Chair",
    price: "$39",
    desc: "Lorem ipsum donor"
}, ]

export type ProdType = {
    img: string
    name: string
    price: string
}

export const Prod: ProdType[] = [{
        img: "/asset/Image (12).png",
        name: "Library Stool Chair",
        price: "$90"

    }, {
        img: "/asset/Image.png",
        name: "Library Stool Chair",
        price: "$90"

    },
    {
        img: "/asset/Image (17).png",
        name: "Library Stool Chair",
        price: "$90"

    },
    {
        img: "/asset/Image (8).png",
        name: "Library Stool Chair",
        price: "$90"
    }, {
        img: "/asset/Image (14).png",
        name: "Library Stool Chair",
        price: "$90"
    }
]

type LogosType = {
    img: string
    width: number
    height: number
}

export const Logos: LogosType[] = [{
    img: "/asset/Logo (10).png",
    width: 85,
    height: 87
}, {
    img: "/asset/Logo (2).png",
    width: 107,
    height: 109
}, {
    img: "/asset/Logo (3).png",
    width: 135,
    height: 139
}, {
    img: "/asset/Logo (4).png",
    width: 63,
    height: 65
}, {
    img: "/asset/Logo (6).png",
    width: 98,
    height: 101

}, {
    img: "/asset/Logo (9).png",
    width: 113,
    height: 115

}, {
    img: "/asset/Logo (7).png",
    width: 84,
    height: 87

}]
type ImagesType = {
    src: string
}

export const Images: ImagesType[] = [{
        src: "/asset/item-category 1.png"
    },
    {
        src: "/asset/card (2).png"
    },
    {
        src: "/asset/card (3).png"
    },
    {
        src: "/asset/card (4).png"
    }, {
        src: "/asset/card (4).png"
    },
];

type CategoriesType = {
    image: string,
    alt: string,
    desc: string,
    products: string
}

export const categories: CategoriesType[] = [
    {image: "/asset/Image (14).png", alt: "Chair", desc: "Wing Chair", products: "3,584 Products"},
    {image: "/asset/Image (10).png", alt: "Chair", desc: "Wooden Chair", products: "157 Products"},
    {image: "/asset/Image (17).png", alt: "Chair", desc: "Desk Chair", products: "3154 Products"},
]

export type ProductCard = {
    image: string
    alt: string
    desc: string
    products: string
}
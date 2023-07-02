import {
    ImageContainer,
    ProductContainer,
    ProductDetails,
} from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
    const { query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer></ImageContainer>

            <ProductDetails>
                <h1>Camiseta x</h1>
                <span>R$ 79,90</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione, iure quaerat fugit deleniti excepturi eos
                    necessitatibus quae, ea quidem eveniet expedita aliquam
                    voluptate earum eum voluptatum assumenda libero minima
                    consectetur?
                </p>
                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}

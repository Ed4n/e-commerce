import Nav from "@/components/Nav";
import { ShoppingList } from "@/components/shopping-cart/ShoppingList";
import { ShoppingResume } from "@/components/shopping-cart/ShoppingResume";

export default function ShoppingCart() {

    return (
        <main>
            <ShoppingList />
            <ShoppingResume />
            <Nav />
        </main>
    )

}

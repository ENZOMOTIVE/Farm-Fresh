import DefaultNavbar from "../components/layout/DefaultNavbar";
import { Cart } from '../components/features/Cart';
import { useState } from "react";


export default function Profile() {
    const [showCart, setShowCart] = useState(false);

    return (
        <div>
            <DefaultNavbar />


            

            {/**Cart */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">


                {/* Cart Sidebar */}
                <div className={`lg:block ${showCart ? 'block' : 'hidden'} lg:col-span-1`}>
                    <div className="sticky top-24">
                        <Cart />
                    </div>
                </div>
            </div>
        </div>
    )
}
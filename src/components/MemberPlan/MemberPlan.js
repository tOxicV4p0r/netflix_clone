import { useEffect, useState } from "react";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { selectorUser } from "../../features/user/userSlice";
import "./memberplan.css";

function MemberPlan() {
    const [products, setProducts] = useState({});

    // selectorUser.user
    const selectCheckOut = async (priceId) => {

    }

    const getPlan = async () => {
        const arrProduct = {};
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach(async (doc) => {
            arrProduct[doc.id] = doc.data();
            const priceSnap = await getDocs(collection(doc.ref, "prices"));
            priceSnap.forEach((docPrice) => {
                arrProduct[doc.id].price = {
                    priceId: docPrice.id,
                    priceData: docPrice.data()
                }
            });
        });

        setProducts(arrProduct);
        console.log(arrProduct);
    }

    useEffect(() => {
        getPlan()
    }, []);

    return (
        <div className="memberPlan">
            {
                products ?
                    Object.entries(products).map(([id, data]) => {
                        return (
                            <div key={id} className="memberPlan__plan">
                                <div className="memberPlan__info">
                                    <div>{data.name}</div>
                                    <div>{data.description}</div>
                                </div>
                                <button onClick={() => selectCheckOut(data.price.priceId)}>Subscribe</button>
                            </div>
                        )
                    })
                    : null
            }
        </div>
    )
};

export default MemberPlan;
import React, { useState } from "react";

import { View, Text, FlatList, ListRenderItem } from "react-native";
import ProductComponent, { IProduct } from "../Components/ProductComponent";

const EcommerceScreen = () =>{
    const products:IProduct[] = [
        {
            image :" ../../assets\public\icons\tide.png",
            name: "Tide Powder",
            description: "Washing powder",
            weight:"800gm",       
            id: 1
        },
        {
            image : "../../assets\public\icons\onion.png",
            name: "Onion",
            description: "Daily needs",
            weight:"1 kg",
            id: 2
        },
        {
            image : "../../assets\public\icons\milk.png",
            name: "Milk Vita",
            description: "Dairy Product",
            weight:"1 litre",
            id: 3
        },
        {
            image : "../../assets\public\icons\amul.png",
            name: "Amul Butter",
            description: "Dairy Product",
            weight:"500gm",
            id: 4
        }



    ]

return(
        <View>
            <Text>Ecommerce</Text>
            {products.map((product)=> (
                <ProductComponent name={product.name} id={product.id} key={product.id} description={product.description} weight={product.weight} image={product.image}/>
            ))}
        </View>
    )
}


export default EcommerceScreen;
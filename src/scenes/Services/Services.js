import React, {useState} from 'react';
import washer2 from '../../assets/img/washer2.png';
import fridge from '../../assets/img/fridge.png';
import dishwasher2 from '../../assets/img/dishwasher2.png';
import oven from '../../assets/img/oven.png';
import airCondition from '../../assets/img/airCondition.jpg';
import calorifere from '../../assets/img/calorifere.jpg';
import servicesPoster from '../../assets/img/sevicesPoster.jpg';
import {Helmet} from "react-helmet";

const Services = () => {

    const [shownProduct, setShownProduct] = useState(0);
    const products = [
        {
            id: 0,
            name: "Buzdolabı",
            description: "Kar Teknik Buzdolabı Servisi yetkililerimiz tüm markaların garantili ve orijinal yedek parçalı servis işlemini sağlıyor.",
            posterPath: {fridge}
        },
        {
            id: 1,
            name: "Çamaşır Makinesi",
            description: "Kar Teknik Çamaşır Makinesi Servisi yetkililerimiz tüm markaların garantili ve orijinal yedek parçalı servis işlemini sağlıyor.",
            posterPath: {washer2}
        },
        {
            id: 2,
            name: "Bulaşık Makinesi",
            description: "Kar Teknik Bulaşık Makinesi Servisi yetkililerimiz tüm markaların garantili ve orijinal yedek parçalı servis işlemini sağlıyor.",
            posterPath: {dishwasher2}
        },
        {
            id: 3,
            name: "Fırın",
            description: "Kar Teknik Fırın Servisi yetkililerimiz tüm markaların garantili ve orijinal yedek parçalı servis işlemini sağlıyor.",
            posterPath: {oven}
        },
        {
            id: 4,
            name: "Klima",
            description: "Kar Teknik Klima Servisi yetkililerimiz tüm markaların garantili ve orijinal yedek parçalı servis işlemini sağlıyor.",
            posterPath: {airCondition}
        },
        {
            id: 5,
            name: "Petek Temizleme",
            description: "Kar Teknik Petek Temizleme Servisi yetkililerimiz profesyonel cihazlar ile ev ve ofisinizde ki peteklerinizin temizleme servis işlemini sağlıyor. ",
            posterPath: {calorifere}
        },

    ]

const handleClick = (id) => {
    setShownProduct(id);
}
    return(
        <section className="text-white body-font">
            <Helmet>
                <meta name="description" content="Markalar, Arcelik, Beko, Bosch, Siemens, Altus,
                Samsung tüm markalara teknik servis destegi vermekteyiz." />

                <meta name="keywords" content="AEG,Altus,Arcelik,Ariston,
                Arnica,Beko,Bosch,Electrolux,Fakir,Grundig,
                Hoower,Hotpoint Ariston,Indesit,LG,Profilo,Regal,
                Samsung,Siemens,Simfer,Ugur,Vestel,Whirlpool"/>
            </Helmet>
            <div className=" mx-auto flex flex-wrap flex-col">
                <div className="h-64 w-full left-0 -z-9999">
                    <img
                        className="object-cover object-center w-full h-full"
                        src={servicesPoster}
                    />
                </div>
                <div className="absolute text-5xl justify-center w-full mx-auto font-bold md:text-white text-red-600 z-10 pt-8">
                    <span className="flex justify-center w-full">Servisler</span>
                </div>
                <div className="flex mx-auto flex-wrap cursor-pointer -mt-24 mb-16">
                    {products.map((product, i) =>
                        <div onClick={() => handleClick(product.id)} key={i}
                            className={product.id === shownProduct ? "sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-red-600 text-red-600 tracking-wider"
                            :
                                "sm:px-6 py-3 w-1/2 sm:w-auto justify-center text-red-600 md:text-white sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:bg-gray-100 hover:border-red-600 hover:text-red-600 tracking-wider"}
                        >
                            {product.name}
                        </div>
                    )}
                </div>
                <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" style={{height:400}} alt="hero"
                     src={shownProduct === 0 ? fridge
                         : shownProduct === 1 ? washer2
                             : shownProduct === 2 ? dishwasher2
                                 : shownProduct === 3 ? oven
                                     : shownProduct === 4 ? airCondition :
                                         calorifere } />
                <div className="flex flex-col text-center w-full">
                    <h1 className="text-xl font-medium title-font mb-4 text-gray-900">{products[shownProduct].name} Bakım-Onarım Servisi</h1>
                    <p className="lg:w-2/3 mx-auto text-gray-700 leading-relaxed text-base">{products[shownProduct].description}</p>
                </div>
            </div>
        </section>
    )
}

export default Services;
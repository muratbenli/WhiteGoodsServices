import React from 'react';
import coverPhoto from '../../assets/img/cover.png';
import arcelikLogo from '../../assets/img/arceliklogo.jpg';
import whiteGoods1 from '../../assets/img/whitegoods1.jpg';
import dishWasher from '../../assets/img/dishwasher.jpg';
import posterWithRepairman from '../../assets/img/posterwithrepairman.jpg';
import boiler from '../../assets/img/boiler.jpg';
import washer from '../../assets/img/washer.png';
import {Helmet} from "react-helmet";

const Home = () => {
    const districts = [
        "Akyurt",
        "Altındağ",
        "Ayaş",
        "Balâ",
        "Beypazarı",
        "Çamlıdere",
        "Çankaya",
        "Çubuk",
        "Elmadağ",
        "Etimesgut",
        "Evren",
        "Gölbaşı",
        "Güdül",
        "Haymana",
        "Kalecik",
        "Kahraman Kazan",
        "Keçiören",
        "Kızılcahamam",
        "Mamak",
        "Nallıhan",
        "Polatlı",
        "Pursaklar",
        "Sincan",
        "Şereflikoçhisar",
        "Yenimahalle"];

    const brands = [
        "AEG",
        "Altus",
        "Arçelik",
        "Ariston",
        "Arnica",
        "Beko",
        "Bosch",
        "Electrolux",
        "Fakir",
        "Grundig",
        "Hoower",
        "Hotpoint Ariston",
        "Indesit",
        "LG",
        "Profilo",
        "Regal",
        "Samsung",
        "Siemens",
        "Simfer",
        "Uğur",
        "Vestel",
        "Whirlpool"
    ];

    return (
        <div className="w-full">
            <Helmet>
                <meta name="description" content="Servisler, Ankara ve tüm ilçelerine Teknik Servis desteği vermekteyiz. Sincan, Etimesgut, Eryaman Teknik Servis." />

                <meta name="keywords" content="Altindag Servisi, Ayas Servisi, Cankaya Servisi, Cubuk Servisi, Elmadag Servisi,
                 Etimesgut Servisi, Evren Servisi, Golbasi Servisi, Kahraman Kazan Servisi,
                 Kecioren Servisi, Kzlcahamam Servisi, Mamak Servisi, Polatl Servisi, Pursaklar Servisi,
                 Sincan Servisi, Yenimahalle Servisi"/>
            </Helmet>
            <div className="flex bg-white" style={{height: '650px'}}>
                <div className="flex items-center text-center  lg:text-left px-8 md:px-12 lg:w-1/2">
                    <div>
                        <h2 className="font-bold text-gray-800 mb-8 text-6xl">Kar Teknik Servis</h2>
                        <span
                            className="text-red-600 font-semibold text-4xl">Profesyonel Beyaz Eşya Bakım-Onarım </span>
                        <p className="mt-2 text-xl text-gray-700 md:text-base">
                            Beyaz eşya servisi, Kar Teknik Güvencesi İle Beyaz Eşyalarınıza, Ankastrelerinize,
                            Klimalarınıza Ve Kalorifer Peteklerinize Servis Hizmeti Vermekteyiz. Cihazlarınızda Oluşan
                            Herhangi Bir Nedenden Dolayı Çağrı Merkezimizi Arayarak Servisimize Ulaşabilirsiniz. Servis
                            Noktası, Doğruluğuyla , Tüm Orjinal Ve Yedek Parçalar Ekonomik Fiyatlara Bulunmaktadır.
                            Alanında Deneyimli Ekip Ve Profesyonel Kadromuzla Ankara Geneline Bakım, Onarım, Arıza,
                            Tamir Ve Teknik Servis Hizmeti Sunmaktayız.
                        </p>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2"
                     style={{clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)'}}>
                    <div
                        className="h-full object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                        style={{backgroundImage: `url(${coverPhoto})`}}>
                        <div className="h-full bg-black opacity-25"/>
                    </div>
                </div>
            </div>
            <div className="bg-red-700 w-full items-center flex h-64 text-center">
                <div
                    className="flex mx-auto font-bold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125">
                    <svg className="w-24 h-24 text-white" viewBox="0 0 16 16" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                        <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
                    <span className="text-6xl text-white mx-auto">Telefon: 0312 272 60 36</span>
                </div>
            </div>

            <section className="text-gray-700 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Beyaz
                            Eşya Servis Bölgelerimiz</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            {districts.map((district, i) => <span key={i}>{district} Servisi, </span>)} Ankaranın tüm bölgelerine
                            geniş servis ağımız ile hizmet vermekteyiz.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block"
                                     src={arcelikLogo}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block"
                                     src={whiteGoods1}/>
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full object-cover h-full object-center block"
                                     src={dishWasher}/>
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img alt="gallery" className="w-full h-full object-cover object-center block"
                                     src={posterWithRepairman}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full object-cover h-full object-center block"
                                     src={boiler}/>
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img alt="gallery" className="w-full h-full object-cover object-center block"
                                     src={washer}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mb-20 mt-12 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Hizmet
                            Verdiğimiz Marka Servisleri</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            {brands.map((brand,i) => <span key={i}>{brand} Servisi, </span>)} geniş marka yelpazemiz ve uzman
                            ekiplerimiz ile hizmet vermekteyiz.
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Home;
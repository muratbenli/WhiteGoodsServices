import React from 'react';
import {Helmet} from "react-helmet";

const Contact = () => {
    return(
        <div className="text-gray-700 body-font relative min-h-screen">
            <Helmet>
                <meta name="description" content="İletisim , Telefon 0312 272 60 36 , Adres Plevne Mahallesi, Pazar Sokak 61/b, 06710 Sincan/Ankara " />

                <meta name="keywords" content="adres, iletisim, telefon, harita, yol tarifi , cep"/>
            </Helmet>
            <div className="absolute inset-0 bg-gray-300">
                <iframe className="w-full h-screen" frameBorder={0} marginHeight={0} marginWidth={0} title="map" 
                scrolling="no" 
                src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=ARÇELİK+BEKO+KAR+TEKNİK+SERVİS+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
                style={{filter: 'grayscale(0) contrast(1.2) opacity(0.8)'}} />
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-gray-200 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-lg mb-1 flex font-medium title-font">
                        <svg className="mt-1 w-6 text-red-600 h-6" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                        </svg>
                        <span className="ml-2 text-2xl">Adress</span>
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Plevne Mahallesi, Pazar Sokak 61/b, 06710 Sincan/Ankara</p>
                    <h2 className="text-gray-900 text-lg mb-1 flex font-medium title-font">
                        <svg className="mt-1 w-6 text-red-600 h-6" viewBox="0 0 16 16" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M11 1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path fillRule="evenodd" d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg>
                        <span className="ml-2 text-2xl">Telefon</span>
                    </h2>
                    <p className="leading-relaxed  text-gray-600">Cep: 0552 246 0636</p>
                    <p className="leading-relaxed mb-5 text-gray-600">Ofis: 0312 272 60 36</p>
                    <h2 className="text-gray-900 text-lg mb-1 flex font-medium title-font">
                        <div className=" text-2xl text-red-600">@</div>
                        <span className="ml-2 text-2xl">E-posta</span>
                    </h2>
                    <p className="leading-relaxed mb-5 text-gray-600">karteknik.0636@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
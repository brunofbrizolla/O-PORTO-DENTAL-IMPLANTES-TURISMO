import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import { fireGoogleAdsTag } from '../utils/googleAds';

const Obrigado = () => {
    useEffect(() => {
        fireGoogleAdsTag('form');
    }, []);

    return (
        <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-16">
            <div className="max-w-md w-full bg-white p-8 rounded-[2.5rem] shadow-xl text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-primary mb-4">Obrigado!</h1>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    A sua mensagem foi enviada com sucesso. A nossa equipa entrará em contacto consigo o mais brevemente possível.
                </p>
                <Link 
                    to="/"
                    className="inline-block w-full bg-accent hover:bg-primary text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-lg hover:shadow-xl"
                >
                    Voltar à Página Inicial
                </Link>
            </div>
        </div>
    );
};

export default Obrigado;

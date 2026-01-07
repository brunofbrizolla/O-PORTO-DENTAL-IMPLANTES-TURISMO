import React from 'react';
import { useTranslation } from 'react-i18next';

const Branqueamento = () => {
    return (
        <div className="pt-20">
            <div className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 overflow-hidden">
                    <img src="/assets/images/teeth_whitening_happy_patient.png" className="w-full h-full object-cover" alt="Sorriso Branco" />
                    <div className="absolute inset-0 bg-primary/40"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-6xl font-bold font-serif mb-4 drop-shadow-md">Branqueamento Dental</h1>
                    <p className="text-2xl font-light">Ilumine o seu sorriso com segurança e resultados visíveis.</p>
                </div>
            </div>
        </div>
    );
};

export default Branqueamento;

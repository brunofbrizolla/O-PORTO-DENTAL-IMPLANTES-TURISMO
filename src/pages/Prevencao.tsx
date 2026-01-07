import React from 'react';

const Prevencao = () => {
    return (
        <div className="pt-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <h1 className="text-4xl font-bold text-primary mb-8 text-center font-serif">Prevenção e Manutenção</h1>
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <img src="/assets/images/dental_prevention_hygiene_tools.png" className="rounded-lg shadow-lg w-full" alt="Prevenção" />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-lg text-gray-600 mb-6">
                            A chave para um sorriso saudável a longo prazo é a prevenção. As nossas consultas de higiene oral e manutenção são desenhadas para detetar problemas precocemente e garantir a longevidade dos seus tratamentos.
                        </p>
                        <div className="bg-primary-light p-6 rounded-lg border-l-4 border-primary">
                            <h3 className="font-bold text-primary mb-2">A nossa abordagem inclui:</h3>
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                <li>Avaliação completa da saúde gengival</li>
                                <li>Limpeza profissional com ultrassons e jato</li>
                                <li>Rastreio de cáries e patologias orais</li>
                                <li>Aconselhamento personalizado de higiene</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prevencao;

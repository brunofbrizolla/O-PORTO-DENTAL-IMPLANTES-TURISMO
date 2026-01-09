import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const LocationSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left: Map */}
                    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl relative order-2 md:order-1 border-4 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5101.145748172643!2d-8.630068056948536!3d41.15418929665418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24639b2b03f701%3A0xea0f51d90e2a8d61!2sDra%20K%C3%A1tia%20Fragoso%20-%20KAVI%20Art%20Clinic!5e0!3m2!1spt-BR!2sbr!4v1767838347563!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                        ></iframe>
                    </div>

                    {/* Right: Contact Info */}
                    <div className="order-1 md:order-2 space-y-8 animate-slideIn">
                        <div>
                            <span className="text-accent font-bold tracking-[0.2em] uppercase mb-4 block">Localização</span>
                            <h2 className="text-4xl font-bold text-primary mb-6 font-serif">
                                Onde Estamos
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Visite a nossa clínica no coração do Porto. Um espaço moderno, acolhedor e preparado para cuidar do seu sorriso.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Endereço</h3>
                                    <p className="text-gray-600">Rua Arquitecto Marques da Silva, 285<br />4150-484 Porto, Portugal</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Telefone</h3>
                                    <a href="tel:+351912092209" className="text-gray-600 hover:text-primary transition-colors">+351 912 092 209</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                                    <a href="mailto:contacto@portoimplantes.pt" className="text-gray-600 hover:text-primary transition-colors">contacto@portoimplantes.pt</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <a
                                href="#contact"
                                className="inline-flex items-center px-8 py-4 bg-accent text-white rounded-full font-bold text-lg shadow-lg hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
                            >
                                <Calendar className="mr-3 w-5 h-5" />
                                Agendar Consulta Agora
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocationSection;

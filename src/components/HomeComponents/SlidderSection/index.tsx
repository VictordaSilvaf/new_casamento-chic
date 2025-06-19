'use client'

import Subtitle from "@/components/Subtitle"
import Text from "@/components/Text"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"

const slides = [
    {
        image: "https://images.unsplash.com/photo-1745503288223-47645e960468?q=80&w=1974&auto=format&fit=crop",
        title: "CASAMENTOS INESQUECÍVEIS",
        description: "Transformamos sonhos em realidade com nossa experiência em planejamento de casamentos únicos e memoráveis."
    },
    {
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
        title: "MOMENTOS ESPECIAIS",
        description: "Cada detalhe é cuidadosamente planejado para criar memórias que durarão para sempre."
    },
    {
        image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop",
        title: "CELEBRANDO O AMOR",
        description: "Especialistas em criar celebrações únicas que refletem a personalidade de cada casal."
    }
]

const SlidderSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-10 mt-14">
            <div data-aos="fade-right" className="col-span-4 relative overflow-hidden">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {slides.map((slide, index) => (
                            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                                <img
                                    className="object-cover w-full h-[450px]"
                                    src={slide.image}
                                    alt={slide.title}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Controles do carrossel */}
                <button
                    onClick={scrollPrev}
                    className="absolute left-4 top-1/2 pr-0.5 -translate-y-1/2 flex justify-center items-center bg-black/50 hover:bg-black/80 text-app-primary size-10 rounded-full transition-colors"
                >
                    <ChevronLeftIcon className="size-6" />
                </button>
                <button
                    onClick={scrollNext}
                    className="absolute right-4 top-1/2 pl-0.5 -translate-y-1/2 flex justify-center items-center bg-black/50 hover:bg-black/80 text-app-primary size-10 rounded-full transition-colors"
                >
                    <ChevronRightIcon className="size-6" />
                </button>
            </div>
            <div
                data-aos="fade-left"
                className="flex flex-col bg-gray-100 col-span-6 px-11 py-10 justify-between"
            >
                <div className="">
                    <Subtitle className="mb-[25px]" text="CASAMENTOS ÚNICOS" />
                    <Text
                        className="w-full max-w-2xl"
                        text="Criamos experiências únicas e memoráveis para o seu dia especial. Nossa equipe está comprometida em tornar seu casamento exatamente como você sempre sonhou."
                    />
                </div>

                <div className="">
                    <Subtitle className="mb-[25px]" text="PLANEJAMENTO COMPLETO" />
                    <Text
                        className="w-full max-w-2xl"
                        text="Do início ao fim, cuidamos de cada detalhe do seu casamento. Desde a escolha do local até a decoração, música e buffet, tudo é personalizado de acordo com seu estilo."
                    />
                </div>

                <div className="">
                    <Subtitle className="mb-[25px]" text="MOMENTOS INESQUECÍVEIS" />
                    <Text
                        className="w-full max-w-2xl"
                        text="Nosso objetivo é criar momentos mágicos que ficarão guardados para sempre na memória. Cada casamento é único e merece uma celebração especial."
                    />
                </div>
            </div>
        </div>
    )
}

export default SlidderSection
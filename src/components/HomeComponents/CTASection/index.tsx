import { Parallax } from "react-parallax"

const CTASection = () => {
    return (
        <Parallax
            blur={0}
            bgImage="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop"
            bgImageAlt="Casamento"
            strength={700}
            className="w-full relative"
            bgImageStyle={{
                objectFit: 'cover',
                filter: 'brightness(0.3)'
            }}
        >
            <div className="h-[50vh] w-full flex items-center relative">
                <div className="absolute inset-0 w-full bg-linear-to-r from-black/50 to-transparent"></div>
                <div className="max-w-5xl w-full mx-auto px-4 relative">
                    <div className="flex flex-col items-start gap-4">
                        {/* <h2 className="text-xl font-bold text-app-typography-secondary">Casamentos no Instagram</h2>
                        <p className="text-sm text-app-typography-secondary/75 max-w-2xl">
                            Tudo sobre casamento em uma só pagina.
                        </p> */}
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default CTASection
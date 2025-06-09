import { Button } from '@/components/ui/button'
import { Parallax } from 'react-parallax'

const PartnersSection = () => {
    return (
        <Parallax
            blur={0}
            bgImage="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?q=80&w=2070&auto=format&fit=crop"
            bgImageAlt="Casamento"
            strength={700}
            className="w-full relative"
            bgImageStyle={{
                objectFit: 'cover',
                filter: 'brightness(0.3)'
            }}
        >
            <div className="min-h-[50vh] py-10 w-full flex items-center">
                <div className="absolute inset-0 w-full bg-linear-to-r from-black/50 to-transparent"></div>
                <div className="max-w-5xl w-full mx-auto px-4 relative">
                    <div className="flex flex-col items-start gap-4">
                        <form action="#" method="POST" className="justify-center items-center flex">
                            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="first-name" className="block text-xs/6 font-semibold text-white">
                                            Nome
                                        </label>
                                        <div className="mt-1.5">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                autoComplete="given-name"
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="last-name" className="block text-xs/6 font-semibold text-white">
                                            Sobrenome
                                        </label>
                                        <div className="mt-1.5">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                autoComplete="family-name"
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="email" className="block text-xs/6 font-semibold text-white">
                                            Email
                                        </label>
                                        <div className="mt-1.5">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="phone-number" className="block text-xs/6 font-semibold text-white">
                                            Telefone
                                        </label>
                                        <div className="mt-1.5">
                                            <input
                                                id="phone-number"
                                                name="phone-number"
                                                type="tel"
                                                autoComplete="tel"
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                            />
                                        </div>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block text-xs/6 font-semibold text-white">
                                            Nos conte um pouco do seu sonho
                                        </label>
                                        <div className="mt-1.5">
                                            <textarea
                                                id="message"
                                                name="message"
                                                rows={4}
                                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                                                defaultValue={''}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 flex justify-center">
                                    <Button size="2xl" className="text-md uppercase">
                                        Enviar mensagem
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Parallax>
    )
}

export default PartnersSection
import { navigation } from "@/data/data"

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
                <nav aria-label="Footer" className="-mb-6 flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-3 text-sm/6">
                    {navigation.main.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 hover:text-app-primary duration-300">
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="mt-16 flex justify-center gap-x-5 sm:gap-x-10">
                    {navigation.social.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-600 hover:text-app-primary duration-300">
                            <span className="sr-only">{item.name}</span>
                            <item.icon aria-hidden="true" className="size-6" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-sm/6 text-gray-600">&copy; {new Date().getFullYear()} Casamento Chic Pagando Pouco. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer
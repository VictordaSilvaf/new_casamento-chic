
// import Container from "@/components/Container";
// import { Button } from "@/components/ui/button";
// import { BuildingIcon, MailIcon, PhoneIcon } from "lucide-react";
// import { useState } from "react";

// const InfoSection = () => {
//   const [name, setName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [messageText, setMessageText] = useState<string>("");


// const InfoSection = () => {
//     return (
//         <div className="relative isolate bg-white">
//             <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2">
//                 <div className="relative pr-6 pt-24 pb-20 sm:pt-32 lg:static lg:pr-8 lg:py-48">
//                     <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//                         <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
//                             <div className="absolute inset-0 bg-black/70 z-10" />
//                             <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop" alt="Casal de noivos se beijando em um campo ao pôr do sol" className="w-full h-full object-cover" />
//                         </div>
//                         <h2 className="text-xl font-semibold tracking-tight text-pretty text-app-primary sm:text-5xl">
//                             Entre em Contato
//                         </h2>
//                         <p className="mt-6 text-xs text-white">
//                             Estamos aqui para tornar seu sonho realidade. Entre em contato conosco para discutir seu casamento dos sonhos e descobrir como podemos criar memórias inesquecíveis juntos. Nossa equipe está pronta para ouvir suas ideias e transformá-las em momentos mágicos.
//                         </p>
//                         <dl className="mt-10 space-y-4 text-base/7 text-white">
//                             <div className="flex gap-x-4 text-xs">
//                                 <dt className="flex-none">
//                                     <span className="sr-only">Address</span>
//                                     <BuildingIcon aria-hidden="true" size={16} />
//                                 </dt>
//                                 <dd>
//                                     545 Mavis Island
//                                     <br />
//                                     Chicago, IL 99191
//                                 </dd>
//                             </div>
//                             <div className="flex gap-x-4 text-xs group">
//                                 <dt className="flex-none">
//                                     <span className="sr-only">Telephone</span>
//                                     <PhoneIcon aria-hidden="true" size={16} className="group-hover:text-app-primary duration-300" />
//                                 </dt>
//                                 <dd>
//                                     <a href="tel:+1 (555) 234-5678" className="group-hover:text-app-primary duration-300">
//                                         +1 (555) 234-5678
//                                     </a>
//                                 </dd>
//                             </div>
//                             <div className="flex gap-x-4 text-xs group">
//                                 <dt className="flex-none">
//                                     <span className="sr-only">Email</span>
//                                     <MailIcon aria-hidden="true" size={16} className="group-hover:text-app-primary duration-300" />
//                                 </dt>
//                                 <dd>
//                                     <a href="mailto:hello@example.com" className="group-hover:text-app-primary duration-300">
//                                         hello@example.com
//                                     </a>
//                                 </dd>
//                             </div>
//                         </dl>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
// >>>>>>> cf13d21 (feat: enhance Home page layout and components)

//   return (
//     <div id="contact" className="relative isolate bg-white">
//       <div className="mx-auto grid max-w-5xl grid-cols-1 lg:grid-cols-2">
//         <div className="relative pr-6 pt-24 pb-20 sm:pt-32 lg:static lg:pr-8 lg:py-48">
//           <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
//             <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
//               <div className="absolute inset-0 bg-black/70 z-10" />
//               <img
//                 src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
//                 alt="Casal de noivos se beijando em um campo ao pôr do sol"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <Container>
//               <h2 className="text-xl font-semibold tracking-tight text-pretty text-app-primary sm:text-5xl">
//                 Entre em Contato
//               </h2>
//               <p className="mt-6 text-xs text-white">
//                 Estamos aqui para tornar seu sonho realidade. Entre em contato
//                 conosco para discutir seu casamento dos sonhos e descobrir como
//                 podemos criar memórias inesquecíveis juntos. Nossa equipe está
//                 pronta para ouvir suas ideias e transformá-las em momentos
//                 mágicos.
//               </p>
//               <dl className="mt-10 space-y-4 text-base/7 text-white">
//                 <div className="flex gap-x-4 text-xs">
//                   <dt className="flex-none">
//                     <span className="sr-only">Address</span>
//                     <BuildingIcon aria-hidden="true" size={16} />
//                   </dt>
//                   <dd>
//                     545 Mavis Island
//                     <br />
//                     Chicago, IL 99191
//                   </dd>
//                 </div>
//                 <div className="flex gap-x-4 text-xs group">
//                   <dt className="flex-none">
//                     <span className="sr-only">Telephone</span>
//                     <PhoneIcon
//                       aria-hidden="true"
//                       size={16}
//                       className="group-hover:text-app-primary duration-300"
//                     />
//                   </dt>
//                   <dd>
//                     <a
//                       href="tel:+1 (555) 234-5678"
//                       className="group-hover:text-app-primary duration-300"
//                     >
//                       +1 (555) 234-5678
//                     </a>
//                   </dd>
//                 </div>
//                 <div className="flex gap-x-4 text-xs group">
//                   <dt className="flex-none">
//                     <span className="sr-only">Email</span>
//                     <MailIcon
//                       aria-hidden="true"
//                       size={16}
//                       className="group-hover:text-app-primary duration-300"
//                     />
//                   </dt>
//                   <dd>
//                     <a
//                       href="mailto:hello@example.com"
//                       className="group-hover:text-app-primary duration-300"
//                     >
//                       hello@example.com
//                     </a>
//                   </dd>
//                 </div>
//               </dl>
//             </Container>
//           </div>
//         </div>
//         <form action="#" method="POST" className="w-full ml-0 sm:ml-5  mt-5">
//           <Container>
//             <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
//               <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//                 <div>
//                   <label
//                     htmlFor="first-name"
//                     className="block text-xs/6 font-semibold text-gray-900"
//                   >
//                     Nome
//                   </label>
//                   <div className="mt-1.5">
//                     <input
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       id="first-name"
//                       name="first-name"
//                       type="text"
//                       autoComplete="given-name"
//                       className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="last-name"
//                     className="block text-xs/6 font-semibold text-gray-900"
//                   >
//                     Sobrenome
//                   </label>
//                   <div className="mt-1.5">
//                     <input
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                       id="last-name"
//                       name="last-name"
//                       type="text"
//                       autoComplete="family-name"
//                       className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="email"
//                     className="block text-xs/6 font-semibold text-gray-900"
//                   >
//                     Email
//                   </label>
//                   <div className="mt-1.5">
//                     <input
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="phone-number"
//                     className="block text-xs/6 font-semibold text-gray-900"
//                   >
//                     Telefone
//                   </label>
//                   <div className="mt-1.5">
//                     <input
//                       value={phone}
//                       onChange={(e) => setPhone(e.target.value)}
//                       id="phone-number"
//                       name="phone-number"
//                       type="tel"
//                       autoComplete="tel"
//                       className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                       // placeholder="(99) 99999-9999"
//                     />
//                   </div>
//                 </div>
//                 <div className="sm:col-span-2">
//                   <label
//                     htmlFor="message"
//                     className="block text-xs/6 font-semibold text-gray-900"
//                   >
//                     Nos conte um pouco do seu sonho
//                   </label>
//                   <div className="mt-1.5">
//                     <textarea
//                       value={messageText}
//                       onChange={(e) => setMessageText(e.target.value)}
//                       id="message"
//                       name="message"
//                       rows={4}
//                       className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
//                       defaultValue={""}
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 flex justify-end">
//                 <Button>Enviar mensagem</Button>
//               </div>
//             </div>
//           </Container>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default InfoSection;

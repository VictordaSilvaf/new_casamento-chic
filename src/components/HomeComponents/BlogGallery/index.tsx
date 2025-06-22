"use client";

import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Fragment, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Container from "@/components/Container";
import Image from "next/image";
import ImgAll1 from "../../../../public/imagens/img-all-1.jpg";
import ImgAll2 from "../../../../public/imagens/img-all-2.jpg";
import ImgAll3 from "../../../../public/imagens/img-all-3.jpg";
import ImgAll4 from "../../../../public/imagens/img-all-4.png";
import ImgAll5 from "../../../../public/imagens/img-all-5.jpg";
import ImgAll6 from "../../../../public/imagens/img-all-6.jpg";
import ImgAll7 from "../../../../public/imagens/img-all-7.jpg";
import ImgAll8 from "../../../../public/imagens/img-all-8.jpg";
import ImgAll9 from "../../../../public/imagens/img-all-9.jpg";
import ImgAll10 from "../../../../public/imagens/img-all-10.jpg";
import ImgAll11 from "../../../../public/imagens/img-all-11.jpg";
import ImgAll12 from "../../../../public/imagens/img-all-12.jpg";
import ImgAll13 from "../../../../public/imagens/img-all-13.jpg";
import ImgAll14 from "../../../../public/imagens/img-all-14.jpeg";
import ImgAll15 from "../../../../public/imagens/img-all-15.jpg";
import ImgAll16 from "../../../../public/imagens/img-all-16.jpg";
import ImgArranjo from "../../../../public/imagens/MESA-POSTA-MINI-WEDDING.jpg";
import ImgArranjoSimples from "../../../../public/imagens/ARRANJO-SIMPLES-E-BONITO.jpg";
import ImgMesaPosta from "../../../../public/imagens/MESA-POSTA-SIMPLES.jpg";
import ImgArranjo2 from "../../../../public/imagens/ARRANJO.jpg";
import ImgBeatriz1 from "../../../../public/imagens/beatrice19.jpg";
import ImgBeatriz2 from "../../../../public/imagens/beatrice2.jpg";
import ImgBeatriz3 from "../../../../public/imagens/vestido-da-Princesa-Beatriz-com-foto-da-avo-a-rainha.jpg";
import ImgDoces1 from "../../../../public/imagens/doces1.jpg";
import ImgDoces2 from "../../../../public/imagens/MESA-DE-DOCES1.jpg";
import ImgDoces3 from "../../../../public/imagens/MESA-DE-DOCES2-LINDA.jpg";
import ImgDrink1 from "../../../../public/imagens/ARVORE-NO-BAR.jpg";
import ImgDrink2 from "../../../../public/imagens/MOSCOW-MULE.jpg";
import ImgDrink3 from "../../../../public/imagens/BRINDE-COM-ESPUMANTE-scaled.jpg";
import ImgBoquet1 from "../../../../public/imagens/boque-1.jpg";
import ImgBoquet2 from "../../../../public/imagens/TIPOS-DE-BOUQUET-3.png";
import ImgBoquet3 from "../../../../public/imagens/BOUQUET-DE-LIRIOS-BRANCOS.jpg";
import ImgVestido1 from "../../../../public/imagens/vestido1.jpeg";
import ImgVestido2 from "../../../../public/imagens/vestido2.jpeg";
import ImgVestido3 from "../../../../public/imagens/vestido3.jpeg";
import ImgCabelo1 from "../../../../public/imagens/MEL-PRESO.jpg";
import ImgCabelo2 from "../../../../public/imagens/CASTANHO-PARTIDO-AO-MEIO.jpg";
import ImgCabelo3 from "../../../../public/imagens/LOIRA-CABELO-PRESO-LINDO.jpg";
import ImgAlianca1 from "../../../../public/imagens/COMO-USAR-A-ALIANCA.jpg";
import ImgAlianca2 from "../../../../public/imagens/MATERIAIS-DE-ALIANCAS.jpg";
import ImgAlianca3 from "../../../../public/imagens/QUAL-A-MAO-DA-ALIANCA.jpg";
import ImgMadrinhas1 from "../../../../public/imagens/madrinhas1.jpeg";
import ImgMadrinhas2 from "../../../../public/imagens/MADRINHAS2.jpg";
import ImgMadrinhas3 from "../../../../public/imagens/NOIVA-MADRINHAS-BLACKS.jpg";
import ImgMesa1 from "../../../../public/imagens/MESA-POSTA-DECOR1.jpg";
import ImgMesa2 from "../../../../public/imagens/MESA-POSTA-DECOR2.jpg";
import ImgMesa3 from "../../../../public/imagens/MESA-POSTA-DECOR3-SIMPLES.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const posts = [
  {
    id: 1,
    image: ImgAll1,
    title: "História do Casamento",
    categorySlug: "casamentos",
  },
  {
    id: 2,
    image: ImgAll2,
    title: "Casamento cristão",
    categorySlug: "eventos",
  },
  {
    id: 3,
    image: ImgAll3,
    title: "Mini wedding",
    categorySlug: "debutantes",
  },
  {
    id: 4,
    image: ImgAll4,
    title: "O casamento a princesa Beatriz",
    categorySlug: "fotografia",
  },
  {
    id: 5,
    image: ImgAll5,
    title: "Doces, bem casados & bolos",
    categorySlug: "casamentos",
  },
  {
    id: 6,
    image: ImgAll6,
    title: "Cálculo de bebidas",
    categorySlug: "casamentos",
  },
  {
    id: 7,
    image: ImgAll7,
    title: "bouquet de noiva",
    categorySlug: "casamentos",
  },
  {
    id: 8,
    image: ImgAll8,
    title: "escolhendo o vestido",
    categorySlug: "debutantes",
  },
  { id: 9, image: ImgAll9, title: "Penteados", categorySlug: "eventos" },
  {
    id: 10,
    image: ImgAll10,
    title: "escolha da aliança",
    categorySlug: "casamentos",
  },
  {
    id: 11,
    image: ImgAll11,
    title: "Madrinhas",
    categorySlug: "eventos",
  },
  {
    id: 12,
    image: ImgAll12,
    title: "mesa posta",
    categorySlug: "fotografia",
  },
  { id: 13, image: ImgAll13, title: "extra 1", categorySlug: "debutantes" },
  {
    id: 14,
    image: ImgAll14,
    title: "extra 2",
    categorySlug: "casamentos",
  },
  { id: 15, image: ImgAll15, title: "extra 3", categorySlug: "eventos" },
  { id: 15, image: ImgAll16, title: "extra 4", categorySlug: "eventos" },
];

const categories = [
  {
    id: 1,
    name: "Mostrar tudo",
    slug: "all",
  },
  {
    id: 2,
    name: "Casamentos",
    slug: "casamentos",
  },
  {
    id: 3,
    name: "Eventos",
    slug: "eventos",
  },
  {
    id: 4,
    name: "Fotografia",
    slug: "fotografia",
  },
  {
    id: 5,
    name: "Debutantes",
    slug: "debutantes",
  },
];

const BlogGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedPost, setSelectedPost] = useState({});

  const handleCategoryClick = (category: (typeof categories)[1]) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory.slug === "all"
      ? posts
      : posts.filter((post) => post.categorySlug === selectedCategory.slug);

  console.log(selectedPost);

  return (
    <div id="blog" className="w-full pt-10">
      <Container>
        <div className="w-full sm:w-5xl mx-auto">
          <TitleSection title="Blog Gallery" />
          <p className="text-app-typography-tertiary/75 text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            natus nemo quis nostrum cum harum optio sit unde, animi rerum
            deleniti consequuntur excepturi placeat voluptatum a maiores eius
            quo iste.
          </p>

          <div className=" flex-row hidden lg:flex justify-center mt-5 gap-3 items-center desktop-tab">
            {categories.map((category) => (
              <Fragment key={category.id}>
                <Button
                  key={category.id}
                  disabled={selectedCategory.id === category.id}
                  onClick={() => handleCategoryClick(category)}
                  variant={"ghost"}
                  className={`text-sm cursor-pointer ${
                    selectedCategory.id === category.id
                      ? "text-app-primary cursor-default"
                      : "text-app-typography-tertiary/50 hover:text-app-typography-tertiary"
                  }`}
                >
                  {category.name}
                </Button>

                {category.id !== categories.length && (
                  <span className="text-app-typography-tertiary/50 font-thin font-serif cursor-default select-none mb-1">
                    :::
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          <div className="mobile-tabs lg:hidden mt-3">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Categorias" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.name}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </Container>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10">
        {filteredPosts.map((post) => (
          <BlogGalleryItem
            key={post.id}
            image={post.image}
            title={post.title}
            onClick={() => setSelectedPost(post)}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

const BlogGalleryItem = ({
  image,
  title,
  onClick,
  id,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string | any;
  title: string;
  onClick: () => void;
  id: number;
}) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger asChild>
        <div
          onClick={onClick}
          className="col-span-1 relative overflow-hidden group"
        >
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-white/50 flex opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 items-center justify-center transition-all duration-500">
            <PlusIcon size={50} className="text-app-tertiary stroke-[0.5px]" />
          </div>

          <div className="absolute bottom-3 right-0 w-auto h-6 px-4 bg-neutral-700 flex items-center justify-center shadow-2xl group-hover:translate-x-[102%] transition-all duration-700">
            <h3 className="text-xs font-medium text-app-primary uppercase">
              {title}
            </h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="h-[500px] overflow-auto">
        <DialogHeader>
          <DialogTitle className="uppercase">{title}</DialogTitle>

          {id === 1 && (
            <div className="mt-5">
              <iframe
                className="w-full"
                height="315"
                src="https://www.youtube.com/embed/xJePJtpJUlk?si=zk01JbTnBEYKQ5rE"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}

          {id === 2 && (
            <div className="mt-5">
              <video
                src="/videos/videocasamentocristao.mp4"
                typeof="video/mp4"
              ></video>

              <div className="mt-3 flex flex-wrap gap-3">
                <p className="text-sm">
                  No dia 30 de julho de 2024, Luigi Cesar, filho do jornalista e
                  apresentador César Filho e da atriz Elaine Mickely, uniu-se em
                  matrimônio a Júlia Vieira em uma cerimônia que combinou
                  elegância, emoção e uma profunda demonstração de fé. Mais do
                  que um evento luxuoso, o casamento foi marcado pela gratidão a
                  Deus e pela valorização da família, que proporcionaram
                  momentos inesquecíveis ao jovem casal.
                </p>
                <p className="text-sm">
                  A oração, presente em cada etapa do relacionamento, foi o
                  grande destaque da cerimônia, celebrada pelos pastores André
                  Fernandes e André Valadão, com a participação de amigos da
                  Lagoinha Church de Alphaville. A fé do casal emocionou a todos
                  os presentes, tornando o evento memorável.
                </p>

                <p className="text-sm">
                  Esse exemplo nos relembra a importância de colocar Deus em
                  primeiro lugar no casamento. Um relacionamento baseado em
                  respeito, paciência e oração cria um lar abençoado, onde o
                  amor floresce e gera frutos duradouros. O propósito divino
                  para o matrimônio é a união verdadeira, simbolizada na
                  promessa de se tornarem “uma só carne”, conforme ensinado na
                  Bíblia.
                </p>

                <p className="text-sm">
                  Casamentos assim inspiram a construir famílias centradas em
                  valores cristãos, capazes de impactar positivamente a
                  sociedade. Afinal, um matrimônio alicerçado em fé e amor
                  promove a harmonia e o crescimento mútuo, tornando o “sim” no
                  altar o início de uma jornada de bênçãos e prosperidade.
                </p>
              </div>
            </div>
          )}

          {id === 3 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px]"
                        src={ImgArranjo}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px]"
                        src={ImgArranjoSimples}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px]"
                        src={ImgArranjo2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px]"
                        src={ImgMesaPosta}
                        alt={""}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                <p>
                  Celebre o Amor com Estilo e Sem Exceder o Orçamento Quando
                  pensamos em casamento, sabemos que os gastos podem alcançar
                  limites altíssimos, mas o conceito de mini-wedding faz toda a
                  diferença quando o objetivo é celebrar com quem realmente
                  importa, em grande estilo e com um orçamento mais enxuto.
                  <br />
                  <br />
                  O segredo é simples: convide apenas os familiares mais
                  próximos e os melhores amigos – aquelas pessoas que têm um
                  papel ativo no seu dia a dia. O resultado será um casamento
                  exclusivo, memorável e cheio de significado, sem comprometer
                  seu bolso. As emoções e experiências afetivas desse dia serão
                  tão intensas que certamente compensarão qualquer investimento
                  feito.
                  <br />
                  <br />
                  Investindo de Forma Inteligente Optar por uma cerimônia mais
                  exclusiva permite que você invista em serviços premium e
                  marcas que fazem sentido para você. Afinal, queremos nos casar
                  uma única vez, e a qualidade no que escolhemos é importante.
                  Isso não significa descontrole nos gastos, mas sim saber como
                  fazer mais pagando menos.
                  <br />
                  <br />
                  Explore opções simples, mas elegantes, para a mesa posta e
                  arranjos que tragam modernidade e sofisticação ao seu grande
                  dia.
                  <br />
                  <br />
                  Escolha o Local que Enche o Coração Se possível, considere
                  escolher um local que tenha significado para o casal. Isso
                  tornará a celebração ainda mais especial e pessoal.
                  <br />
                  <br />
                  Realize o Seu Sonho de Forma Sustentável Tornar seus objetivos
                  reais e sustentáveis é essencial para que o casamento seja um
                  marco positivo, não apenas no dia, mas também na sua vida a
                  dois. A beleza de um mini-wedding é poder realizar o sonho sem
                  abrir mão daquilo que é mais importante: o amor e o
                  significado desse momento.
                  <br />
                  <br />
                  Veja nas imagens algumas inspirações de decoração que podem
                  dar o toque final ao seu casamento, tornando-o um grande
                  sucesso sem precisar gastar uma fortuna.
                </p>
              </div>
            </div>
          )}

          {id === 4 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgBeatriz1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgBeatriz2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgBeatriz3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                <strong>A Inspiração da Princesa Beatriz do Reino Unido</strong>
                <br />
                A princesa Beatriz nos deu um exemplo de flexibilidade e
                resiliência em meio à pandemia. Com o casamento marcado, adaptou
                seus planos e usou o vestido de noiva da Rainha Elizabeth, sua
                avó, reformado para refletir sua personalidade. A cerimônia, sem
                multidões, trouxe uma mensagem de esperança e maturidade,
                mostrando que as adversidades podem ser transformadas em belas
                histórias.
                <br />
                <br />
                Muitas vezes, nossos sonhos não condizem com a realidade, mas o
                mais importante é consolidar o amor. Estar com a pessoa certa
                vale mais do que uma grande festa, pois o verdadeiro valor está
                no sentimento que une vocês.
                <br />
                <br />
                Nos grandes centros, há espaços ideais para mini-weddings com
                até 80, 50 ou até 25 convidados. Essas celebrações íntimas
                priorizam o essencial: o amor e a conexão com quem realmente
                importa.
                <br />
                <br />
                A cada aniversário, você pode renovar suas alianças ou celebrar
                de forma especial.
                <br />
                <br />
                Vamos planejar o casamento dos seus sonhos gastando pouco?
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgDoces1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgDoces2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgDoces3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                <p>
                  Doces Finos Para garantir que todos os convidados aproveitem a
                  mesa de doces, calcule entre 4 e 6 doces finos por pessoa como
                  mínimo, e o ideal é 6 a 8 doces por convidado. Lembre-se: é
                  comum os convidados guardarem bombons e outros doces para
                  levar para casa, então, se não considerar isso, pode faltar. E
                  ninguém quer que isso aconteça!
                  <br />
                  <br />
                  Além da quantidade, leve em conta os sabores e variedade dos
                  doces: Combine doces finos (como camafeu, macaron e doces com
                  frutas secas) com doces mais simples (beijinhos, brigadeiros,
                  entre outros).
                  <br />
                  <br />
                  Para mesas sortidas e atraentes, considere as seguintes
                  proporções: 500 doces: até 5 sabores diferentes. 1.000 doces:
                  entre 7 e 8 sabores diferentes. 2.000 doces: entre 8 e 12
                  tipos. E assim por diante, mantendo a diversidade proporcional
                  à quantidade total.
                  <br />
                  <br />
                  A variedade de sabores e a apresentação dos doces são um
                  espetáculo à parte na festa, então invista em uma mesa bonita
                  e colorida!
                  <br />
                  <br />
                  Bem-Casados (ou Bem-Vividos) Os bem-casados são irresistíveis
                  e tradicionais, geralmente levados para casa pelos convidados.
                  Para calcular: Considere 4 a 6 unidades por pessoa, já que a
                  maioria não se contenta com apenas um!
                  <br />
                  <br />
                  Por serem embalados individualmente, são fáceis de guardar e,
                  por isso, os convidados tendem a pegar mais de um ao sair da
                  festa.
                  <br />
                  <br />
                  Bolo de Casamento O bolo é o ponto alto da festa, e mesmo quem
                  está de dieta dificilmente resiste a uma fatia! Para calcular:
                  Planeje 100 a 150 gramas por convidado. De 10 convidados, se 3
                  não comerem, outros podem repetir – e o equilíbrio se mantém!
                  <br />
                  <br />
                  Leve em conta também as sobremesas e os outros doces
                  disponíveis. Como os bem-casados geralmente são consumidos em
                  casa, o bolo continua sendo uma atração especial para ser
                  aproveitada no momento da festa.
                </p>
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgDrink1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgDrink2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgDrink3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                Como Calcular a Quantidade de Bebidas para o Casamento A
                quantidade de vinho ou espumante para um casamento depende do
                perfil dos convidados e da variedade de outras bebidas
                disponíveis durante a festa. Para ajudar no planejamento, aqui
                estão algumas dicas práticas:
                <br />
                <br />
                Espumantes e Vinhos Brancos ou Tintos: Considere uma garrafa de
                750 ml para cada 6 a 8 pessoas. Se outras bebidas alcoólicas ou
                drinks forem servidos, calcule uma garrafa para cada 6 pessoas.
                <br />
                <br />
                Vinhos Fortificados (ex.: Vinho do Porto): Uma garrafa é
                suficiente para 10 pessoas.
                <br />
                <br />
                Vinhos Doces e Licorosos (ex.: Vinhos de Sobremesa): Assim como
                os fortificados, calcule uma garrafa para cada 10 pessoas.
                <br />
                <br />
                Melhor sobrar do que faltar, não é verdade? Por isso, procure
                adegas ou importadoras que trabalhem com consignação. Assim, as
                garrafas não consumidas podem ser devolvidas, e o valor
                correspondente será reembolsado.
                <br />
                <br />
                Além disso, é recomendável adicionar uma margem de segurança ao
                cálculo – entre 20% e 40% a mais do total estimado –
                especialmente se os convidados forem predominantemente jovens.
                <br />
                <br />
                Outros pontos importantes a considerar:
                <br />
                <br />
                O perfil dos convidados: são mais jovens ou maduros?
                <br />
                <br />
                O tempo de duração da festa.
                <br />
                <br />
                Os momentos em que os vinhos e espumantes serão servidos: será
                apenas no brinde ou durante toda a celebração?
                <br />
                <br />
                Por fim, lembre-se de que brindar com água de coco ou drinks sem
                álcool está super em alta e nunca sai de moda. Saúde e estilo
                sempre andam juntos! Celebremos com alegria e bom senso!
              </div>
            </div>
          )}

          {id === 7 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgBoquet2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgBoquet1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgBoquet3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                <p>
                  A noiva é única e não precisa combinar com a decoração. Se o
                  ambiente tiver tons vibrantes, como vermelho ou laranja, o
                  buquê pode perfeitamente ser branco ou em tons pastéis.
                  <br />
                  <br />
                  O mais importante é a harmonia entre sua silhueta e o tamanho
                  do buquê – nem grande demais, nem pequeno demais, mas na
                  medida certa para valorizar seu look.
                  <br />
                  Para inspirar, selecionei alguns buquês incríveis, cada um com
                  um estilo e forma de segurar.
                  <br />
                  Qual combina mais com você? Me conte!
                </p>
              </div>
            </div>
          )}

          {id === 8 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgVestido1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgVestido2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgVestido3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                <p>
                  Como Escolher o Melhor Vestido
                  <br /> <br />
                  Para encontrar o vestido perfeito, é essencial conhecer os
                  diferentes tipos de silhueta e entender quais modelos
                  valorizam mais o seu corpo.
                  <br /> <br />
                  Seja em lojas físicas ou online, há uma infinidade de
                  estilistas e opções para compra ou aluguel. Caso opte por
                  comprar de fora, como da China, certifique-se de tirar as
                  medidas corretamente para evitar surpresas.
                  <br /> <br />
                  Inspire-se! Seu grande dia está chegando, e você merece estar
                  plena, maravilhosa e com um vestido que traduza seu momento e
                  suas expectativas.
                </p>
              </div>
            </div>
          )}

          {id === 9 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgCabelo1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgCabelo2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgCabelo3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="mt-3">
                <p>
                  Você Já Pensou no Penteado Para Subir ao Altar?
                  <br /> <br />
                  O tão esperado dia chegou: a prova do penteado! Como será que
                  você vai se sair nesse momento? Para ajudar na sua escolha,
                  separei algumas inspirações incríveis para tornar esse
                  processo ainda mais especial.
                  <br /> <br />
                  Lembre-se: o ano do seu casamento é uma oportunidade perfeita
                  para fazer uma transição de estilo ou até mesmo adotar hábitos
                  que minimizem o stress cotidiano. Não deixe nada atrapalhar
                  esse momento tão abençoado!
                  <br /> <br />
                  Alguns meses antes, escolha o local onde você passará o seu
                  dia da noiva e faça a prova do penteado com antecedência. Isso
                  garantirá tranquilidade e evitará surpresas no dia do
                  casamento.
                  <br /> <br />
                  Inspire-se e aproveite esse momento único! Afinal, o penteado
                  é mais do que um detalhe – é parte do conjunto que fará você
                  se sentir maravilhosa ao dizer “sim”.
                </p>
              </div>
            </div>
          )}

          {id === 10 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgAlianca1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgAlianca2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgAlianca3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="mt-3">
                <p>
                  Como Escolher o Melhor Vestido
                  <br />
                  <br />
                  Para encontrar o vestido perfeito, é essencial conhecer os
                  diferentes tipos de silhueta e entender quais modelos
                  valorizam mais o seu corpo.
                  <br />
                  <br />
                  Seja em lojas físicas ou online, há uma infinidade de
                  estilistas e opções para compra ou aluguel. Caso opte por
                  comprar de fora, como da China, certifique-se de tirar as
                  medidas corretamente para evitar surpresas.
                  <br />
                  <br />
                  Inspire-se! Seu grande dia está chegando, e você merece estar
                  plena, maravilhosa e com um vestido que traduza seu momento e
                  suas expectativas.
                </p>
              </div>
            </div>
          )}

          {id === 11 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgMadrinhas1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgMadrinhas2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgMadrinhas3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="mt-3">
                <p>
                  Madrinhas: O Dia Mais Especial da Sua Vida, Com as Suas Amigas
                  <br />
                  <br />
                  Nos Estados Unidos e na Europa, as madrinhas costumam usar
                  vestidos da mesma paleta de cores, podendo escolher o modelo
                  que preferirem dentro do tom definido pela noiva – e essa moda
                  já chegou ao Brasil!
                  <br />
                  <br />O dia da noiva também virou um momento especial para as
                  madrinhas, com spas ou locais exclusivos, onde podem relaxar
                  com massagens, boas refeições e um brinde com espumantes,
                  tornando tudo ainda mais inesquecível.
                </p>
              </div>
            </div>
          )}

          {id === 12 && (
            <div className="mt-5">
              <Carousel className="w-full max-w-sm mx-auto">
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgMesa1}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgMesa2}
                        alt=""
                      />
                    </div>
                  </CarouselItem>

                  <CarouselItem>
                    <div className="p-1">
                      <Image
                        className="w-full rounded-md h-[400px] object-cover"
                        src={ImgMesa3}
                        alt=""
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <div className="mt-3">
                <p>
                  Quando pensamos em uma mesa posta, a ideia de requinte e
                  sofisticação logo vem à mente. No entanto, é importante
                  lembrar que o simples também pode ser elegante. O segredo está
                  em ressignificar e evitar a busca por “perfeições
                  instagramáveis” que nem sempre refletem a realidade.
                  <br /> <br />
                  A simplicidade bem planejada pode resultar em algo incrível!
                  Por exemplo:
                  <br /> <br />
                  Arranjos altos: Embora sejam bonitos, podem ser pouco
                  funcionais se a base não for fina, pois bloqueiam a visão dos
                  convidados.
                  <br /> <br />
                  Arranjos acessíveis: Um vaso de vidro simples, encontrado em
                  lojas acessíveis, pode dar vida a arranjos singelos e
                  modernos.
                  <br /> <br />
                  Guardanapos decorados: Uma dobra simples de guardanapo com um
                  galho de alecrim ou lavanda transmite aconchego e charme
                  únicos.
                  <br /> <br />
                  Menos é mais, e você pode transformar a mesa em algo
                  inesquecível usando o que está ao seu alcance.
                  <br /> <br />
                  Confira as fotos e inspirações e diga o que achou! Vamos
                  juntos criar algo especial!
                </p>
              </div>
            </div>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogGallery;

"use client";

import TitleSection from "@/components/TitleSection";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Fragment, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
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
  { id: 10, image: ImgAll10, title: "escolha da aliança", categorySlug: "casamentos" },
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

  const handleCategoryClick = (category: (typeof categories)[1]) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory.slug === "all"
      ? posts
      : posts.filter((post) => post.categorySlug === selectedCategory.slug);

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
                  variant={"category_section"}
                  className={`text-sm ${
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
                  <SelectItem value={category.name}>{category.name}</SelectItem>
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
          />
        ))}
      </div>
    </div>
  );
};

const BlogGalleryItem = ({
  image,
  title,
}: {
  image: string;
  title: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="col-span-1 relative overflow-hidden group">
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
            <h3 className="text-xs font-medium text-app-primary uppercase">{title}</h3>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BlogGallery;

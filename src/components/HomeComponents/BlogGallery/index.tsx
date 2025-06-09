'use client'

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

const posts = [
  {
    id: 1,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Praia Casamento",
    categorySlug: "casamentos",
  },

   
  {
    id: 2,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Evento Empresarial",
    categorySlug: "eventos",
  },
  {
    id: 3,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Festa de 15 anos",
    categorySlug: "debutantes",
  },
  {
    id: 4,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Foto Artística",
    categorySlug: "fotografia",
  },

  {
    id: 5,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Praia Casamento",
    categorySlug: "casamentos",
  },

  {
    id: 6,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Praia Casamento",
    categorySlug: "debutantes",
  },

   {
    id: 7,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Praia Casamento",
    categorySlug: "eventos",
  },

  {
    id: 8,
    image: "/assets/imagens/praia-casamento.jpg",
    title: "Praia Casamento",
    categorySlug: "eventos",
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
          <img
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
            <h3 className="text-xs font-medium text-app-primary">{title}</h3>
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

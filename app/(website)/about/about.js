import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About Us
      </h1>
      {/* <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div> */}

      {/* <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div> */}

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
        At QuillCrafts, we're passionate about sharing knowledge, sparking discussions, and connecting with like-minded individuals from all walks of life. Our mission is to create an online space where ideas thrive, conversations flourish, and inspiration flows.
        </p>
        <p>
        Our team of dedicated writers and contributors are experts in their respective fields, bringing a wealth of knowledge and experience to each article they produce. We strive to provide well-researched, thought-provoking, and insightful content that both informs and entertains our readers.
        </p>
        <p>
        But this blog isn't just about us; it's about you too. We value the power of community and encourage active participation from our readers. We believe that every voice matters, and we welcome your comments, ideas, and feedback. We hope to foster a supportive and inclusive environment where you can connect with others who share your interests and passions.
        </p>
        <p>
          
So whether you're here to learn, share, or simply find some inspiration, we invite you to explore our blog and become part of our growing community. Together, let's embark on a journey of discovery, learning, and meaningful conversations.
        </p>
        <p>
        Thank you for visiting QuillCrafts. We're excited to have you here!
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}

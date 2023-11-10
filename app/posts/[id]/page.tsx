import Author from "@/components/Author";
import Related from "@/components/Related";
import Image from "next/image";

interface PostByIdProps {
  params: { id: string };
  searchParams: [{ name: "" }];
}

const PostById = ({ params, searchParams }: PostByIdProps) => {
  return (
    <section className="container mx-auto md:px-2 py-16 w-1/2">
      <div className="flex justify-center">
        <Author></Author>
      </div>

      <div className="post py-10">
        <h1 className="font-bold text-4xl text-center pb-5">
          Nature&apos;s Wonder Plant: A Closer Look
        </h1>
        <p className="subtitle text-gray-500  text-xl text-center">
          In the realm of botanical marvels, few plants capture the imagination
          quite like Nature&apos;s Wonder Plant. This extraordinary botanical
          specimen, officially known as Aloe vera, has been revered for
          centuries for its multifaceted properties and numerous benefits.
        </p>

        <div className="py-10">
          <Image
            src={"/images/img1.png"}
            alt={""}
            width={900}
            height={600}
          ></Image>
        </div>

        <div className="content text-gray-600 text-lg flex flex-col gap-4">
          <strong>Aloe Vera: The Plant of Many Virtues </strong>
          <p>
            <strong>Origin and Appearance:</strong> Nature&apos;s Wonder Plant,
            Aloe vera, is a succulent that thrives in arid regions. Recognizable
            by its fleshy, serrated leaves that contain a gel-like substance,
            this plant has been cultivated for various purposes across different
            cultures.
          </p>

          <p>
            <strong>Healing Properties:</strong> One of the most celebrated
            aspects of Aloe vera is its healing properties. The gel inside its
            leaves is rich in vitamins, minerals, and antioxidants, making it a
            popular remedy for soothing burns, promoting wound healing, and
            providing relief from skin irritations.
          </p>

          <p>
            <strong>Nutritional Benefits:</strong> Beyond its topical uses, Aloe
            vera offers nutritional benefits when consumed internally. Some
            people incorporate Aloe vera gel into smoothies or juices to harness
            its potential digestive and immune system benefits.
          </p>

          <p>
            <strong>Cosmetic Applications:</strong> The cosmetic industry also
            recognizes the potential of Nature&apos;s Wonder Plant. Aloe vera is
            a common ingredient in skincare products due to its moisturizing and
            skin-soothing qualities. It is often found in creams, lotions, and
            even shampoos.
          </p>

          <p>
            <strong>Cultivating Aloe Vera</strong>
            <strong>Growing Conditions:</strong> For those interested in
            cultivating Nature&apos;s Wonder Plant at home, Aloe vera is
            relatively easy to grow. It thrives in well-draining soil and
            requires minimal water, making it an excellent choice for those with
            varying levels of gardening expertise.
          </p>

          <p>
            <strong>Harvesting Aloe Gel:</strong> Harvesting the gel is a
            delicate process. By carefully slicing open the leaves and
            extracting the gel, one can harness the potent benefits of Aloe vera
            for various applications.
          </p>

          <p>
            <strong>A Gift from Nature</strong> In conclusion, Nature&apos;s
            Wonder Plant, Aloe vera, stands as a testament to the incredible
            gifts that the natural world provides. Whether used for its healing
            properties, nutritional benefits, or cosmetic applications, Aloe
            vera continues to captivate and contribute to our well-being. As we
            explore the diverse wonders of the plant kingdom, Aloe vera remains
            a shining example of nature&apos;s ability to nurture and sustain
            life.
          </p>
        </div>
      </div>

      <Related></Related>
    </section>
  );
};

export default PostById;

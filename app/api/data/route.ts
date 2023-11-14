import { Post } from "@/models/Post";
import { NextRequest, NextResponse } from "next/server";

export interface Data {
  Trending: Post[];
  Posts: Post[];
  Popular: Post[];
}
export const posts: Data = {
  Trending: [
    {
      id: 1,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/img1.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      published: "Jun 3, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author1.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 2,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/img2.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      published: "Jun 5, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author2.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 3,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/img3.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      published: "Jun 7, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author3.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 4,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/img4.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      published: "Jun 10, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author4.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 5,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/img5.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      published: "Jun 14, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author5.png",
        designation: "CEO and Founder",
      },
    },

    {
      id: 6,
      title:
        "Diving into the Console Gaming Universe: Unveiling the Thrills and Strategies",
      subtitle:
        "Embark on an exhilarating adventure through the realms of console gaming.",
      category: "Gaming, Technology",
      img: "/images/img6.png",
      description:
        "Embarking on a journey into the world of console gaming is like stepping into a virtual universe filled with challenges, victories, and endless excitement. Join us as we unlock the secrets of success in the gaming world. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sed ullam nostrum explicabo repellendus atque eos magni, inventore, vel accusantium perferendis voluptatem saepe quos? Nemo minima officiis sequi iusto quas.",
      published: "Nov 1, 2023",
      author: {
        name: "Noble Osinachi",
        img: "/images/authors/author6.png",
        designation: "Gaming Enthusiast",
      },
    },

    {
      id: 7,
      title: "The Wonders of Technology: Innovations Shaping Our Future",
      subtitle: "Explore the cutting-edge advancements in the tech world.",
      category: "Technology, Innovation",
      img: "/images/img4.png",
      description:
        "Delve into the fascinating realm of technology and witness the transformative power of innovation. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae.",
      published: "Nov 3, 2023",
      author: {
        name: "Tech Enthusiast",
        img: "/images/authors/author4.png",
        designation: "Tech Evangelist",
      },
    },
    {
      id: 8,
      title: "Exploring Cultural Diversity: A Global Perspective",
      subtitle: "Immerse yourself in the rich tapestry of global cultures.",
      category: "Culture, Travel",
      img: "/images/img3.png",
      description:
        "Traveling beyond borders opens up a world of cultural wonders. Join us on a journey that celebrates diversity and explores the unique traditions that make our world vibrant. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae.",
      published: "Nov 5, 2023",
      author: {
        name: "Cultural Explorer",
        img: "/images/authors/author3.png",
        designation: "Global Nomad",
      },
    },
  ],
  Posts: [
    {
      id: 1,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/posts/img1.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      published: "Jun 3, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author1.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 2,
      title: "Discovering the Marvels of Nature: A Photographic Journey",
      subtitle: "Venture into the heart of the wild with breathtaking images.",
      category: "Nature, Photography",
      img: "/images/posts/img2.png",
      description:
        "Capturing the essence of the wild requires patience and a keen eye. Join us on a photographic journey into the heart of nature, where every frame tells a story. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae.",
      published: "Nov 5, 2023",
      author: {
        name: "Nature Enthusiast",
        img: "/images/authors/author3.png",
        designation: "Wildlife Photographer",
      },
    },
    {
      id: 3,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/posts/img3.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      published: "Jun 7, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author3.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 4,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/posts/img4.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      published: "Jun 10, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author4.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 5,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/posts/img5.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      published: "Jun 14, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author5.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 6,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/posts/img2.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, qui ea assumenda illo quidem consequatur ducimus cum aliquam est minus provident placeat, nesciunt vitae. Et aperiam magni non quasi est asperiores nobis atque suscipit incidunt dignissimos! Harum et sunt ea. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
      published: "Jun 5, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author1.png",
        designation: "CEO and Founder",
      },
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/popular/img1.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic far World of Grammar.",
      published: "Jun 3, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author1.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 2,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/popular/img2.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic far World of Grammar.",
      published: "Jun 5, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author2.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 3,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/popular/img3.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic far World of Grammar.",
      published: "Jun 7, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author3.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 4,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/popular/img4.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic far World of Grammar.",
      published: "Jun 10, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author4.png",
        designation: "CEO and Founder",
      },
    },
    {
      id: 5,
      title: "Your most unhappy customers are your greatest source of learning",
      subtitle:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      category: "Business, Travel",
      img: "/images/popular/img5.png",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic far World of Grammar.",
      published: "Jun 14, 2022",
      author: {
        name: "Flying High",
        img: "/images/authors/author5.png",
        designation: "CEO and Founder",
      },
    },
  ],
};

export const GET = async (req: NextRequest) => {
  return NextResponse.json(posts, {
    status: 200,
  });
};

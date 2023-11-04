import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import Post from "./Post";
const Section2 = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <h1 className="text-center text-4xl text-bold py-12">Latest Posts</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">

                <Post ></Post>
                <Post ></Post>
                <Post ></Post>
                <Post ></Post>
                <Post ></Post>
                <Post ></Post>


            </div>
        </section>
    );
};

export default Section2;

const Newsletter = () => {
  return (
    <section className="bg-gray-50 mt-20">
      <div className="container mx-auto py-16 md:py-20 text-center">
        <h1 className="font-bold text-3xl">Subscribe to our Newsletter</h1>

        <div className="py-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="shadow  border rounded w-9/12 p-3 px-3 py-3 text-gray-700 focus:outline-none focus:shadow-outline"
          />
        </div>

        <button className="rounded-full bg-orange-400 px-20 py-3 text-gray-50 text-xl ">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;

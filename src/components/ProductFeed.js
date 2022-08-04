import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, catagory, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            catagory={catagory}
            image={image}
          />
        ))}

      <img
        className="md:col-span-full bg-yellow-400"
        src="https://links.papareact.com/dyz"
        alt=""
      />

      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, catagory, image }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              catagory={catagory}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, catagory, image }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            catagory={catagory}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;

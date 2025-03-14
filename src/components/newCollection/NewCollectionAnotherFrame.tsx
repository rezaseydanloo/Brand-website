import Product from "./Product";

export default function NewCollectionAnotherFrame() {
  type ProductInformation = {
    Path: string;
    ProductName: string;
    ProductText: string;
    Size: string;
    Color1: string;
    Color2: string;
    Color3: string;
    Color4: string;
  };

  const NewCollectionArray: ProductInformation[] = [
    {
      Path: "/picture/NewCollection/kobe-mens-max90-basketball-t-shirt-J7RdC2.jfif",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/sportswear-phoenix-fleece-womens-over-oversized-pullover-hoodie-Kqx9H3.jfif",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/sportswear-tech-fleece-womens-high-waisted-mini-skirt-82MtjL.jfif",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/W+NSW+PHNX+FLC+OOS+PO+HOODIE.jpg",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/AIR+JORDAN+4+RM.jpg",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/jordan-brooklyn-fleece-mens-pullover-hoodie-dGf5LT.jfif",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/pro-womens-3-shorts-4HBtrm.jfif",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
    {
      Path: "/picture/NewCollection/image.jpg",
      ProductName: "Nike Shoes",
      ProductText: "",
      Size: "L , XL , XXL ",
      Color1: "bg-black",
      Color2: "bg-red-500",
      Color3: "bg-blue-500",
      Color4: "bg-green-500",
    },
  ];

  return (
    <section
      className={`sm:w-[85%] md:w-[75%] lg:w-[90%] xl:w-[90%] 
                  grid gap-4 p-4
                  xl:grid-cols-4 xl:grid-rows-2
                  lg:grid-cols-4 lg:grid-rows-2
                  md:grid-cols-3 md:grid-rows-3                           
                  sm:grid-cols-3 sm:grid-rows-3 
                  duration-500`}
    >
      {NewCollectionArray.map((product, index) => (
        <Product
          key={index}
          path={product.Path}
          ProductName={product.ProductName}
          ProductText={product.ProductText}
          Size={product.Size}
          Color1={product.Color1}
          Color2={product.Color2}
          Color3={product.Color3}
          Color4={product.Color4}
        />
      ))}
    </section>
  );
}

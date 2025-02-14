
import Product from "./Product";

export default function NewCollectionAnotherFrame() {

        return (
            <section
              className={`sm:w-[85%] md:w-[75%] lg:w-[90%] xl:w-[90%]
                          grid gap-2 p-2
                          xl:grid-cols-4 xl:grid-rows-2
                          lg:grid-cols-4 lg:grid-rows-2
                          md:grid-cols-3 md:grid-rows-3                           
                          sm:grid-cols-3 sm:grid-rows-3                
                          duration-500 overflow-auto`}>
        
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </section>
    );
}

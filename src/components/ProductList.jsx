import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    id: 1,
    name: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Monstera Deliciosa",
        price: 24.99,
        image:
          "https://images.unsplash.com/photo-1614594575810-0ea46c63f6cf?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 19.99,
        image:
          "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 22.99,
        image:
          "https://images.unsplash.com/photo-1616690248295-5d0f80e0c0e6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 4,
        name: "ZZ Plant",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1614594805320-e654d6c7d5e4?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 5,
        name: "Rubber Plant",
        price: 21.99,
        image:
          "https://images.unsplash.com/photo-1597055181300-e3633a917c9c?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 6,
        name: "Fiddle Leaf Fig",
        price: 29.99,
        image:
          "https://images.unsplash.com/photo-1612363148951-15f16817648f?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: 2,
    name: "Succulents and Cacti",
    plants: [
      {
        id: 7,
        name: "Aloe Vera",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 8,
        name: "Golden Barrel Cactus",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 9,
        name: "Jade Plant",
        price: 12.99,
        image:
          "https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 10,
        name: "Haworthia",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 11,
        name: "Echeveria",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 12,
        name: "String of Pearls",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: 3,
    name: "Flowering Plants",
    plants: [
      {
        id: 13,
        name: "Lavender",
        price: 13.99,
        image:
          "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 14,
        name: "Rose Plant",
        price: 16.99,
        image:
          "https://images.unsplash.com/photo-1496062031456-07b8f162a322?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 15,
        name: "Bougainvillea",
        price: 17.99,
        image:
          "https://images.unsplash.com/photo-1596438459194-f275f413d6ff?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 16,
        name: "Hibiscus",
        price: 15.99,
        image:
          "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 17,
        name: "Jasmine Plant",
        price: 14.99,
        image:
          "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: 18,
        name: "Orchid",
        price: 18.99,
        image:
          "https://images.unsplash.com/photo-1566907225472-731e1788a73b?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className="products-page">
      <Navbar />

      <header className="products-header">
        <p>Discover your perfect plant</p>
        <h1>Our Plant Collection</h1>
        <p>
          Explore our carefully selected indoor plants, succulents and
          flowering plants.
        </p>
      </header>

      <main className="products-container">
        {plantCategories.map((category) => (
          <section className="plant-category" key={category.id}>
            <div className="category-heading">
              <h2>{category.name}</h2>
              <span>{category.plants.length} plants</span>
            </div>

            <div className="product-grid">
              {category.plants.map((plant) => {
                const added = isPlantInCart(plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <div className="product-image-container">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="product-image"
                      />
                    </div>

                    <div className="product-information">
                      <h3>{plant.name}</h3>
                      <p className="product-price">
                        £{plant.price.toFixed(2)}
                      </p>

                      <button
                        type="button"
                        className="add-to-cart-button"
                        onClick={() => handleAddToCart(plant)}
                        disabled={added}
                      >
                        {added ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
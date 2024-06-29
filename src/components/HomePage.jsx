import React from "react";
import toast from "react-hot-toast";
import useCartStore from "../zustand/store.js"; // Import the Zustand store

const Home = () => {
  const productList = [
    {
      "id": 1,
      "title": "iPhone 13",
      "description": "An apple mobile which is nothing like apple",
      "price": 949,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "image" : "https://m.media-amazon.com/images/I/315vs3rLEZL._SY445_SX342_QL70_FMwebp_.jpg"

    },
    {
      "id": 2,
      "title": "iPhone 14",
      "description": "An apple mobile which is nothing like apple",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "image" : "https://m.media-amazon.com/images/I/31wacBawB3L._SY445_SX342_QL70_FMwebp_.jpg"
      // "image" : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8QEBAPEA0PEBAQDQ0ODhANDQ8PFREWFhURFRUYHSggGBomGxMTLTEhJSorLjouFyA2ODMsNygtLisBCgoKDg0OGhAQGC0dHR0tKy0tLS0tLS0rLS0tLS0tLS0tLSsrLS0tLS0tLS0tKy0tKy0tLS0tLS0tLS0tLS0tK//AABEIAMIBAwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAE8QAAEDAgIDCQkMBwcFAAAAAAABAgMEERIhBQYxBxMyQVFhcXSyFCI0NXOxs7TTFyUzQlJTgYORkqHBI2Ryk5TS8BUkYmOChKRDo9Hh8f/EABsBAQACAwEBAAAAAAAAAAAAAAABAwIEBQYH/8QALxEBAAICAQIFAwIGAwEAAAAAAAECAxEEEiEFMTIzURMiQXGRJDRSYaHRFBUjBv/aAAwDAQACEQMRAD8A7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLgLgfQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABH6c0olLCsmBZJHOSOCBq2dNM7gsReLYqqvEiKvEBDxaKmkTfK+pe565rBDI+npIr/ERGqm+dL7/AJAZI9BUTtjI3Km2yMVfMQMGktE0UET5XxNRjEutmR3XiRqZbVVUROkDkFTpmsqalWUdLFdqYljajUZTxu4G+PdZquVM7OavMiLdEbUZ+TjwR1ZJ03kpdN8lL0YoE80JHVDR/wC54vzP7KxpXXWupZpIJWx75G7C7CkLm7EVLLvfIqGTo4stctIvXylq+6PU/JZ92H2YWPaboNX8237IfZgE3Q6u9sDb2va0Oz92B490aq+Sz7sPswJKn1o0hIxr2tiRrkul95Rbfuy6uC9o3DCclY7NqPXTS1OmO6b2mbliSN2BON2FiMV1uRboLYL1jeiMlZdg3Pdb1r4lZMjEqWNa/HHfe54ltaVqLs2pdPMt0bSzXEAAAAAAAAAAAAAAAAAAAAACG0i3FW0qLmjIqiVEXikRYmtd04XSJ/qUDl+7hrHPCtPTQyOiSXGsr2KrX4WoyzUVM0usmapn3vOogUnc81jqabSNNFv8kkNQ9I3xyPfI1HOTvXJi4K4rXtxX25E2jSIdp15kxU7Wrmx72I9PlNf3ll+l6L9BilTtQ2ItEkvx6iaomldxucsz2pf/AEtan0GNnjfGck25MxPlGtLCYS5StaxakUldJv0m+xzWRHvhc1uNESyYkcipdE4yYtp0+J4rmwU6Ijcf3RHuV0Pz1X9+L+Qyizbjx7N/RH+f9sM25fRt2S1X34v5CyI2zr43mmddEf5/2jqjc+pmX/SVOXK6O/YLIxxP5bVPFMs+dY/yj5dT6di8KZyciuZZfsaWVww26cy1vxCZpK1ImMYyOFu9ua5rt53x64UVEaqudwbKuSJycZtVr+IZxbfeW1HpRVhWHBAqOcrnSrTRtqLq7Fk9FyS/FyZGUY++2XUl9x+TBVOjTJsc1Sxtsu8xx4W9Cd0yHNyRq8w26+UO3mCQAAAAAAAAAAAAAAAAAAAAEPWp/fqfmpqm334gOL7uMbX19Cxz0jY9XsfK7gxtc6FFevMiLf6CBBVWr8Gj9N6Nhp6ptUx8kEjnJhV0bleqYVw5Zol06fpIpaZjumY06/roqbzCnHjgVE6Jo8/x/ElCr6heLab6708hhZ4rxb+assBi5oAMoG5o6mgcjnSzb05i94mJrb97tz5y2rscDDhtWbZLamPJUNISK5UV23C1OdbIiJfnyLN6XceJv3lA1nGbFJ23610iZFzL4bUPcDy2GSzbkvh0i/rNSqfbSp5lU5WX1y3KemHdCtkAAAAAAAAAAAAAAAAAAAAAh63w6Dq1R24gOK7v8Du6KN6ouBd+bitki2iyVft+xRAo+plNfStC2NcSJO165WyYiuVbdDVJtER5Ih3zXJFSONOLFDfPj3+L/wBkJVbUPxbTfXesSGMw8T4t/N2WAxmHOfSNDKkSXRquVHrb4qYUvsRVvzoWRDZrirExEzO5/bu1Kptkz5+NL5FkJrSYnSM0hR2axVciOe57Xo5FRsStRi5rnfJ6XS2WzNTDJbT03A4v290BpqnRiojXY2qxj0dhwXxNvsuv9chZiyQ3smDpVuocb9ZU608wyFkC37kK/wB8k6xUeekOZl9ct2nph3UrZAAAAAAAAAAAAAAAAAAAAAIascnd8KcaUs6qnMr47eZQNXWDV+nroliqI2vYtslvkqbFRUzRUuuaKi5rykCK1Z1BodHvWSCJEkVLK9Vc91r3tdyrZMk2W2AeNduA3mfEv/IhT81AquoXi2m+u9YkJiHjPFY/irJ8iYcuY0EaGxG7guXBlh75V79LcWG+a5ZZchbDoY5j7bTrt+fz+jVklajsaoq5ucrUsll+KvHey83ETCcVq/U6pjfdF6TkjWFqNx499lcuJ7XLm2LNe9TbZfsU0eVk0914Rg6o2gtLqjsFlRbRRNWy3sqMRFQpx5tS6eTi9p7KrXpZTt4MkWhw82LplpxPNrbW0u+5A9O6nKuzuidPpV1IifiqHNyeuW5X0w7wYMgAAAAAAAAAAAAAAAAAAAAEJVeMGdUk9IgG5cgfLgVPXVe9bzvi9Zh/8Eiq6heLab6/1iQyr5PH+KR/E2WEmYc6asrVZbNHXt8W1r8uZGl0RimO+9i71/j6VsZRCenD/dqyOZZLpdbpi25pdb8fJYzbGCKbjsjKxaf/ADeO6d6ludP/AKuxDi8q9eru+l+F4b/SjpR7u5luipNbLNFaq85qUvSJdPJjyz8K9pilaqrvaOwZWx2V2zO9ue50+Nn7uTyuN27oB8CtOzXJuHDtj1K6bjvhDusTekozUv6pW18neTBIAAAAAAAAAAAAAAAAAAAACEq/GDOqSekQDaIACqa6cFvM+Jf+TCn5qSKvqC33tpvrvWJCyvk8r4jTfIssOEmWjNHxyCIYdDE4ziExTuwSky3MNdTCErjzPNnWSX1nweN8erUahpxbu6V6vMlPc3MN+7m8jHuGpPozFxHYw53Cz8fu39yiPBWSt+TVTp/3KMtmd92lManTugQAAAAAAAAAAAAAAAAAAAAAha1qd3wrxrS1CKvMj47edftAz3IC4FU1z4Led8SfT3RCv5KBA7nkd9GUq+X9ZlLa+Th8vFvLMrEsRLUnA8OYTCucTXkYWQRiYXRCWxjxIbSkNjz3iVNW38vov/z2bqw9Pwj4zkw9DeGy1psY7d2jlr2ZmRm/ju5eTGw7nLE/tKpRdiVlQv2OpFT8TqUndYcLLGrzDtZkrAAAAAAAAAAAAAAAAAAAAAQ1d4dD1Wp7cQGUgAKtrpwGeUh9PGSIvc2j96aT6/1mUyiWlmx7tMrIsQ2onE8ugJiVf0mJ1OZbIxQ89zE7W1x6Rml6K7FXkzNDnY+un6O94Pm+ll1+JVfBZTzeu73G9wzsM6zqWveNtlhuY7Odlq1tzjxnU9cqfPSHbxeiHms/uWdqM1QAAAAAAAAAAAAAAAAAAAACGr/DYeq1PbiAyXIC4FW1z4DPKQ+njA19y9l9EUf+49alMZt3T0bWneSOphOI3kyiVc4nlacziWH0zuYllFWtU0yEW7xpdjnpncKVpSj3uRzeLa3nap5vk4ppeYe14fIjLiiWo1prx5ti0s7ENmktTJDW3OPGdT1yp89Id7F7df0eU5Pu2/V2osUgAAAAAAAAAAAAAAAAAAAAIav8Nh6rU9uID0QFwKvrlwG+Uh9PGSPG5avvPR/7j1qUovP3NnHH2rahhtlNXtqGUSrtV7RpbEqpqK0shXLWnYCFd1iosUeNE76Pbzs4/wCuk0Obh66dUfh2PDOR0X6J8pVljDixHd6GZ/LZjiLqwovdHbnie+lV1yq7VId7F6KvLcn3bfq7QWKAAAAAAAAAAAAAAAAAAAAAENX+Gw9Vqe3EB9IH0Cr648BvlIfTxga25dJ700ieX9ZlNXJb7phvYa/ZErex5iymGZqmcSrmGRqllVFoelLoUyxSNJGlPHe6WyXaRMbjTKtprO4UytpN7kc3iv3vQcHPi6LzD1XG5H1McS9xtJpVjeyI3P8AxrV9dqu1SHZx+iHm8/uT+rsxYqAAAAAAAAAAAAAAAAAAAAAQ2kPDYeq1PbiA+kABV9ceAzykPp4yRF7mkltF0v1/rMhoZvXLq8ev/lC5wvIrJeG2xSyFEsqKWRKq0MjS6sqLQOQzYNSZpIgdN097O402mjy8W426Xh+WY+1GRsNfHjbuXIg9QPG1Z12q7VIdKkfbDi5fXLspkrAAAAAAAAAAAAAAAAAAAAAQ2kPDYeq1PbiAEABWNcOC3ykPp4wKZuaabalNHTvWytdLhXpmetvxJz8O044yR+W7w+XTf0p84dJppDnR2lu5KpGJS2GpaGdpnCuWVpbVRZ6wlsKmOSMCJ0jHdqoRevVVZitNbbQLUtdDWx0b2S+1d1C8bVnXqrtUhstC07l2UMQAAAAAAAAAAAAAAAAAAAAENpDw2HqtT24gBAAVjXDgN8pD6eMkcR0RKrWNVFsqOf6Rx6HiVi2CIlx+TeaZ5mHWNTNYEnYjHL+kbZOlDheIcKcV9xHaXo+DzYz49T5wvFM459V94bjEM2vaWzGwtqosyo0shg8yJkEILST7FtYYzOlfe5MSmMU1K/6m6q7qF42rOu1XapDG0d1bspAAAAAAAAAAAAAAAAAAAAAAhtIeGw9Vqe3EAIACsa4cFnlIfTxgcN0d8Gn7UnpHHpeD7FXF5nuyltD1zoZmvRePPoLM+GMlJhhx804rxMO2aAr0mY1yLxIeSy4Jx2mHqaZoyV3CwwoREMLNyNCyIa8vRkhr1L7ITCJVLS1al1zNvFja97oN1RdSy+PSaX2itz1b6Vq+u1XapDRv6pXx5OzmKQAAAAAAAAAAAAAAAAAAAAENpDw2HqtT24gBAAVjXDgN8pD6eMkcM0f8Gn7T+249JwfYq4nL92WybbWXzc+0qqPSNVyyscrnceJjqdDg8iYnpdgpVuiKcPp07M223Gkwrl5kkREzMojbGZVTWPWCONFajkxclzbw4Js18uaKqLUaVxqq3OlXDpoTm2+Q1FxfGypkNzhffOp56yp89IcXLGry6eOd1h2orZgAAAAAAAAAAAAAAAAAAAAIbSHhsPVantxACAArGuHAZ5SH08ZI4Zo/4NP2n9tx6Xg+xVxeX7sti+aJZVVdiIl1U2ZvEebXrWZ8lh1SVUmaqcqGtnmLUWYN1u7xox/6Nt+RDz1693ci3Z80jpJsbVVV2GWPHuWF76cs1n17lc90cK2amSuOvg4Vdbs5efl23qqny18j1u5yqqm/XHWsdoc+1rTPeXyCtTFbFmRM1IraO6eo7qU3028e27uaeMqjrdT56Q8/n9yztY/RDthUsAAAAAAAAAAAAAAAAAAAAAQukPDYOq1N+bvogPpAAVfXLgM8rDfo3+PPzAcM0f8ABp+0/tuPTcH2KuLy/dlI6Kqt4qoJ+/tFI17t7XDJZFzRq8trmefH11mGGK8VlN6oLZ6K9c1VL3W6341UpyVmK6TjtE2dSm1gZHGiXTJDmxgmbOhOaIhRdZtaVejmtXbltOhg42vNo5s++0KOrlvc32pp7aoYz2T8OmHPo20Pc0KI3DaoT4TEkmLHs4SollXkNCeNNcnXts/Xi1YppPaNpURqdBGSy/HR83OktpSpT9dqr82dL+djiZfXLqU9MO0lbMAAAAAAAAAAAAAAAAAAAABA6xTJBNSVD1tDd9LK9cmsWdWYHu5sUaN6ZEAykABWtdEVsCyWvva41S9tmaZ8SYsKqvIigcNVGxyyQ32Pc+FVy3yF6q5rkv02XnQ7vh2es4+iZ1MOZzMNurrjyZkQ6W4c/Us9NUuYt0uROpRqY8ku9s8rUXf6REciLZ1dTscl+JUV10XmU1+ulZ9M/su+ne3nMNV2iJF2z0X8fS/zmX/Ir/TP7I+hPzH7vP8AYz/nqL+Ppf5x/wAmP6Z/ZP0Z+Yas1Osb8KujcqWXFFIyZmf+JqqhbTJFo2qyU12TGhILu2fgYZbRpGGm7LVPVxU0SyzvbHE1Lqrlsq8zU2uXmQ5uS8R3l1KVme0PG5Ox0tY+VWq1z3T1UrV/6bZnoscbuR1o4VtyKvIpybTudt+I1GnYyEgAAAAAAAAAAAAAAAAAAAAMNZSRzRvilY2SKRqskjel2uaqWVFQCtw6BrKZMFPOyogTKOOte9k8Tfk781rsaJla7b8qqBtJTV3zdJ/FS+xAxVOjqx7VRY6SypbOplVPQgUTSG5A6dyIqQRxo5zmpHVSLgV21ER0CphvxJbpAwJuHfrMXQrJl8z0Muu3yjUfD0m4j+sQr9XUe0HXb5OmPh6TcST56n/d1HtR12+Tpj4ffcTT56n/AHdT7Uddvk6Y+BdxRPnqf7lT7Uddvk6Y+Hz3Ev8AOg+5Ue0HXb5OmPh89xJeKpiToZUe0I6p+TUfDLR7ibEka6SdHYVRUVuLamxFa5FVU6HIRtLpOrmr1PQRb1A1e+djlkcuKWV67XOcu3+ucCWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k="
    },
    {
      "id": 3,
      "title": "iphone 15",
      "description": "An apple mobile which is nothing like apple",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
      "image" : "https://m.media-amazon.com/images/I/31KxpX7Xk7L._SY445_SX342_QL70_FMwebp_.jpg"
      
    },
    {
      "id": 4,
      "title": "Samsung S23 Ultra",
      "description": "The best is here",
      "price": 1080,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      "image" : "https://m.media-amazon.com/images/I/31W9+sE8McL._SY300_SX300_.jpg"
      
    },
    {
      "id": 5,
      "title": "IQOO 9",
      "description": "Iqoo gaming mobile is the best",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
      "image" : "https://m.media-amazon.com/images/I/41L5-yoXD2L._SX300_SY300_QL70_FMwebp_.jpg"
      
    },
  ];

  const addToCartHandler = (options) => {
    useCartStore.getState().addToCart(options);
    useCartStore.getState().calculatePrice();
    toast.success("Added To Cart");
  };

  return (
    <div className="flex p-12 justify-center flex-wrap">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.image}
          name={i.title}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
          info = {i.description}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc ,info}) => (
  <div className="card bg-base-100 w-96 shadow-xl my-4">
  <figure className="object-cover">
    <img src={imgSrc} alt="Figures" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">${price}</div>
    </h2>
    <p>{info}</p>
    <div className="w-full flex justify-center">
      <button className="btn btn-wide hover:bg-red-500" onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>Add to Cart</button>
    </div>
  </div>
</div>
);

export default Home;

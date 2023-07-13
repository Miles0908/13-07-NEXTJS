import styles from "./HotelSection.module.scss";
import { roomList } from "@/mocks/reservation";

const HotelSection = () => {
  const onHotelRender = () => {
    return roomList?.map(
      ({
        name,
        imageLocation,
        id,
        location,
        price,
        rating,
        roomsAvailable,
      }) => (
        <div
          className={styles.HotelSection__RoomList}
          
        >
          <img
            className={styles.HotelSection__Img}
            key={id}
            src={imageLocation}
            alt={name}
          />
          <h2>{name} </h2>
          <h3>Where: {location}</h3>
          <p className={styles.HotelSection__price}>{price}$</p>
          <p> {rating} ★</p>
          {roomsAvailable && (
            <div>
              <h4>Available rooms:</h4>
              <ul>
                {roomsAvailable.map(({ type, price, quantity }) => (
                  <li key={type}>
                    Type : {type} , Price {price} , Quantity:{quantity}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    );
  };
  return (
    <div className={styles.HotelSection}>
        <h1 className={styles.Title}>SEZIONE HOTEL</h1>
      {roomList.length ? onHotelRender() : <p>Loading...</p>}
    </div>
  );
};

export default HotelSection;

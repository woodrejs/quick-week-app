import { db } from "../utils/firebase";

const addToFavorites = (collectionName, userId, data) => {
  db.collection(collectionName)
    .doc(userId)
    .set(
      {
        [data.id]: {
          id: data.id,
          title: data.title,
          image: data.images[0].standard,
        },
      },
      { merge: true }
    );
};
export default addToFavorites;

import { db } from "../utils/firebase";

const addToFavorites = (collectionName, userId, data) => {
  db.collection(collectionName)
    .doc(userId)
    .set({ [data.id]: data }, { merge: true });
};
export default addToFavorites;

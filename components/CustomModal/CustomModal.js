import React from "react";
import { View, Modal, Button } from "react-native";
import Txt from "../Txt";
import { db } from "../../utils/firebase";
import { useSelector } from "react-redux";
import * as firebase from "firebase";

const CustomModal = ({ data, type, visible, onPress, collection }) => {
  const userID = useSelector(({ user }) => user.id);
  const deleteData = () => {
    const ref = db.collection(collection).doc(userID);
    ref.update({
      [data.id]: firebase.firestore.FieldValue.delete(),
    });
  };

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <View>
        <View>
          <Txt>Do You want to delete {data.title} from favorites?</Txt>
        </View>
        <View>
          <Button title="Yes" onPress={deleteData} />
          <Button title="No" onPress={onPress} />
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import Txt from "../Txt";
import { db } from "../../utils/firebase";
import { useSelector } from "react-redux";
import * as firebase from "firebase";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import styles from "./ModalDelete.css";

const ModalDelete = ({ data, visible, onPress, collection }) => {
  const userID = useSelector(({ user }) => user.id);
  const deleteData = () => {
    const ref = db.collection(collection).doc(userID);
    ref.update({
      [data.id]: firebase.firestore.FieldValue.delete(),
    });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.box}>
        <View style={styles.contentBox}>
          <View style={styles.txtBox}>
            <Txt customStyle={styles.txt}>
              Do You want to delete {data.title} from favorites?
            </Txt>
          </View>
          <View>
            <Button
              title="Yes"
              onPress={deleteData}
              txtColor={COLORS.fourth}
              customStyle={{ ...styles.btn, ...styles.primaryBtn }}
            />
            <Button
              title="No"
              onPress={onPress}
              txtColor={COLORS.secound}
              customStyle={{ ...styles.btn, ...styles.secoundaryBtn }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalDelete;

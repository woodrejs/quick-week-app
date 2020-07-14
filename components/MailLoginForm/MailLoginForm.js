import React from "react";
import { View, StyleSheet } from "react-native";
import Input from "../Input";
import Button from "../Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";
import { auth } from "../../utils/firebase";

const MailLoginForm = ({ navigation }) => {
  const dispatch = useDispatch();
  const userStore = useSelector(({ user }) => user);
  const { setUserMail, setUserPassword } = userActions;
  const handleInputPassword = (val) => dispatch(setUserPassword(val));
  const handleInputMail = (val) => dispatch(setUserMail(val));
  const handleBtnSignIn = () => {
    auth
      .createUserWithEmailAndPassword(userStore.mail, userStore.password)
      .then(() => {
        dispatch(setUserPassword(null));
        dispatch(setUserMail(null));
        navigation.navigate("SignUpEnd");
      })
      .catch((err) => alert(err));
  };

  return (
    <View>
      <View style={styles.inputsBox}>
        <View style={styles.inputBox}>
          <Input
            label="email"
            size={styles.inputSize}
            change={handleInputMail}
            value={userStore.mail}
          />
        </View>
        <View style={styles.inputBox}>
          <Input
            label="password"
            size={styles.inputSize}
            change={handleInputPassword}
            value={userStore.password}
          />
        </View>
      </View>
      <Button
        title="sign in"
        height={DIMENSIONS.height * 0.05}
        width={DIMENSIONS.width * 0.75}
        bckColor={COLORS.first}
        txtColor={COLORS.fourth}
        onPress={handleBtnSignIn}
      />
    </View>
  );
};

export default MailLoginForm;

const styles = StyleSheet.create({
  inputsBox: { width: "100%", alignItems: "center", marginBottom: "10%" },
  inputBox: { marginBottom: 25 },
  inputSize: {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
  },
});

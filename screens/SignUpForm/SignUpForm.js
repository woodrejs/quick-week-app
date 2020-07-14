import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import Input from "../../components/Input";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";
import { auth } from "../../utils/firebase";

const SignUpForm = ({ navigation }) => {
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
    <View style={styles.screen}>
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
      <View style={styles.btnBox}>
        <Button
          title="sign in"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={handleBtnSignIn}
        />
      </View>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  screen: { width: "100%", height: "100%" },
  inputsBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 5,
  },
  inputBox: { marginBottom: 25 },
  inputSize: {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
  },
  btnBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 4,
    marginTop: "10%",
  },
});

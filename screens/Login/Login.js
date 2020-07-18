import React from "react";
import { View } from "react-native";
import Input from "../../components/Input";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import styles from "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";
import { auth } from "../../utils/firebase";

//stworzyc komponent z login form i sign up form takie same !!!!!!!!!!!111

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const userStore = useSelector(({ user }) => user);
  const { setUserMail, setUserPassword } = userActions;
  const handleInputPassword = (val) => dispatch(setUserPassword(val));
  const handleInputMail = (val) => dispatch(setUserMail(val));
  const handleBtnLogin = () => {
    auth
      .signInWithEmailAndPassword(userStore.mail, userStore.password)
      .then(() => {
        navigation.navigate("Drawer");
      })
      .catch((err) => alert(err));
  };
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.first,
  };
  return (
    <View style={styles.screen}>
      <View style={styles.inputsBox}>
        <View style={styles.inputBox}>
          <Input
            label="mail"
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
          title="log in"
          customStyle={primaryBtn}
          txtColor={COLORS.fourth}
          onPress={handleBtnLogin}
        />
      </View>
    </View>
  );
};

export default Login;

import React from "react";
import { View } from "react-native";
import Basic from "../../components/Basic";
import Input from "../../components/Input";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import DIMENSIONS from "../../constans/DIMENSIONS";
import styles from "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../actions";
import { auth } from "../../utils/firebase";

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
        navigation.navigate("Menu", { screen: "Menu" });
      })
      .catch((err) => alert(err));
  };

  return (
    <Basic title="log in" size="lg" navigation={navigation}>
      <View style={styles.top}>
        <View style={styles.box}>
          <View style={styles.inputBox}>
            <Input
              label="mail"
              size={styles.inputSize}
              change={handleInputMail}
              value={userStore.mail}
            />
          </View>
          <View style={styles.btnBox}>
            <Input
              label="password"
              size={styles.inputSize}
              change={handleInputPassword}
              value={userStore.password}
            />
          </View>
        </View>
        <Button
          title="log in"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.first}
          txtColor={COLORS.fourth}
          onPress={handleBtnLogin}
        />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={() => navigation.goBack()}
        />
      </View>
    </Basic>
  );
};

export default Login;

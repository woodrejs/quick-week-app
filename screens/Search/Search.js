import React, { useState } from "react";
import { View } from "react-native";
import COLORS from "../../constans/COLORS";
import Button from "../../components/Button";
import styles from "./Search.css";
import Steps from "../../components/Steps";
import SearchPhrase from "../../components/SearchPhrase";
import SearchCategories from "../../components/SearchCategories";
import SearchDate from "../../components/SearchDate";
import DIMENSIONS from "../../constans/DIMENSIONS";

const Search = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step < 3 ? step + 1 : 1);
  const prevStep = () => setStep(step > 1 ? step - 1 : step);
  const goMenu = () => navigation.navigate("Menu", { screen: "Menu" });
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.75,
    backgroundColor: COLORS.fourth,
  };
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        {step === 1 && <SearchPhrase next={nextStep} />}
        {step === 2 && <SearchCategories next={nextStep} />}
        {step === 3 && <SearchDate navigation={navigation} next={nextStep} />}
      </View>
      <View style={styles.mid}>
        <Steps step={step} steps={3} />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          customStyle={primaryBtn}
          txtColor={COLORS.third}
          onPress={step === 1 ? goMenu : prevStep}
        />
      </View>
    </View>
  );
};

export default Search;

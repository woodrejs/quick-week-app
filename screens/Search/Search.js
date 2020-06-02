import React, { useState } from "react";
import { View } from "react-native";
import COLORS from "../../constans/COLORS";
import Basic from "../../components/Basic";
import Button from "../../components/Button";
import styles from "./Search.css";
import Steps from "../../components/Steps";
import SearchPhrase from "../../components/SearchPhrase";
import SearchCategories from "../../components/SearchCategories";
import SearchDate from "../../components/SearchDate";
import DIMENSIONS from "../../constans/DIMENSIONS";

const Search = ({ navigation }) => {
  const [step, setStep] = useState(2);
  const nextStep = () => {
    if (step === 3) navigation.navigate("Result");
    else setStep(step + 1);
  };
  const prevStep = () => {
    if (step === 1) navigation.navigate("Menu", { screen: "Menu" });
    else setStep(step - 1);
  };
  return (
    <Basic title="search" size="sm" navigation={navigation}>
      <View style={styles.top}>
        {step === 1 && <SearchPhrase next={nextStep} />}
        {step === 2 && <SearchCategories next={nextStep} />}
        {step === 3 && <SearchDate next={nextStep} />}
      </View>
      <View style={styles.mid}>
        <Steps step={step} steps={3} />
      </View>
      <View style={styles.bot}>
        <Button
          title="back"
          height={DIMENSIONS.height * 0.05}
          width={DIMENSIONS.width * 0.75}
          bckColor={COLORS.fourth}
          txtColor={COLORS.third}
          onPress={prevStep}
        />
      </View>
    </Basic>
  );
};

export default Search;

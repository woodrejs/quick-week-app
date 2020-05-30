import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import Basic from "../../components/Basic";
import Txt from "../../components/Txt";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Tag from "../../components/Tag";
import BckImg from "../../img/test.jpg";
import IconsSection from "../../components/IconsSection";
import InfoIcon from "../../components/InfoIcon";
import Clock1 from "../../img/icons/clock1_icon.svg";
import Gallery from "../../components/Gallery";
import styles from "./Event.css";
import BotBck from "../../img/backgrounds/botBck.svg";

const title = "jakis przykladowy tytul";
const txt =
  " Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book";

const Event = ({ navigation }) => {
  return (
    <Basic title="event" noBck={true} navigation={navigation}>
      <ScrollView contentContainerStyle={styles.screen}>
        <View style={styles.titleBox}>
          <Txt weight={700} customStyle={styles.title}>
            {title}
          </Txt>
        </View>

        <View style={styles.tagsBox}>
          <Tag title="tytul" />
          <Tag title="tytul" />
          <Tag title="tytul" />
          <Tag title="tytul" />
          <Tag title="tytul" />
          <Tag title="tytul" />
          <Tag title="tytul" />
          <Tag title="tytul" />
        </View>

        <View style={styles.imgBox}>
          <ImageBackground source={BckImg} style={styles.img}>
            <View style={styles.mask}></View>
            <IconsSection customStyle={styles.imgIconsBox} iconSize={30} />
          </ImageBackground>
        </View>

        <View style={styles.infoIconsBox}>
          <InfoIcon icon={<Clock1 height={30} width={30} />} txt="21:00 " />
          <InfoIcon icon={<Clock1 height={30} width={30} />} txt="20pln " />
          <InfoIcon
            icon={<Clock1 height={30} width={30} />}
            txt="22-05-2020 "
          />
          <InfoIcon
            icon={<Clock1 height={30} width={30} />}
            txt="OBORNICKA 22/20 "
          />
        </View>

        <View style={styles.txtBox}>
          <Txt weight={500} customstyle={styles.txt}>
            {txt}
          </Txt>
        </View>

        <View style={styles.botBox}>
          <BotBck style={styles.bck} />
          <View style={styles.btnBox}>
            <Button
              title="go web"
              height={30}
              width={360}
              bckColor={COLORS.fourth}
              txtColor={COLORS.third}
            />
          </View>
          <View style={styles.galleryBox}>
            <Gallery />
          </View>
          <View style={styles.btnBox}>
            <Button
              title="go top"
              height={30}
              width={360}
              bckColor={COLORS.fourth}
              txtColor={COLORS.third}
            />
            <Button
              title="go back"
              height={30}
              width={360}
              bckColor={COLORS.fourth}
              txtColor={COLORS.third}
              onPress={() => navigation.goBack()}
            />
          </View>
        </View>
      </ScrollView>
    </Basic>
  );
};

export default Event;

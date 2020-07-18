import React, { useRef } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Linking,
  Alert,
} from "react-native";
import Txt from "../../components/Txt";
import Button from "../../components/Button";
import COLORS from "../../constans/COLORS";
import Tag from "../../components/Tag";
import IconsSection from "../../components/IconsSection";
import InfoIcon from "../../components/InfoIcon";
import Clock1 from "../../img/icons/clock1_icon.svg";
import Gallery from "../../components/Gallery";
import styles from "./Event.css";
import BotBck from "../../img/backgrounds/botBck.svg";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { useSelector } from "react-redux";
import uuid from "uuid-random";
import { convertDescription } from "../../functions/convertData";

const Event = ({ navigation }) => {
  const eventStore = useSelector(({ event }) => event.data);
  const ref = React.createRef();

  const title = eventStore.title;
  const mainImg = eventStore.images.length
    ? { uri: eventStore.images[0].standard }
    : null;
  const street = eventStore.street ? eventStore.street : "brak";
  const telephone = eventStore.telephone ? eventStore.telephone : "brak";
  const email = eventStore.email ? eventStore.email : "brak";
  const carPark = eventStore.carParkAvailable ? "dostępny" : "brak";
  const images = eventStore.images;
  const externalLink = eventStore.externalLink;
  const longDescription = convertDescription(eventStore.longDescription);
  const tags = eventStore.categories.map((category) => (
    <Tag title={category.name} key={uuid()} />
  ));
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.9,
    backgroundColor: COLORS.fourth,
  };
  const handleButtonLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
    else Alert.alert(`Don't know how to open this URL: ${url}`);
  };
  const handleButtongoTop = () =>
    ref.current.scrollResponderScrollTo({
      x: 0,
      y: 0,
      animated: true,
    });

  return (
    <View>
      <ScrollView contentContainerStyle={styles.screen} ref={ref}>
        <View style={styles.titleBox}>
          <Txt weight={700} customStyle={styles.title}>
            {title}
          </Txt>
        </View>

        <View style={styles.tagsBox}>{tags}</View>

        <View style={styles.imgBox}>
          <ImageBackground source={mainImg} style={styles.img}>
            <View style={styles.mask}></View>
            <IconsSection
              customStyle={styles.imgIconsBox}
              iconSize={30}
              id={eventStore.id}
              heartIcon={true}
              quickIcon={!eventStore.type}
              type={eventStore.type} /// do zrobienia
              image={eventStore.images[0].standard}
              title={eventStore.title}
            />
          </ImageBackground>
        </View>

        <View style={styles.infoIconsBox}>
          <InfoIcon icon={<Clock1 height={30} width={30} />} txt={telephone} />
          <InfoIcon icon={<Clock1 height={30} width={30} />} txt={email} />
          <InfoIcon icon={<Clock1 height={30} width={30} />} txt={carPark} />
          <InfoIcon icon={<Clock1 height={30} width={30} />} txt={street} />
        </View>

        <View style={styles.txtBox}>
          <Txt weight={500} customstyle={styles.txt}>
            {longDescription}
          </Txt>
        </View>

        <View style={styles.botBox}>
          <BotBck style={styles.bck} />
          <View style={styles.btnBox}>
            <Button
              title="go web"
              customStyle={primaryBtn}
              txtColor={COLORS.third}
              onPress={() => handleButtonLink(externalLink)}
            />
          </View>
          <View style={styles.galleryBox}>
            <Gallery data={images} />
          </View>
          <View style={styles.btnBox}>
            <Button
              title="go top"
              customStyle={primaryBtn}
              txtColor={COLORS.third}
              onPress={handleButtongoTop}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Event;

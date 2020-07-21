import React from "react";
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
import Gallery from "../../components/Gallery";
import styles from "./Event.css";
import DIMENSIONS from "../../constans/DIMENSIONS";
import { useSelector } from "react-redux";
import uuid from "uuid-random";
import InfoIconsSection from "../../components/InfoIconsSection";

const Event = () => {
  const ref = React.createRef();
  const data = useSelector(({ event }) => event.data);

  const { id, title, images, externalLink, longDescription, type } = data;

  const tags = data.categories.map(({ name }) => (
    <Tag title={name} key={uuid()} />
  ));

  const handleButtonLink = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) await Linking.openURL(url);
    else Alert.alert(`Don't know how to open this URL: ${url}`);
  };
  const handleButtongoTop = () => {
    ref.current.scrollResponderScrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };
  const primaryBtn = {
    height: DIMENSIONS.height * 0.05,
    width: DIMENSIONS.width * 0.9,
    backgroundColor: COLORS.fourth,
  };

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
          <ImageBackground
            source={{ uri: images[0].standard }}
            style={styles.img}
          >
            <View style={styles.mask}></View>
            <IconsSection
              data={data}
              customStyle={styles.imgIconsBox}
              iconSize={30}
              heartIcon={true}
              quickIcon={!type}
            />
          </ImageBackground>
        </View>

        <InfoIconsSection data={data} />

        <View style={styles.txtBox}>
          <Txt weight={500} customstyle={styles.txt}>
            {longDescription}
          </Txt>
        </View>

        <View style={styles.botBox}>
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
/*
   <View style={styles.infoIconsBox}>
          <InfoIcon
            icon={type ? Phone(30, COLORS.first) : Clock(30, COLORS.first)}
            txt={type ? telephone : startDate}
          />
          <InfoIcon
            icon={type ? Email(30, COLORS.first) : Place(30, COLORS.first)}
            txt={type ? email : place}
          />
          <InfoIcon
            icon={type ? Parking(30, COLORS.first) : Ticket(30, COLORS.first)}
            txt={type ? carParkAvailable : ticketing}
          />
          <InfoIcon icon={Street(30, COLORS.first)} txt={street} />
        </View>

        */

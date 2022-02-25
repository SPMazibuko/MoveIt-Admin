import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import FormHeader from "../components/FormHeader";
import FormSelectBtn from "../components/FormSelectBtn";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SigngUpForm";

const { width } = Dimensions.get("window");

export default function Login() {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27,27,51,1)", "rgba(27,27,51,0.4)"],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ["rgba(27,27,51,0.4)", "rgba(27,27,51,1)"],
  });

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/Images/background/background1.jpeg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <View
          style={{ flex: 0.5, alignContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              width: 130,
              height: 130,
              borderRadius: 120,
              marginTop: 10,
            }}
            source={require("../../assets/Images/logo/icon.jpeg")}
          />
        </View>
        <View
          style={{
            alignContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(234, 188, 212, 0.3)",
            borderRadius: 20,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 20,
          }}
        >
          <View style={{ height: 90, margin: 5 }}>
            <FormHeader
              leftHeading="Welcome "
              rightHeading="Back"
              subHeading="Move It Admin"
              rightHeaderOpacity={rightHeaderOpacity}
              leftHeaderTranslateX={leftHeaderTranslateX}
              rightHeaderTranslateY={rightHeaderTranslateY}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <FormSelectBtn
              style={styles.borderLeft}
              backgroundColor="rgba(20,105,155,1)"
              title="Login"
            />
            <FormSelectBtn
              style={styles.borderRight}
              backgroundColor="rgba(20,105,155,0.3)"
              title="Sign Up"
            />
          </View>
          <ScrollView
            ref={scrollView}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: animation } } }],
              { useNativeDriver: false }
            )}
          >
            <LoginForm />
            <ScrollView>
              <SignUpForm />
            </ScrollView>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
});

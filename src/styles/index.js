import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");
const height_logo = height * 0.15;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F6F6",
  },
  background: {
    flex: 1,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 36,
  },
  header: {
    color: "#fff",
    height: 100,
  },
  button: {
    alignItems: "center",
    marginTop: 20,
  },
  signIn: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  loginFooter: {
    flex: 3,
    backgroundColor: "#F8FAFD",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 50,
  },
  landingFooter: {
    paddingVertical: 310,
    paddingHorizontal: 10,
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    fontWeight: "800",
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 200,
  },
  logoText1: {
    color: "#fff",
    marginTop: 90,
    fontSize: 35,
    marginLeft: 10,
    fontWeight: "bold",
  },
  message: {
    color: "#fff",
    fontWeight: "300",
    marginLeft: 10,
    fontSize: 18,
  },
  covidBox: {
    flex: 2,
    backgroundColor: "#05375A",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  now: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  schedule: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  accommodation: {
    width: 250,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    position: "absolute",
    bottom: 22,
  },
  deliveryView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: -45,
  },

  landingButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    position: "absolute",
    bottom: 29,
  },
  accommodationView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  textInput: {
    width: "80%",
    fontSize: 18,
    color: "#101010",
    backgroundColor: "#F8FAFD",
  },
  textInputContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    borderColor: "rgba(000, 000, 000, .3)",
    borderWidth: 1,
  },
  btn: {
    backgroundColor: "#4E7CAA",
    width: "85%",
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  deliveryText: {
    fontSize: 16,
    fontFamily: "normal",
    fontWeight: "400",
    color: "rgba(255, 255, 255, 1)",
  },
});

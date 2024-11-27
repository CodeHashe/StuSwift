import { View, StyleSheet, Image, Text } from "react-native";

function SpotifyPlayer({ route }) {
  const { trackData } = route.params; // Get the data passed from SpotifyDisplay
  const { trackImage, trackTitle, artistName } = trackData;

  return (
    <View style={styles.container}>
      <Image source={{ uri: trackImage }} style={styles.albumImage} />
      <Text style={styles.trackName}>{trackTitle}</Text>
      <Text style={styles.artistName}>{artistName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  albumImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  trackName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  artistName: {
    fontSize: 14,
    color: "#555",
  },
});

export default SpotifyPlayer;

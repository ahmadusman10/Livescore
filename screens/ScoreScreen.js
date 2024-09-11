import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import data from './data.json'; 

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.appName}>LiveScore</Text>
    </View>
  );
};

const MatchItem = ({ match }) => (
  <View style={styles.matchItemContainer}>
    <View style={styles.matchHeader}>
      <Text style={styles.date}>{match.date}</Text>
      <Text style={styles.competition}>{match.competition}</Text>
    </View>
    <View style={styles.teamsContainer}>
      {match.teams.map((team, index) => (
        <View key={index} style={styles.teamContainer}>
          <Image source={{ uri: team.logo }} style={styles.logo} />
          <View style={styles.teamInfo}>
            <Text style={styles.teamName}>{team.name}</Text>
            <Text style={styles.teamScore}>{team.score}</Text>
          </View>
        </View>
      ))}
    </View>
    <Text style={styles.time}>{match.time}</Text>
  </View>
);

// SportCategory Component
const SportCategory = ({ sport }) => (
  <View style={styles.sportContainer}>
    <FlatList
      data={sport.matches}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => <MatchItem match={item} />}
      showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
    />
  </View>
);

// FilterTags Component
const FilterTags = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <View style={styles.tagsContainer}>
      <FlatList
        data={tags}
        keyExtractor={item => item}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tag,
              item === selectedTag && styles.selectedTag
            ]}
            onPress={() => onTagSelect(item)}
          >
            <Text
              style={[
                styles.tagText,
                item === selectedTag && styles.selectedTagText
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      />
    </View>
  );
};

// ScoreScreen Component
const ScoreScreen = () => {
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract sport names for filter tags
  const sportTags = ['All', ...new Set(data.sports.map(sport => sport.name))];

  // Filter sports based on the selected tag
  const filteredSports = selectedTag === 'All' 
    ? data.sports 
    : data.sports.filter(sport => sport.name === selectedTag);

  return (
    <View style={styles.container}>
      <TopBar />
      <FilterTags
        tags={sportTags}
        selectedTag={selectedTag}
        onTagSelect={setSelectedTag}
      />
      <FlatList
        data={filteredSports}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SportCategory sport={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 8,
    backgroundColor:"#F9F9FB",
   
  },
  topBar: {
    paddingVertical:25,
    paddingHorizontal:15,
    alignItems: 'flex-start',
   
  },
  appName: {
    fontSize: 35,
    fontWeight: 'condensedBold',
  },
  sportContainer: {
    marginBottom: 20,
    padding: 10,
  },
  sportName: {
    fontSize: 24,
    fontWeight: 'condensed',
    marginBottom: 10,
  },
  matchItemContainer: {
    padding: 20,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#ffff',
    elevation:0.2,
    borderColor: '#ffff',
    borderWidth: 1,
  },
  matchHeader: {
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  competition: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  teamsContainer: {
    marginBottom: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  logo: {
    width: 30,
    height: 30,
    backgroundColor:'grey',
    borderRadius: 100,
    marginRight: 10,
  },
  teamInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.9,
  },
  teamName: {
    fontSize: 16,
    flex: 1,
  },
  teamScore: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal:5,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
    marginRight: 10,
    backgroundColor: '#ffff',
    height:60,
    width:130,
  },
  selectedTag: {
    backgroundColor: '#7576FA',
  },
  tagText: {
    fontSize: 16,
    padding:10
  },
  selectedTagText: {
    color: '#fff',
  },
});

export default ScoreScreen;







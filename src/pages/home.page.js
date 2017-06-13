import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Container, Content, Card, CardItem, Body } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects'

class HomePage extends Component {
  state = {  }
  render() {
    return (
      <Container>
        <Content>
          <Image source={require('../images/slider-1.jpeg')} style={styles.sliderImage}>
            <Text style={styles.textHeader}>¿A dónde vas hoy?</Text>
            <Text style={styles.textSubheader}>Cualquiera puede ser turista.</Text>
          </Image>
          <Fumi 
            elevation={5}
            label={'Ingresa un destino'}
            style={styles.searchInput}
            iconClass={FontAwesomeIcon}
            iconName={'search'}
            iconColor={'#f95a25'}
          />
          <View style={styles.quickLabelsContainer}>
            <View style={styles.quickLabel}>
              <Button transparent>
                <View style={styles.quickLabel}>
                  <FontAwesomeIcon name="coffee" size={20} color="#d6d6d6"></FontAwesomeIcon>
                  <Text style={styles.quickLabelText}>Cafeterías</Text>
                </View>
                <View style={styles.quickLabel}>
                  <FontAwesomeIcon name="cutlery" size={20} color="#d6d6d6"></FontAwesomeIcon>
                  <Text style={styles.quickLabelText}>Restaurantes</Text>
                </View>
                <View style={styles.quickLabel}>
                  <FontAwesomeIcon name="building" size={20} color="#d6d6d6"></FontAwesomeIcon>
                  <Text style={styles.quickLabelText}>Museos</Text>
                </View>
              </Button>
            </View>
          </View>
          <Text style={styles.featuredText}>DESTACADOS</Text>
          <ScrollView style={styles.cardsContainer}>
            <View style={styles.featuredCard}>
              <Image source={require('../images/card-1.jpeg')} style={styles.featuredCardImage}></Image>
              <View style={styles.featuredCardTextContainer}>
                <Text style={styles.fcName}>Neza York</Text>
                <Text>La bonita ciudad de Neza</Text>
                <View style={styles.fcRatingContainer}>
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#ffd700" />
                </View>
              </View>
            </View>
            <View style={styles.featuredCard}>
              <Image source={require('../images/card-2.jpeg')} style={styles.featuredCardImage}></Image>
              <View style={styles.featuredCardTextContainer}>
                <Text style={styles.fcName}>Otra Ciudad</Text>
                <Text>Ciudad Prueba</Text>
                <View style={styles.fcRatingContainer}>
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#ffd700" />
                  <FontAwesomeIcon name="star" color="#d6d6d6" />
                  <FontAwesomeIcon name="star" color="#d6d6d6" />
                </View>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
//
const styles = StyleSheet.create({
  noPadding: {
    padding: 0
  },
  sliderImage: {
    width: 'auto',
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 40,
    paddingBottom: 50
  },
  searchInput: {
    marginHorizontal: 40,
    marginTop: -40,
    elevation: 10
  },
  textHeader: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  textSubheader: {
    color: 'white',
    fontSize: 15,
    fontWeight: '100'
  },
  quickLabelsContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'center'
  },
  quickLabel: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1
  },
  quickLabelText: {
    color: '#c3c3c3'
  },
  cardsContainer: {
    flex: 1,
    padding: 10
  },
  featuredText: {
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 17
  },
  featuredCard: {
    flexDirection: 'row',
    marginBottom: 10,
    elevation: 10
  },
  featuredCardImage: {
    flex: 1,
    height: 100,
    width: 'auto'
  },
  featuredCardTextContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  fcName: {
    fontWeight: 'bold',
    fontSize: 15
  },
  fcRatingContainer: {
    flexDirection: 'row',
    marginTop: 5
  }
});

export default HomePage;
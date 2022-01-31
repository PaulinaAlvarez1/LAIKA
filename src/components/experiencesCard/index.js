import React from 'react';
import {View, Image} from 'react-native';

// @components
import Text from '../customText';

// @styles
import styles from './styles';

const ExperienceCard = ({experience}) => {
  return (
    <View style={styles.cardExperienceContainer}>
      <Image source={experience.picture} style={styles.imageExperience} />
      <View style={styles.experiencesDescription}>
        <Text style={styles.experienceTitle} bold>
          {experience.title}
        </Text>
        <Text style={styles.story}>{experience.story}</Text>
      </View>
    </View>
  );
};

export default ExperienceCard;

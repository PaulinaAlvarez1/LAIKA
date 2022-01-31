import {StyleSheet} from 'react-native';

// @theme
import {pallet} from '../../theme';

const styles = StyleSheet.create({
  cardExperienceContainer: {
    backgroundColor: pallet.laikaColor,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  imageExperience: {
    width: 110,
    height: 150,
    borderRadius: 12,
  },
  experiencesDescription: {
    maxWidth: '65%',
  },
  experienceTitle: {
    fontSize: 16,
  },
  story: {
    fontSize: 13,
  },
});

export default styles;

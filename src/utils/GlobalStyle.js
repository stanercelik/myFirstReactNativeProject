import {StyleSheet} from 'react-native';
import MyColors from '../constraints/MyColors';

export default StyleSheet.create({
  bigText: {
    flex: 1,
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 18,
  },

  bodyMain: {
    flex: 1,
    backgroundColor: MyColors.backgroundColor,
  },

  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 8,
    marginHorizontal: 6,
  },
});

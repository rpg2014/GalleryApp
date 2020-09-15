import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Gallery1: {
            screens: {
              TabOneScreen: 'gallery',
            },
          },
          
        },
      },
      Upload: {
        screens: {
          TabTwoScreen: 'upload',
        }
      },
      NotFound: '*',
    },
  },
};

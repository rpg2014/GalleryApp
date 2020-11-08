import * as Linking from 'expo-linking';

// I have no idea whats going on here
export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: {
        path: '/',
        screens: {
          // Feed: {
            // path: '',
            // screens: {
              TabOneScreen: 'feed/:id',
            // },
          // },
          
        },
      },
      Upload: {
        screens: {
          UploadScreen: 'upload',
        }
      },
      NotFound: '*',
    },
  },
};

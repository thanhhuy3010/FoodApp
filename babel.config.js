module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', 
      {
        root: ['.'],
        extensions: [ '.js', '.jsx', '.ts', '.tsx', '.json', '.svg','jpg'],
        alias: {
          '@components': './src/components'
        }
      }
    ]
  ],

};

import { FC, useState } from 'react';
import { View, Image, StyleSheet, ImageStyle, StyleProp } from 'react-native';
import { SvgUri } from 'react-native-svg';
import Typography from './Typography';

type AsyncImageProps = {
  uri: string;
  style?: StyleProp<ImageStyle>;
};

const AsyncImage: FC<AsyncImageProps> = ({ uri, style }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const renderImage = () => {
    if (uri.endsWith('.svg')) {
      return (
        <SvgUri
          uri={uri}
          width="100%"
          height="100%"
          onLoad={() => setLoading(false)}
          onError={() => setError(true)}
        />
      );
    }

    return (
      <Image
        source={{ uri }}
        style={[styles.image, style]}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        onLoadStart={() => {
          setLoading(true);
          setError(false);
        }}
      />
    );
  };

  return (
    <View style={[styles.container, style]}>
      {renderImage()}
      {loading && <View style={styles.loader} />}
      {error && (
        <View style={[styles.errorBox, style]}>
          <Typography size="md">?</Typography>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'scale-down',
  },
  loader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  errorBox: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#d91414',
  },
});

export default AsyncImage;

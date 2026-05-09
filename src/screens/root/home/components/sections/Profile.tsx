import { View, Image, StyleSheet } from 'react-native';

import ProfileImage from '@/assets/img/profile.webp';
import Typography from '@/components/ui/Typography';

import { useTheme } from '@/contexts/theme';

const ProfileSection = () => {
  const { theme } = useTheme();

  return (
    <View>
      <Image source={ProfileImage} style={styles.profileImage} />
      <View style={styles.caption}>
        <Typography size="xxl" style={styles.title}>
          Artem Volkov
        </Typography>
        <Typography style={[styles.subtitle, { color: theme.colors.primary }]}>
          Senior FrontEnd Software Engineer
        </Typography>
      </View>
    </View>
  );
};

export default ProfileSection;

const styles = StyleSheet.create({
  caption: {
    paddingHorizontal: 8,
    gap: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
  profileImage: {
    width: '100%',
    height: 485,
    objectFit: 'cover',
    borderRadius: 8,
  },
});

import { StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { Contact } from 'lucide-react-native/icons';

import Chip from '@/components/ui/Chip';
import Caption from './Caption';
import AsyncImage from '@/components/ui/AsyncImage';

const SocialItems = [
  {
    label: '#LeetCode',
    color: '#f79800',
    icon: 'https://assets.leetcode.com/static_assets/public/icons/favicon.ico',
    link: 'https://leetcode.com/u/artyomvolkov/',
  },
  {
    label: '#HackerRank',
    color: '#4ac02f',
    icon: 'https://www.hackerrank.com/favicon.ico',
    link: 'https://www.hackerrank.com/profile/artyom_volkow',
  },
  {
    label: '#Codewars',
    color: '#f7632e',
    icon: 'https://www.codewars.com/favicon.ico',
    link: 'https://www.codewars.com/users/Artem.Volkov',
  },
  {
    label: '#LinkedIn',
    color: '#0077B5',
    link: 'https://www.linkedin.com/in/artem-volkov-909373109/',
  },
  {
    label: '#Github',
    color: '#333',
    icon: 'https://github.githubassets.com/favicons/favicon.png',
    link: 'https://github.com/ArtyomVolkov',
  },
  {
    label: '#Email',
    color: '#303030',
    icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico',
    link: 'mailto:artyom.volkow@gmail.com',
  },
];

const SocialAndContactsSection = () => {
  const handlePress = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      Alert.alert('Failed to open URL: ' + (error as Error).message);
    }
  };

  return (
    <Caption icon={Contact} title="Social and Contacts">
      {SocialItems.map(item => (
        <TouchableOpacity
          key={item.label}
          onPress={() => handlePress(item.link)}
        >
          <Chip
            label={item.label}
            color={item.color}
            style={{
              label: styles.label,
            }}
            icon={
              item.icon && <AsyncImage uri={item.icon} style={styles.image} />
            }
          />
        </TouchableOpacity>
      ))}
    </Caption>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fff',
  },
  image: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
});

export default SocialAndContactsSection;
